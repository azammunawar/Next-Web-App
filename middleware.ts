import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// This function can be marked `async` if using `await` inside
export default async function middleware(request: NextRequest) {
  try {
    const { pathname } = request.nextUrl;
    const publicRoutes = ["/login", "signup", "/login/contact"];
    const token = request.cookies.get("token");
    
    let isAuthenticated = false;
    if (token) {
      const res = await fetch("http://localhost:3000/api/authenticate");
      isAuthenticated = res.ok;
    }
    
    if (pathname) {
      const redirectTo = isAuthenticated
        ? (publicRoutes.includes(pathname) ? "http://localhost:3000/" : null)
        : (!publicRoutes.includes(pathname) ? "http://localhost:3000/login" : null);
    
      if (redirectTo) {
        return NextResponse.redirect(redirectTo);
      }
    }
    
    
  } catch (error) {
    console.error("Error during authentication check: ", error);
    // Handle the error appropriately according to your application's requirements
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
