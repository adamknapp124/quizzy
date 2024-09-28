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
			<div className='flex flex-col h-full'>
				{grades.map((grade, index) => (
					<div key={index}>
						<h2>{grade.quiz}</h2>
						<p>Score: {grade.score}</p>
					</div>
				))}
			</div>
			<div className='flex md:hidden w-full'>
				<MobileNav />
			</div>
		</div>
	);
}
