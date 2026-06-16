import { NextRequest, NextResponse } from "next/server";
import { comparePassword, signToken } from "@/lib/auth";
import { dbGetUserByEmail } from "@/lib/db";
import { crmUpdateActivity } from "@/lib/crm";

export async function POST(req: NextRequest) {
  try {
    const { email, password } = await req.json();
    if (!email || !password)
      return NextResponse.json({ error: "Email and password are required." }, { status: 400 });
    const user = dbGetUserByEmail(email);
    if (!user)
      return NextResponse.json({ error: "No account found with this email." }, { status: 404 });
    const valid = await comparePassword(password, user.passwordHash);
    if (!valid)
      return NextResponse.json({ error: "Incorrect password." }, { status: 401 });
    const token = signToken({ userId: user.userId, email: user.email, name: user.name, plan: user.plan });
    crmUpdateActivity(user.email);
    const res = NextResponse.json({ user: { userId: user.userId, name: user.name, email: user.email, plan: user.plan } });
    res.cookies.set("shankh_token", token, { httpOnly: true, secure: true, sameSite: "lax", maxAge: 60 * 60 * 24 * 30, path: "/" });
    return res;
  } catch (err) {
    console.error("[signin]", err);
    return NextResponse.json({ error: "Sign in failed. Please try again." }, { status: 500 });
  }
}
