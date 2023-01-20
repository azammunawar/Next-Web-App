import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// This function can be marked `async` if using `await` inside
export default function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  const publicRoutes = ["/login", "signup"];
  const user = 0;
  console.log("urllli", request.headers.get("accept-encoding"));
  if (pathname) {
    if (user) {
      if (publicRoutes.includes(pathname)) {
        return NextResponse.redirect("http://localhost:3000/");
      }
    } else {
      if (!publicRoutes.includes(pathname)) {
        console.log("test");
        return NextResponse.redirect("http://localhost:3000/login");
      }
    }
  }
}
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - favicon.ico (favicon file)
     */
    "/((?!api|_next/static|favicon.ico).*)",
  ],
};
