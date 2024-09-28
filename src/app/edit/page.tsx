import React from 'react';
import getQuizzes from '@/app/actions/getQuizzes';

import Navlink from '../components/sidebar/Navlink';

interface Quiz {
	question: string;
	id: number;
	answer: string;
	title: string;
	generated_answers: string;
}

export default async function Page() {
	const quizzes = (await getQuizzes()) as Quiz[];

	// Function to get unique quiz titles
	function getUniqueQuizTitles(quizList: Quiz[]) {
		const seen: { [key: string]: boolean } = {};
		return quizList.filter((quiz) => {
			if (seen[quiz.title]) {
				return false;
			} else {
				seen[quiz.title] = true;
				return true;
			}
		});
	}

	const uniqueQuizzes = getUniqueQuizTitles(quizzes);

	return (
		<div className='flex flex-col m-auto'>
			<div className='m-auto font-bold text-5xl font-header my-4'>
				Select Quiz to Edit
			</div>
			<div className=' font-body font-bold bg-sky-950 p-5 rounded-lg flex flex-col gap-4'>
				{uniqueQuizzes.map((quiz: Quiz, index: number) => (
					<div
						className='bg-yellow-600 flex flex-col text-black tracking-wide rounded-lg
                     hover:text-white hover:bg-black duration-200 transition ease-in overflow-hidden'>
						<Navlink
							key={index}
							name={quiz.title}
							href={`/edit/${quiz.title
								.replace(/\s+/g, '-')
								.toLowerCase()}`}
						/>
					</div>
				))}
			</div>
		</div>
	);
}
