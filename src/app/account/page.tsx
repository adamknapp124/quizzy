import React from 'react';

import { getGradesByUser } from '@/app/actions/getGradesByUser';

import Header from '@/app/components/Header';
import MobileNav from '@/app/components/MobileNav';

export default async function page() {
	const grades = await getGradesByUser('username');
	console.log(grades);
	return (
		<div className='text-black w-full h-screen flex flex-col justify-between items-center'>
			<Header title='Account' />
			<div className='flex flex-col h-full max-w-[1100px] w-full items-center'>
				<div className='font-quiz text-4xl'>Top Scores</div>
				<table className='w-full table-auto border-collapse font-quiz font-bold'>
					<thead>
						<tr className='border-b-2'>
							<th className='p-2 text-left'>Quiz ID</th>
							<th className='p-2 text-left'>Created by</th>
							<th className='p-2 text-left'>Quiz Name</th>
							<th className='p-2 text-left'>Best Score</th>
						</tr>
					</thead>
					<tbody>
						{grades.map((grade, index) => (
							<tr
								key={index}
								className='border-b'>
								<td className='p-2'>{grade.id}</td>
								<td className='p-2'>{grade.user}</td>
								<td className='p-2'>{grade.quiz}</td>
								<td className='p-2'>{grade.score}</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
			<div className='flex md:hidden w-full'>
				<MobileNav />
			</div>
		</div>
	);
}
