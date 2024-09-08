import { NextResponse } from "next/server";

export function middleware(request) {
    // console.log("match");
    // return NextResponse.next();

    const coi = 'next-superHero'
    const cookie = request.cookies.get("token")
    console.log(cookie,  coi);
    if(!cookie || cookie.value !== coi){
        return  NextResponse.redirect(new URL('/about', request.url));
    }
    return NextResponse.next()
}

export const config = {
    matcher: ['/dashboard']
}