import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/app/libs/prismadb';

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
		const cursusResponse = await fetch(`https://api.intra.42.fr/v2/users/${userData.id}/cursus_users`, {
			headers: { Authorization: `Bearer ${tokenData.access_token}` },
		});

		if (!cursusResponse.ok) {
			throw new Error('Failed to fetch cursus data');
		}

		const cursusData = await cursusResponse.json();


		const cursus_users = userData.cursus_users?.map(cu => ({
			cursus_id: cu.cursus.id,
			cursus_name: cu.cursus.name,
			grade: cu.grade ?? null,
			level: cu.level ?? 0,
			blackholed_at: cu.blackholed_at ? new Date(cu.blackholed_at) : null,
			begin_at: cu.begin_at ? new Date(cu.begin_at) : null,
			end_at: cu.end_at ? new Date(cu.end_at) : null,
			has_coalition: cu.has_coalition ?? false,
		})) ?? [];

		const userUpdateData = {
			login: userData.login,
			email: userData.email,
			displayname: userData.displayname,
			campus: userData.campus?.[0]?.name ?? null,
			pool_year: userData.pool_year ? parseInt(userData.pool_year) : null,
			pool_month: userData.pool_month ?? null,
			image_url: userData.image?.link ?? null,
			wallet: userData.wallet ?? 0,
			correction_point: userData.correction_point ?? 0,
		};

		if (!prisma || typeof prisma.user.upsert !== 'function') {
			throw new Error('Prisma client is not properly initialized');
		}

		const user = await prisma.user.upsert({
			where: { intraId: userData.id },
			update: userUpdateData,
			create: {
				intraId: userData.id,
				...userUpdateData,
			},
			include: { cursus_users: true },
		});

		// if (user) {
		// 	user = await prisma.user.update({
		// 		where: { intraId: userData.id },
		// 		data: userUpdateData,
		// 		include: { cursus_users: true },
		// 	});
		// } else {
		// 	user = await prisma.user.create({
		// 		data: {
		// 			intraId: userData.id,
		// 			...userUpdateData,
		// 			cursus_users: { create: cursus_users },
		// 		},
		// 		include: { cursus_users: true },
		// 	});
		// }

		await Promise.all(cursus_users.map(async (cu : any) => {
			if (!prisma || typeof prisma.cursus.upsert !== 'function') {
				throw new Error('Prisma client is not properly initialized');
			}
			await prisma.cursus.upsert({
				where: {
					userId_cursus_id: {
						userId: user.id,
						cursus_id: cu.cursus_id,
					},
				},
				update: cu,
				create: {
					...cu,
					userId: user.id,
				},
			});
		}));

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
		let errorMessage = 'An unknown error occurred';
		if (error instanceof Error) {
			errorMessage = error.message;
		} else if (typeof error === 'string') {
			errorMessage = error;
		} else if (error && typeof error === 'object' && 'message' in error) {
			errorMessage = String(error.message);
		}
		return NextResponse.redirect(`${req.nextUrl.origin}/login?error=${encodeURIComponent(errorMessage)}`);
	}
}