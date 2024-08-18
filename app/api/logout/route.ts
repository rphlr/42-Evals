import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
    const response = NextResponse.redirect(`${req.nextUrl.origin}/`);
    // Expire the user_id cookie
    response.cookies.set('user_id', '', {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'lax',
        maxAge: 0,
    });
    return response;
}
