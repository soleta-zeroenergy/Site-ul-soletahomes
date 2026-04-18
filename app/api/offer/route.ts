import { NextRequest, NextResponse } from "next/server";
import nodemailer                    from "nodemailer";
import { validateOffer }             from "@/lib/offer-schema";
import type { OfferFormData, OfferFieldErrors } from "@/lib/offer-schema";

/* ── SMTP transporter ────────────────────────────────────────────────────── */
// All credentials come from environment variables — never from client code.
function createTransporter() {
  const host   = process.env.SMTP_HOST;
  const port   = parseInt(process.env.SMTP_PORT ?? "587", 10);
  const secure = process.env.SMTP_SECURE === "true";
  const user   = process.env.SMTP_USER;
  const pass   = process.env.SMTP_PASS;

  if (!host || !user || !pass) {
    throw new Error("SMTP environment variables are not configured (SMTP_HOST, SMTP_USER, SMTP_PASS).");
  }

  return nodemailer.createTransport({
    host,
    port,
    secure,
    auth: { user, pass },
  });
}

/* ── Email body ──────────────────────────────────────────────────────────── */
function buildEmailBody(d: OfferFormData): string {
  const line = (label: string, value: string | undefined) =>
    `${label.padEnd(26)} ${value ?? "—"}`;

  return [
    "New Private Offer Request",
    "=".repeat(60),
    "",
    "ABOUT THE CLIENT",
    "-".repeat(40),
    line("Full name:",           d.name),
    line("Email:",               d.email),
    line("Phone:",               d.phone),
    line("Country of residence:", d.country),
    "",
    "THE PROJECT",
    "-".repeat(40),
    line("Project location:",    d.location),
    line("Land status:",         d.landStatus),
    line("Intended use:",        d.intendedUse),
    line("Project path:",        d.projectPath),
    line("Estimated size:",      d.estimatedSize),
    line("Budget:",              d.budget),
    "",
    "SITE AND READINESS",
    "-".repeat(40),
    line("Site type:",           d.siteType),
    line("Timeline:",            d.timeline),
    line("Documents available:", d.documents?.join(", ") ?? "None"),
    "",
    "PROJECT DESCRIPTION",
    "-".repeat(40),
    d.description,
    "",
    "OPTIONAL",
    "-".repeat(40),
    line("Referral source:",     d.referral),
    "",
    "=".repeat(60),
    `Submitted: ${new Date().toUTCString()}`,
  ].join("\n");
}

function buildHtmlBody(d: OfferFormData): string {
  const row = (label: string, value: string | undefined) =>
    `<tr>
      <td style="padding:6px 16px 6px 0;font-size:11px;letter-spacing:0.1em;text-transform:uppercase;color:#9a8e87;white-space:nowrap;vertical-align:top;">${label}</td>
      <td style="padding:6px 0;font-size:14px;color:#1a1714;vertical-align:top;">${value ?? "<span style='color:#b8b4ae'>—</span>"}</td>
    </tr>`;

  const section = (heading: string, rows: string) =>
    `<tr><td colspan="2" style="padding:20px 0 8px;font-size:11px;letter-spacing:0.12em;text-transform:uppercase;color:#5c7a5c;font-weight:600;border-top:1px solid #e8e4df;">${heading}</td></tr>${rows}`;

  return `<!DOCTYPE html>
<html>
<head><meta charset="utf-8" /></head>
<body style="margin:0;padding:0;background:#f7f4f0;font-family:Georgia,serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f7f4f0;padding:32px 0;">
    <tr><td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="background:#ffffff;border:1px solid #e8e4df;">

        <!-- Header -->
        <tr>
          <td style="background:#18392b;padding:28px 32px;">
            <p style="margin:0;font-size:10px;letter-spacing:0.18em;text-transform:uppercase;color:#a8c5a0;">Soleta Homes</p>
            <h1 style="margin:8px 0 0;font-size:22px;font-weight:400;color:#ffffff;letter-spacing:0.02em;">New Private Offer Request</h1>
          </td>
        </tr>

        <!-- Body -->
        <tr>
          <td style="padding:32px;">
            <table width="100%" cellpadding="0" cellspacing="0">
              ${section("About the client",
                row("Full name",            d.name)   +
                row("Email",               d.email)  +
                row("Phone",               d.phone)  +
                row("Country",             d.country)
              )}
              ${section("The project",
                row("Project location",    d.location)     +
                row("Land status",         d.landStatus)   +
                row("Intended use",        d.intendedUse)  +
                row("Project path",        d.projectPath)  +
                row("Estimated size",      d.estimatedSize)+
                row("Budget",              d.budget)
              )}
              ${section("Site and readiness",
                row("Site type",           d.siteType)                          +
                row("Timeline",            d.timeline)                          +
                row("Documents available", d.documents?.join(", ") ?? "None")
              )}
              ${section("Project description",
                `<tr><td colspan="2" style="padding:8px 0;font-size:14px;color:#1a1714;line-height:1.7;">${d.description.replace(/\n/g, "<br>")}</td></tr>`
              )}
              ${section("Optional",
                row("Referral source", d.referral)
              )}
            </table>
          </td>
        </tr>

        <!-- Footer -->
        <tr>
          <td style="padding:20px 32px;background:#f7f4f0;border-top:1px solid #e8e4df;">
            <p style="margin:0;font-size:11px;color:#9a8e87;">
              Submitted ${new Date().toUTCString()} · soletahomes.com
            </p>
          </td>
        </tr>

      </table>
    </td></tr>
  </table>
</body>
</html>`;
}

/* ── Route handler ───────────────────────────────────────────────────────── */
export async function POST(req: NextRequest) {
  /* 1. Parse body */
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  /* 2. Validate */
  const result = validateOffer(body);

  if (!result.ok) {
    const { errors } = result as { ok: false; errors: OfferFieldErrors };
    return NextResponse.json({ errors }, { status: 422 });
  }

  const d = result.data;

  /* 3. Log to console regardless of email outcome (server-side audit trail) */
  console.log("[offer] New project brief —", new Date().toISOString());
  console.log("  Name:    ", d.name);
  console.log("  Email:   ", d.email);
  console.log("  Location:", d.location);
  console.log("  Budget:  ", d.budget);
  console.log("  Timeline:", d.timeline);

  /* 4. Verify SMTP config is present before attempting to connect */
  const smtpHost = process.env.SMTP_HOST;
  const smtpUser = process.env.SMTP_USER;
  const smtpPass = process.env.SMTP_PASS;
  const recipient = process.env.PRIVATE_OFFER_RECIPIENT;

  if (!recipient) {
    console.error("[offer] CONFIG_MISSING PRIVATE_OFFER_RECIPIENT not set");
    return NextResponse.json(
      { error: "Server configuration error: recipient address is not configured." },
      { status: 500 }
    );
  }

  if (!smtpHost || !smtpUser || !smtpPass) {
    console.error(
      "[offer] CONFIG_MISSING SMTP vars —",
      `SMTP_HOST: ${smtpHost ? "set" : "MISSING"},`,
      `SMTP_USER: ${smtpUser ? "set" : "MISSING"},`,
      `SMTP_PASS: ${smtpPass ? "set" : "MISSING"}`
    );
    return NextResponse.json(
      { error: "Server configuration error: SMTP credentials are not configured." },
      { status: 500 }
    );
  }

  /* 5. Send email */
  try {
    const transporter = createTransporter();

    await transporter.sendMail({
      from:    process.env.SMTP_FROM ?? `"Soleta Website" <${smtpUser}>`,
      to:      recipient,
      replyTo: `"${d.name}" <${d.email}>`,
      subject: `New Private Offer Request — ${d.name} — ${d.location}`,
      text:    buildEmailBody(d),
      html:    buildHtmlBody(d),
    });

    console.log("[offer] Email delivered to", recipient);
  } catch (err) {
    /* Log structured error info for Vercel logs — no secrets exposed */
    const e = err as Record<string, unknown>;
    console.error("[offer] SMTP_SEND_FAILED", {
      code:    e?.code    ?? "unknown",
      command: e?.command ?? "unknown",
      message: typeof e?.message === "string" ? e.message.slice(0, 200) : "unknown",
      host:    smtpHost,
      port:    process.env.SMTP_PORT ?? "587",
      user:    smtpUser.replace(/(?<=.).(?=.*@)/g, "*"),  // mask middle chars only
    });
    return NextResponse.json(
      { error: "Your brief was received but could not be delivered by email. Please contact us directly at office@soletahomes.com." },
      { status: 500 }
    );
  }

  return NextResponse.json({ success: true }, { status: 200 });
}
