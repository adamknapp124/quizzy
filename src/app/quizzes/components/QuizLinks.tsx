'use client';

import React, { useState } from 'react';

import QuizLink from '@/app/components/QuizLink';
import CustomButton from '@/app/components/CustomButton';

interface Quiz {
	question: string;
	id: number;
	answer: string;
	title: string;
	generated_answers: string;
}

export default function QuizLinks({ quizzes }: { quizzes: Quiz[] }) {
	const uniqueQuizzes = getUniqueQuizTitles(quizzes);
	const [selectedQuiz, setSelectedQuiz] = useState('');

	const handleClick = (quiz: string) => {
		console.log(quiz);
		setSelectedQuiz(quiz);
	};

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
	return (
		<div className='flex flex-col'>
			<div className='grid px-2 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-2'>
				{uniqueQuizzes.map((quiz: Quiz, index: number) => (
					<div
						key={index}
						onClick={() =>
							handleClick(quiz.title.replace(/\s+/g, '-').toLowerCase())
						}
						className=''>
						<QuizLink
							name={quiz.title}
							link={`${quiz.title.replace(/\s+/g, '-').toLowerCase()}`}
							selectedQuiz={selectedQuiz}
						/>
					</div>
				))}
			</div>
			<div className='gap-2 hidden md:flex w-4/5 m-auto py-2 max-w-[900px]'>
				<CustomButton
					name='+ Create Quiz'
					classes='bg-white border-2 border-border text-black font-bold 
                    hover:bg-border hover:text-white'
				/>
				<CustomButton
					name='Begin Quiz'
					classes='bg-white border-2 border-border text-black font-bold 
                    hover:bg-border hover:text-white'
					href={selectedQuiz}
				/>
			</div>
		</div>
	);
}
