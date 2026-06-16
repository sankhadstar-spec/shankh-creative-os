import { NextRequest, NextResponse } from "next/server";
import { comparePassword, signToken } from "@/lib/auth";
import { dbGetUserByEmail } from "@/lib/db";
import { crmUpdateActivity } from "@/lib/crm";

export async function POST(req: NextRequest) {
  try {
    const { email, password } = await req.json();

    const user = await dbGetUserByEmail(email);

    if (!user) {
      return NextResponse.json({ error: "No account found with this email." }, { status: 404 });
    }

    const isValid = await comparePassword(password, user.passwordHash);

    if (!isValid) {
      return NextResponse.json({ error: "Incorrect password." }, { status: 401 });
    }

    const token = signToken(user.email);
    await crmUpdateActivity(user.email, "signin");

    return NextResponse.json({ token }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: "Internal server error." }, { status: 500 });
  }
}
