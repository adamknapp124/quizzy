'use server';

import connection from '@/app/libs/db';

interface Quiz {
	title: string;
	question: string;
	id: number;
	answer: string;
}

export async function getQuizByTitle(title: string): Promise<Quiz[]> {
	const formattedTitle = title.replace(/-/g, ' ');
	const query = new Promise<Quiz[]>((resolve, reject) => {
		connection.query(
			'SELECT * FROM quizzes WHERE title = ?',
			[formattedTitle],
			(err, results) => {
				if (err) {
					console.error('Database query error:', err);
					reject(new Error('Failed to retrieve quizzes'));
				} else {
					resolve(results as Quiz[]);
				}
			}
		);
	});

	return await query;
}
