'use client';

import React, { useState } from 'react';

import QuizLinks from './QuizLinks';
import LinkButton from '@/app/components/buttons/LinkButton';
import RouterButton from '@/app/components/buttons/RouterButton';

interface Quiz {
	question: string;
	id: number;
	answer: string;
	title: string;
	generated_answers: string;
}

export default function QuizSelector({ quizzes }: { quizzes: Quiz[] }) {
	const [selectedQuiz, setSelectedQuiz] = useState<string>('');

	const handleQuizSelection = (quiz: string) => {
		setSelectedQuiz(quiz);
	};
	return (
		<>
			<div
				className='font-bold md:p-2 md:rounded-lg flex flex-col gap-2 max-w-[1100px]
                        w-full md:max-h-[500px] h-screen overflow-y-scroll no-scrollbar p-2'>
				<div className='p-2'>
					<QuizLinks
						quizzes={quizzes}
						onQuizSelect={handleQuizSelection}
						selectedQuiz={selectedQuiz}
					/>
				</div>
			</div>
			<div className='gap-2 hidden md:flex w-4/5 m-auto py-2 max-w-[900px]'>
				<LinkButton
					name='+ Create Quiz'
					classes='border-2 border-indigo-200 text-black font-bold 
                    bg-sky-600 text-white transition duration-200'
					href='/create'
				/>
				<RouterButton
					name='Begin Quiz'
					classes=''
					route={`/quizzes/${selectedQuiz}`}
					disabled={selectedQuiz === ''}
				/>
			</div>
		</>
	);
}
