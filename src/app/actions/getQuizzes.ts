import pool from '@/app/libs/dbPool';

export default async function getQuizzes() {
	return new Promise((resolve, reject) => {
		pool.query('SELECT * FROM quizzes', (err, results) => {
			if (err) {
				console.error('Could not retrieve quizzes:', err);
				return reject(new Error('Failed to retrieve quizzes'));
			}
			resolve(results); // Resolve with results from the database
		});
	});
}
