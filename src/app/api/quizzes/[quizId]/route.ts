import data from '@/data';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(
	req: NextRequest,
	{ params }: { params: Promise<{ quizId: string }> }
) {
	const { quizId } = await params;
	const quiz = data.find((quiz) => quiz.id === quizId);

	const res = NextResponse.json(quiz);

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
