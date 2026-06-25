import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const token =
    req.cookies.get("admin_token");

  const isLoginPage =
    req.nextUrl.pathname ===
    "/admin/login";

  const isAdminRoute =
    req.nextUrl.pathname.startsWith(
      "/admin"
    );

  if (
    isAdminRoute &&
    !isLoginPage &&
    !token
  ) {
    return NextResponse.redirect(
      new URL(
        "/admin/login",
        req.url
      )
    );
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*"],
};