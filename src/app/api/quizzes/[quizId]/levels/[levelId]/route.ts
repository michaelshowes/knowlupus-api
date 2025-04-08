import data from '@/data';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(
	req: NextRequest,
	{ params }: { params: Promise<{ quizId: string; levelId: string }> }
) {
	const { quizId, levelId } = await params;

	const quiz = data.find((quiz) => quiz.id === quizId);
	const level = quiz?.levels.find((level) => level.id === levelId);

	const res = NextResponse.json(level);

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
