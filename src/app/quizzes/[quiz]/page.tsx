import React from 'react';
import { getQuizByTitle } from '@/app/actions/getQuizByTitle';

import QuestionForm from './QuestionForm';

interface Questions {
	question: string;
	id: number;
	answer: string;
	title: string;
	generated_answers: string;
	quiz: string;
}

export default async function page({
	params,
}: {
	params: {
		quiz: string;
	};
}) {
	const questions = (await getQuizByTitle(params.quiz)) as Questions[];

	const questionArray = questions.map((question) => {
		return {
			question: question.question,
			answer: question.answer,
			generatedAnswers: JSON.parse(question.generated_answers),
		};
	});

	return (
		<div className='flex flex-col border border-white w-full items-center justify-center'>
			<div className='capitalize font-header text-3xl my-4'>
				{params.quiz.replace(/-/g, ' ')}
			</div>
			<div>
				<QuestionForm questions={questionArray} />
			</div>
		</div>
	);
}
