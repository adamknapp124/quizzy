'use client';

import React, { useState } from 'react';

import QuizLink from '@/app/components/QuizLink';

interface Quiz {
	question: string;
	id: number;
	answer: string;
	title: string;
	generated_answers: string;
}

interface QuizLinksProps {
	quizzes: Quiz[];
	onQuizSelect: (quiz: string) => void;
	selectedQuiz: string;
}

export default function QuizLinks({
	quizzes,
	onQuizSelect,
	selectedQuiz,
}: QuizLinksProps) {
	const uniqueQuizzes = getUniqueQuizTitles(quizzes);

	const handleClick = (quiz: string) => {
		console.log(quiz);
		onQuizSelect(quiz);
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
		</div>
	);
}
