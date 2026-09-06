import { NextRequest, NextResponse } from "next/server";
import nodemailer                    from "nodemailer";
import { validateContact }           from "@/lib/contact-schema";
import type { ContactFormData, FieldErrors } from "@/lib/contact-schema";

/* ── Request limits ──────────────────────────────────────────────────────── */
const MAX_BODY_BYTES = 20_000;

/* ── SMTP transporter ────────────────────────────────────────────────────── */
/* Reuses the same SMTP contract as app/api/offer/route.ts (SMTP_HOST,       */
/* SMTP_PORT, SMTP_SECURE, SMTP_USER, SMTP_PASS, SMTP_FROM) — this route     */
/* only adds its own recipient variable, CONTACT_RECIPIENT.                  */
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

/* ── Header/value sanitisation ───────────────────────────────────────────── */
// Strips CR/LF and other control characters so user input can never inject
// extra headers into the outgoing email (header injection).
function sanitizeHeaderValue(v: string): string {
  return v.replace(/[\r\n\x00-\x08\x0B\x0C\x0E-\x1F]/g, " ").trim();
}

function escapeHtml(v: string): string {
  return v
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

/* ── Email body ──────────────────────────────────────────────────────────── */
function buildEmailBody(d: ContactFormData): string {
  const line = (label: string, value: string | undefined) =>
    `${label.padEnd(20)} ${value ?? "—"}`;

  return [
    "New General Inquiry",
    "=".repeat(60),
    "",
    line("Name:",         d.name),
    line("Email:",        d.email),
    line("Phone:",        d.phone),
    line("Country:",      d.country),
    line("Inquiry type:", d.inquiryType),
    "",
    "OPTIONAL DETAILS",
    "-".repeat(40),
    line("Project location:", d.location),
    line("Intended use:",     d.intendedUse),
    line("Project stage:",    d.projectStage),
    line("Timeline:",         d.timeline),
    "",
    "MESSAGE",
    "-".repeat(40),
    d.message,
    "",
    "=".repeat(60),
    `Submitted: ${new Date().toUTCString()}`,
  ].join("\n");
}

function buildHtmlBody(d: ContactFormData): string {
  const row = (label: string, value: string | undefined) =>
    `<tr>
      <td style="padding:6px 16px 6px 0;font-size:11px;letter-spacing:0.1em;text-transform:uppercase;color:#9a8e87;white-space:nowrap;vertical-align:top;">${escapeHtml(label)}</td>
      <td style="padding:6px 0;font-size:14px;color:#1a1714;vertical-align:top;">${value ? escapeHtml(value) : "<span style='color:#b8b4ae'>—</span>"}</td>
    </tr>`;

  const section = (heading: string, rows: string) =>
    `<tr><td colspan="2" style="padding:20px 0 8px;font-size:11px;letter-spacing:0.12em;text-transform:uppercase;color:#5c7a5c;font-weight:600;border-top:1px solid #e8e4df;">${escapeHtml(heading)}</td></tr>${rows}`;

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
            <h1 style="margin:8px 0 0;font-size:22px;font-weight:400;color:#ffffff;letter-spacing:0.02em;">New General Inquiry</h1>
          </td>
        </tr>

        <!-- Body -->
        <tr>
          <td style="padding:32px;">
            <table width="100%" cellpadding="0" cellspacing="0">
              ${section("Contact",
                row("Full name",     d.name)        +
                row("Email",         d.email)       +
                row("Phone",         d.phone)       +
                row("Country",       d.country)     +
                row("Inquiry type",  d.inquiryType)
              )}
              ${section("Optional details",
                row("Project location", d.location)     +
                row("Intended use",     d.intendedUse)   +
                row("Project stage",    d.projectStage)  +
                row("Timeline",         d.timeline)
              )}
              ${section("Message",
                `<tr><td colspan="2" style="padding:8px 0;font-size:14px;color:#1a1714;line-height:1.7;">${escapeHtml(d.message).replace(/\n/g, "<br>")}</td></tr>`
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
  /* 1. Reject unexpected content types before touching the body */
  const contentType = req.headers.get("content-type") ?? "";
  if (!contentType.toLowerCase().includes("application/json")) {
    return NextResponse.json({ error: "Unsupported content type." }, { status: 415 });
  }

  /* 2. Read and size-check the raw body before parsing */
  const rawBody = await req.text();
  if (rawBody.length > MAX_BODY_BYTES) {
    return NextResponse.json({ error: "Request body too large." }, { status: 413 });
  }

  let body: unknown;
  try {
    body = JSON.parse(rawBody);
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  /* 3. Anti-instant-submit — reject submissions that arrive implausibly fast
        after the form was rendered (client sends the mount time as `loadedAt`). */
  const b = body as Record<string, unknown>;
  const loadedAt = typeof b.loadedAt === "number" ? b.loadedAt : undefined;
  if (loadedAt && Date.now() - loadedAt < 2000) {
    return NextResponse.json({ success: true }, { status: 200 });
  }

  /* 4. Validate (also checks the honeypot field) */
  const result = validateContact(body);

  if (!result.ok) {
    const { errors, spam } = result as { ok: false; errors: FieldErrors; spam?: true };
    if (spam) {
      // Honeypot tripped — respond as if successful, without sending anything.
      return NextResponse.json({ success: true }, { status: 200 });
    }
    return NextResponse.json({ errors }, { status: 422 });
  }

  const d = result.data;

  /* 5. Verify SMTP config is present before attempting to connect — never
        log field values (PII), only presence/absence of config. */
  const smtpHost   = process.env.SMTP_HOST;
  const smtpUser   = process.env.SMTP_USER;
  const smtpPass   = process.env.SMTP_PASS;
  const recipient  = process.env.CONTACT_RECIPIENT;

  if (!recipient) {
    console.error("[contact] CONFIG_MISSING CONTACT_RECIPIENT not set");
    return NextResponse.json(
      { error: "Server configuration error: recipient address is not configured." },
      { status: 500 }
    );
  }

  if (!smtpHost || !smtpUser || !smtpPass) {
    console.error(
      "[contact] CONFIG_MISSING SMTP vars —",
      `SMTP_HOST: ${smtpHost ? "set" : "MISSING"},`,
      `SMTP_USER: ${smtpUser ? "set" : "MISSING"},`,
      `SMTP_PASS: ${smtpPass ? "set" : "MISSING"}`
    );
    return NextResponse.json(
      { error: "Server configuration error: SMTP credentials are not configured." },
      { status: 500 }
    );
  }

  /* 6. Send email */
  const safeName  = sanitizeHeaderValue(d.name).slice(0, 120);
  const safeEmail = sanitizeHeaderValue(d.email).slice(0, 180);
  const safeType  = sanitizeHeaderValue(d.inquiryType).slice(0, 60);

  try {
    const transporter = createTransporter();

    await transporter.sendMail({
      from:    process.env.SMTP_FROM ?? `"Soleta Website" <${smtpUser}>`,
      to:      recipient,
      replyTo: `"${safeName}" <${safeEmail}>`,
      subject: `New Inquiry — ${safeType} — ${safeName}`,
      text:    buildEmailBody(d),
      html:    buildHtmlBody(d),
    });

    console.log("[contact] Email delivered to", recipient);
  } catch (err) {
    const e = err as Record<string, unknown>;
    console.error("[contact] SMTP_SEND_FAILED", {
      code:    e?.code    ?? "unknown",
      command: e?.command ?? "unknown",
      message: typeof e?.message === "string" ? e.message.slice(0, 200) : "unknown",
      host:    smtpHost,
      port:    process.env.SMTP_PORT ?? "587",
      user:    smtpUser.replace(/(?<=.).(?=.*@)/g, "*"),
    });
    return NextResponse.json(
      { error: "Your message was received but could not be delivered by email. Please contact us directly at office@soletahomes.com." },
      { status: 500 }
    );
  }

  return NextResponse.json({ success: true }, { status: 200 });
}
