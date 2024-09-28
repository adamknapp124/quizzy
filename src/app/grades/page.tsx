import React from 'react';

import { getGradesByUser } from '@/app/actions/getGradesByUser';

export default async function page() {
	const grades = await getGradesByUser('username');
	console.log(grades);
	return (
		<div>
			{grades.map((grade, index) => (
				<div key={index}>
					<h2>{grade.quiz}</h2>
					<p>Score: {grade.score}</p>
				</div>
			))}
		</div>
	);
}
