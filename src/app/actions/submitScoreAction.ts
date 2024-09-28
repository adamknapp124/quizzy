'use server';

import connection from '@/app/libs/db';

interface ScoreData {
	user: string;
	quiz: string;
	score: number;
}

export async function submitScoreAction(
	score: number,
	quiz: string,
	user: string
): Promise<void> {
	try {
		const query = new Promise<void>((resolve, reject) => {
			const scoreData: ScoreData = { user, quiz, score };
			connection.query('INSERT INTO scores SET ?', scoreData, (err, result) => {
				if (err) {
					reject(err);
				} else {
					resolve();
				}
			});
		});

		await query;
	} catch (error) {
		console.error('Error submitting score: ', error);
	}
}
