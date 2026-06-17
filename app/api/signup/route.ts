import { NextRequest, NextResponse } from "next/server";
import { appendSignupToSheet } from "@/lib/sheets";

export async function POST(req: NextRequest) {
  try {
    const { name, email, phone, location } = await req.json();
    if (!name || !email) {
      return NextResponse.json({ error: "Name and email required." }, { status: 400 });
    }
    await appendSignupToSheet({ name, email, phone: phone || "", location: location || "" });
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Failed to save signup." }, { status: 500 });
  }
}
