import React from 'react';

import QuizLinks from './QuizLinks';
import CustomButton from '@/app/components/CustomButton';

interface Quiz {
	question: string;
	id: number;
	answer: string;
	title: string;
	generated_answers: string;
}

export default function QuizSelector({ quizzes }: { quizzes: Quiz[] }) {
	return (
		<>
			<div
				className='font-bold md:p-2 md:rounded-lg flex flex-col gap-2 max-w-[1100px]
            w-full md:max-h-[500px] h-screen overflow-y-scroll no-scrollbar p-2'>
				<div className='p-2'>
					<QuizLinks quizzes={quizzes} />
				</div>
			</div>
			<div className='gap-2 hidden md:flex w-4/5 m-auto py-2 max-w-[900px]'>
				<CustomButton
					name='+ Create Quiz'
					classes='bg-white border-2 border-border text-black font-bold hover:bg-border hover:text-white'
				/>
				<CustomButton
					name='Begin Quiz'
					classes='bg-white border-2 border-border text-black font-bold hover:bg-border hover:text-white'
				/>
			</div>
		</>
	);
}
