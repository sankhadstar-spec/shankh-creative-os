import { NextRequest, NextResponse } from "next/server";
import { v4 as uuid } from "uuid";
import { hashPassword, signToken } from "@/lib/auth";
import { dbCreateUser, dbGetUserByEmail } from "@/lib/db";
import { crmAddUser } from "@/lib/crm";

export async function POST(req: NextRequest) {
  try {
    const { name, email, password } = await req.json();
    if (!name || !email || !password)
      return NextResponse.json({ error: "Name, email and password are required." }, { status: 400 });
    if (password.length < 6)
      return NextResponse.json({ error: "Password must be at least 6 characters." }, { status: 400 });
    const existing = dbGetUserByEmail(email);
    if (existing)
      return NextResponse.json({ error: "An account with this email already exists." }, { status: 409 });
    const userId = uuid();
    const passwordHash = await hashPassword(password);
    const now = new Date().toISOString();
    const ua = req.headers.get("user-agent") || "";
    const device = /mobile/i.test(ua) ? "Mobile" : "Desktop";
    const country = req.headers.get("x-vercel-ip-country") || "Unknown";
    const user = { userId, name, email: email.toLowerCase(), passwordHash, plan: "free" as const, createdAt: now, country, device };
    dbCreateUser(user);
    crmAddUser({ userId, name, email: email.toLowerCase(), plan: "free", signUpDate: now, country, device, notes: "" });
    const token = signToken({ userId, email: email.toLowerCase(), name, plan: "free" });
    const res = NextResponse.json({ user: { userId, name, email: email.toLowerCase(), plan: "free" } }, { status: 201 });
    res.cookies.set("shankh_token", token, { httpOnly: true, secure: true, sameSite: "lax", maxAge: 60 * 60 * 24 * 30, path: "/" });
    return res;
  } catch (err) {
    console.error("[signup]", err);
    return NextResponse.json({ error: "Signup failed. Please try again." }, { status: 500 });
  }
}
