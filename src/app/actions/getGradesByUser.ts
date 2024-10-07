'use server';

import { revalidatePath } from 'next/cache';

import pool from '@/app/libs/dbPool';

interface Grades {
	quiz: string;
	score: number;
	user: string;
	id: number;
}

export async function getGradesByUser(
	user: string,
	sortBy: keyof Grades = 'id',
	order: 'asc' | 'desc' = 'asc'
): Promise<Grades[]> {
	const validSortColumns: Array<keyof Grades> = ['id', 'quiz', 'score', 'user'];
	const validOrder = ['asc', 'desc'];

	if (!validSortColumns.includes(sortBy)) {
		throw new Error('Invalid sorting parameter');
	}

	if (!validOrder.includes(order)) {
		throw new Error('Invalid order parameter');
	}

	const query = new Promise<Grades[]>((resolve, reject) => {
		pool.query(
			`SELECT * FROM scores WHERE user = ? ORDER BY ${sortBy} ${order.toUpperCase()}`,
			[user],
			(err, results) => {
				if (err) {
					console.error('Database query error:', err);
					reject(new Error('Failed to retrieve grades'));
				} else {
					resolve(results as Grades[]);
				}
			}
		);
	});

	revalidatePath('http://localhost:3000/account');

	return await query;
}
