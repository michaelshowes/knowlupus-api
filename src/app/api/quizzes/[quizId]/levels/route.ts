import data from '@/data';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(
	req: NextRequest,
	{ params }: { params: Promise<{ quizId: string }> }
) {
	const { quizId } = await params;
	const levels = data.find((quiz) => quiz.id === quizId)?.levels;

	const res = NextResponse.json(levels);

	res?.headers.set('Access-Control-Allow-Origin', '*');
	res?.headers.set(
		'Access-Control-Allow-Methods',
		'GET, POST, PUT, DELETE, OPTIONS'
	);
	res?.headers.set(
		'Access-Control-Allow-Headers',
		'Content-Type, Authorization'
	);
	res?.headers.set('Access-Control-Allow-Credentials', 'true');
	res?.headers.set('Access-Control-Max-Age', '86400');

	return res;
}
