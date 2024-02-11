import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request:NextRequest,response: NextResponse){
    //в url должно сохранятся информация с формы
    if(!request.nextUrl.searchParams.has('direction')
        || !request.nextUrl.searchParams.has('city-from')
        || !request.nextUrl.searchParams.has('city-to')
        || !request.nextUrl.searchParams.has('date-depart')
        || !request.nextUrl.searchParams.has('date-return')
        || !request.nextUrl.searchParams.has('passengers')
    ){
       return NextResponse.redirect(new URL('/',request.url));
    }


    return
}

export const config = {
    matcher: '/booking/:path*',
}