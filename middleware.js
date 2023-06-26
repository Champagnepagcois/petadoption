import { NextResponse } from "next/server";
import { jwtVerify } from "jose";

export async function middleware(request) {
  const jwt = request.cookies.get("MyTokenName");
  if (request.nextUrl.pathname.includes("/User")) {
    if (jwt === undefined) {
      return NextResponse.redirect(new URL("/Auth", request.url));
    }
    try {
      /* const { payload } = await jwtVerify(
        jwt.value,
        new TextEncoder().encode("secret")
      );
      console.log(payload); */
      return NextResponse.next();
    } catch (error) {
      console.log(error);
      return NextResponse.redirect(new URL("/Auth", request.url));
    }
  }
  return NextResponse.next();
}
