import { NextRequest, NextResponse } from "next/server";

async function hasValidSession(request: NextRequest) {
    const cookieHeader = request.headers.get("cookie") ?? "";
    if (!cookieHeader) return false;

    try {
        const response = await fetch(new URL("/api/users/me", request.url), {
            method: "GET",
            headers: {
                cookie: cookieHeader,
            },
            cache: "no-store",
        });

        return response.ok;
    } catch {
        return false;
    }
}

export async function proxy(request: NextRequest) {
    const token = request.cookies.get("token")?.value;
    const { pathname } = request.nextUrl;

    const authRoutes = ["/login", "/signup"];
    const isAuthRoute = authRoutes.includes(pathname);

    if (!isAuthRoute && !token) {
        return NextResponse.redirect(new URL("/login", request.url));
    }

    if (token) {
        const isValid = await hasValidSession(request);

        if (!isValid && !isAuthRoute) {
            const response = NextResponse.redirect(new URL("/login", request.url));
            response.cookies.delete("token");
            return response;
        }

        if (isValid && isAuthRoute) {
            return NextResponse.redirect(new URL("/", request.url));
        }
    }

    return NextResponse.next();
}
export const config = {
    matcher: ["/", "/create", "/login", "/signup"],
};