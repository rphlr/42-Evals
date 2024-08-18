import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/app/libs/prismadb';

export async function POST(req: NextRequest) {
  const userId = req.cookies.get('user_id')?.value;

  if (!userId) {
    return new NextResponse(JSON.stringify({ message: 'User not logged in' }), {
      status: 401,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  try {
    const user = await prisma.user.findUnique({ 
      where: { id: userId },
      include: { cursus_users: true }
    });

    if (!user) {
      return new NextResponse(JSON.stringify({ message: 'User not found' }), {
        status: 404,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const clientId = process.env.NEXT_PUBLIC_42_CLIENT_ID;
    const clientSecret = process.env.NEXT_PUBLIC_42_CLIENT_SECRET;

    // Get a new access token
    const tokenResponse = await fetch('https://api.intra.42.fr/oauth/token', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        grant_type: 'client_credentials',
        client_id: clientId,
        client_secret: clientSecret,
      }),
    });

    if (!tokenResponse.ok) {
      throw new Error('Failed to obtain access token');
    }

    const tokenData = await tokenResponse.json();

    // Fetch updated user data from 42 API
    const userResponse = await fetch(`https://api.intra.42.fr/v2/users/${user.intraId}`, {
      headers: { Authorization: `Bearer ${tokenData.access_token}` },
    });

    if (!userResponse.ok) {
      throw new Error('Failed to fetch user data from 42 API');
    }

    const userData = await userResponse.json();

    // Fetch cursus data separately
    const cursusResponse = await fetch(`https://api.intra.42.fr/v2/users/${user.intraId}/cursus_users`, {
      headers: { Authorization: `Bearer ${tokenData.access_token}` },
    });

    if (!cursusResponse.ok) {
      throw new Error('Failed to fetch cursus data from 42 API');
    }

    const cursusData = await cursusResponse.json();

    // Prepare cursus data
    const cursusDataToUpdate = cursusData.map((cu: any) => ({
      cursus_id: cu.cursus.id,
      cursus_name: cu.cursus.name,
      grade: cu.grade ?? null,
      level: cu.level ?? 0,
      blackholed_at: cu.blackholed_at ? new Date(cu.blackholed_at) : null,
      begin_at: cu.begin_at ? new Date(cu.begin_at) : null,
      end_at: cu.end_at ? new Date(cu.end_at) : null,
      has_coalition: cu.has_coalition ?? false,
    }));

    // Update user in database
    const updatedUser = await prisma.user.update({
      where: { id: userId },
      data: {
        wallet: userData.wallet ?? 0,
        correction_point: userData.correction_point ?? 0,
        image_url: userData.image?.link ?? null,
      },
      include: { cursus_users: true },
    });

    // Update cursus data separately
    await Promise.all(cursusDataToUpdate.map(async (cu: any) => {
      await prisma.cursus.upsert({
        where: {
          userId_cursus_id: {
            userId: updatedUser.id,
            cursus_id: cu.cursus_id,
          },
        },
        update: {
          cursus_name: cu.cursus_name,
          grade: cu.grade,
          level: cu.level,
          blackholed_at: cu.blackholed_at,
          begin_at: cu.begin_at,
          end_at: cu.end_at,
          has_coalition: cu.has_coalition,
        },
        create: {
          userId: updatedUser.id,
          ...cu,
        },
      });
    }));

    // Fetch the updated user with cursus data
    const finalUpdatedUser = await prisma.user.findUnique({
      where: { id: userId },
      include: { cursus_users: true },
    });

    return new NextResponse(JSON.stringify(finalUpdatedUser), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error updating user stats:', error);
    return new NextResponse(JSON.stringify({ message: 'Internal server error' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}