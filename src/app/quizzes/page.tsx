import React from 'react';
import getQuizzes from '@/app/actions/getQuizzes';

import Header from '@/app/components/Header';
import QuizSelector from '@/app/quizzes/components/QuizSelector';
import MobileNav from '../components/MobileNav';
import CustomButton from '../components/CustomButton';

interface Quiz {
	question: string;
	id: number;
	answer: string;
	title: string;
	generated_answers: string;
}

export default async function Page() {
	const quizzes = (await getQuizzes()) as Quiz[];

	return (
		<div className='flex flex-col w-full md:items-center h-screen md:max-h-[1024px] md:p-2'>
			<Header title='Quizzes' />
			<div className='font-quiz text-black font-bold cursor-default text-xl md:text-3xl text-center my-2 hidden md:block'>
				Choose a quiz or create a new one
			</div>
			<div className='font-quiz text-black font-bold cursor-default text-xl md:text-3xl text-center my-2 block md:hidden'>
				Select a quiz
			</div>
			<hr className='bg-black h-1 block md:hidden' />

			<QuizSelector quizzes={quizzes} />
			<hr className='bg-black h-1 block md:hidden' />
			<div className='flex md:hidden w-full'>
				<MobileNav />
			</div>
		</div>
	);
}
