import { NextResponse } from "next/server";

export function middleware(req, res) {
  if (req.nextUrl.pathname.startsWith("/api/login")) {
    const reqHeaders = new Headers(req.headers);
    const token = reqHeaders.get("token");

    if (token === "123-abc-121-15") {
      reqHeaders.set("user_id", "001");
      reqHeaders.set("user_email", "omar@gmail.com");
      return NextResponse.next({
        request: { headers: reqHeaders },
      });
    } else {
      return NextResponse.json({ message: "error" }, { status: 401 });
    }
  }
}
