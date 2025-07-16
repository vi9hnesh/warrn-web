"use server";
import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";
const BACKEND_AUTH_URL = "http://localhost:8000/api/token/pair";

export async function POST(request: NextRequest) {
  const { username, password } = await request.json();
  //  get the cookie store
  const cookieStore = await cookies();
  const res = await fetch(BACKEND_AUTH_URL, {
    method: "POST",
    body: JSON.stringify({ username, password }),
  });
  const data = await res.json();
  console.log(data);
  cookieStore.set("access_token", data.access_token);
  cookieStore.set("refresh_token", data.refresh_token);
  return NextResponse.json({ message: "Login successful" });
}