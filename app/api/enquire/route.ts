import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const { name, email, company } = body;

    if (!name || !email || !company) {
      return NextResponse.json(
        { error: "Please fill all required fields." },
        { status: 400 }
      );
    }

    console.log("New Lead:", body);

    return NextResponse.json({
      success: true,
      message: "Thank you! We'll contact you soon.",
    });
  } catch {
    return NextResponse.json(
      {
        error: "Something went wrong.",
      },
      { status: 500 }
    );
  }
}