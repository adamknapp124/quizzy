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
		</>
	);
}
