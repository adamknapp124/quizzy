'use client';

import React, { useState } from 'react';

interface ScoreTableProps {
	grades: {
		id: number;
		user: string;
		quiz: string;
		score: number;
	}[];
}

export default function ScoreTable({ grades }: ScoreTableProps) {
	const [gradesToSort, setGradesToSort] = useState(grades);
	const [sortConfig, setSortConfig] = useState<{
		key: keyof (typeof grades)[0];
		direction: 'asc' | 'desc';
	}>({
		key: 'id',
		direction: 'asc',
	});

	const handleSort = (key: keyof (typeof grades)[0]) => {
		const direction =
			sortConfig.key === key && sortConfig.direction === 'asc' ? 'desc' : 'asc';
		setSortConfig({ key, direction });

		const sortedGrades = [...gradesToSort].sort((a, b) => {
			if (a[key] < b[key]) return direction === 'asc' ? -1 : 1;
			if (a[key] > b[key]) return direction === 'asc' ? 1 : -1;
			return 0;
		});

		setGradesToSort(sortedGrades);
	};

	return (
		<div className='px-10 w-full h-full m-auto max-w-[1100px]'>
			<div className='flex flex-col h-full max-w-[1100px] w-full items-center'>
				<div className='font-quiz text-4xl'>Test Scores</div>
				<table className='w-full table-auto border-collapse font-quiz font-bold bg-white rounded-lg px-2'>
					<thead>
						<tr className='border-b-2 border-black'>
							<th className='p-2 text-left'>
								<button
									className='text-blue-700 hover:text-blue-500'
									onClick={() => handleSort('id')}>
									ID
								</button>
							</th>
							<th className='p-2 text-left whitespace-nowrap'>
								<button
									className='text-blue-700 hover:text-blue-500'
									onClick={() => handleSort('user')}>
									User
								</button>
							</th>
							<th className='p-2 text-left'>
								<button
									className='text-blue-700 hover:text-blue-500'
									onClick={() => handleSort('quiz')}>
									Quiz Name
								</button>
							</th>
							<th className='p-2 text-left'>
								<button
									className='text-blue-700 hover:text-blue-500'
									onClick={() => handleSort('score')}>
									Score
								</button>
							</th>
						</tr>
					</thead>
					<tbody>
						{gradesToSort.map((grade, index) => (
							<tr
								key={index}
								className='border-b border-black'>
								<td className='p-2'>{grade.id}</td>
								<td className='p-2'>{grade.user}</td>
								<td className='p-2'>{grade.quiz}</td>
								<td className='p-2'>{grade.score}</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
}
