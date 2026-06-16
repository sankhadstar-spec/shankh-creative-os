import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const body = await request.json();
  // Here you will integrate your Supabase client
  return NextResponse.json({ status: 'User signup initiated', received: body });
}
