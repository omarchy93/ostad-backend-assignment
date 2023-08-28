import { NextResponse } from "next/server";

export async function GET(req, res) {
  const cookiesApi = req.cookies.get("theme");
  return NextResponse.json({ msg: cookiesApi });
}
