import { NextRequest, NextResponse } from "next/server";
import { validateContact }           from "@/lib/contact-schema";

export async function POST(req: NextRequest) {
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const result = validateContact(body);

  if (!result.ok) {
    return NextResponse.json({ errors: result.errors }, { status: 422 });
  }

  // No database — log submission to server console.
  // Replace this block with an email service or CRM integration when ready.
  console.log("[contact] New inquiry —", new Date().toISOString());
  console.log("  Name:         ", result.data.name);
  console.log("  Email:        ", result.data.email);
  console.log("  Phone:        ", result.data.phone ?? "—");
  console.log("  Project type: ", result.data.projectType);
  console.log("  Message:      ", result.data.message);

  return NextResponse.json({ success: true }, { status: 200 });
}
