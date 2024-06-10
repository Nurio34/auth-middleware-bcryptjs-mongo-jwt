import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
    const path = request.nextUrl.pathname;
    const checkPublicPaths = path === "/signup" || path === "/login";

    const getCookies = cookies();
    const token = getCookies.get("token")?.value;

    if (checkPublicPaths && token) {
        console.log("token");

        return NextResponse.redirect(new URL("/", request.url));
    }

    if (checkPublicPaths && token === "undefined") {
        console.log("no token");

        return NextResponse.redirect(new URL("/signup", request.url));
    }
}

// See "Matching Paths" below to learn more
export const config = {
    matcher: ["/login", "/signup"],
};
