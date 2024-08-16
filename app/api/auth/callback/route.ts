import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/app/libs/prismadb';
import { Prisma } from '@prisma/client';

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const code = searchParams.get('code');
  const state = searchParams.get('state');
  const storedState = req.cookies.get('oauth_state')?.value;

  if (!state || state !== storedState) {
    return NextResponse.redirect(`${req.nextUrl.origin}/login?error=invalid_state`);
  }

  if (!code) {
    return NextResponse.redirect(`${req.nextUrl.origin}/login?error=missing_code`);
  }

  const clientId = process.env.NEXT_PUBLIC_42_CLIENT_ID;
  const clientSecret = process.env.NEXT_PUBLIC_42_CLIENT_SECRET;
  const redirectUri = process.env.NEXT_PUBLIC_42_REDIRECT_URI;

  try {
    const tokenResponse = await fetch('https://api.intra.42.fr/oauth/token', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        grant_type: 'authorization_code',
        client_id: clientId,
        client_secret: clientSecret,
        code: code,
        redirect_uri: redirectUri,
      }),
    });

    if (!tokenResponse.ok) {
      const errorText = await tokenResponse.text();
      throw new Error(`Failed to obtain access token: ${tokenResponse.status} ${errorText}`);
    }

    const tokenData = await tokenResponse.json();

    const userResponse = await fetch('https://api.intra.42.fr/v2/me', {
      headers: { Authorization: `Bearer ${tokenData.access_token}` },
    });

    if (!userResponse.ok) {
      throw new Error('Failed to fetch user data');
    }

    const userData = await userResponse.json();
    let user = await prisma.user.findUnique({
		where: { intraId: userData.id },
	  });
  
	  if (user) {
		user = await prisma.user.update({
		  where: { intraId: userData.id },
		  data: {
			login: userData.login,
			email: userData.email,
			displayname: userData.displayname,
			campus: userData.campus?.[0]?.name,
			pool_year: userData.pool_year ? parseInt(userData.pool_year) : null,
			pool_month: userData.pool_month,
		  },
		});
	  } else {
		try {
		  user = await prisma.user.create({
			data: {
			  intraId: userData.id,
			  login: userData.login,
			  email: userData.email,
			  displayname: userData.displayname,
			  campus: userData.campus?.[0]?.name,
			  pool_year: userData.pool_year ? parseInt(userData.pool_year) : null,
			  pool_month: userData.pool_month,
			},
		  });
		} catch (error) {
		  if (error instanceof Prisma.PrismaClientKnownRequestError && error.code === 'P2002') {
			user = await prisma.user.update({
			  where: { login: userData.login },
			  data: {
				intraId: userData.id,
				email: userData.email,
				displayname: userData.displayname,
				campus: userData.campus?.[0]?.name,
				pool_year: userData.pool_year ? parseInt(userData.pool_year) : null,
				pool_month: userData.pool_month,
			  },
			});
		  } else {
			throw error;
		  }
		}
	  }
  
	  const response = NextResponse.redirect(`${req.nextUrl.origin}/profile`);
  
	  response.cookies.set('user_id', user.id, {
		httpOnly: true,
		secure: process.env.NODE_ENV === 'production',
		sameSite: 'lax',
		maxAge: 3600,
		path: '/',
	  });
  
	  response.cookies.delete('oauth_state');
  
	  return response;
	} catch (error) {
	  return NextResponse.redirect(`${req.nextUrl.origin}/login?error=${encodeURIComponent(error.message)}`);
	}
  }