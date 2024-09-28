'use server';

import pool from '@/app/libs/dbPool';

interface Grades {
	quiz: string;
	score: number;
	user: string;
	id: number;
}

export async function getGradesByUser(user: string): Promise<Grades[]> {
	const query = new Promise<Grades[]>((resolve, reject) => {
		pool.query('SELECT * FROM scores WHERE user = ?', [user], (err, results) => {
			if (err) {
				console.error('Database query error:', err);
				reject(new Error('Failed to retrieve grades'));
			} else {
				resolve(results as Grades[]);
			}
		});
	});

	return await query;
}
