import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, workEmail, company } = body ?? {};

    if (!name || !workEmail || !company) {
      return NextResponse.json(
        { error: "Missing required fields." },
        { status: 400 }
      );
    }

    // Mock persistence layer. Replace with a CRM/email integration
    // (HubSpot, SendGrid, etc.) in production.
    console.log("New enterprise enquiry:", body);

    return NextResponse.json({ ok: true }, { status: 200 });
  } catch {
    return NextResponse.json(
      { error: "Invalid request payload." },
      { status: 400 }
    );
  }
}
