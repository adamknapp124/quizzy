import React from 'react';
import { getQuizByTitle } from '@/app/actions/getQuizByTitle';

import Header from '@/app/components/Header';
import QuestionForm from './components/QuestionForm';
import MobileNav from '@/app/components/MobileNav';

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
	const title = params.quiz.replace(/-/g, ' ');

	const questionArray = questions.map((question) => {
		return {
			question: question.question,
			answer: question.answer,
			generatedAnswers: JSON.parse(question.generated_answers),
		};
	});

	return (
		<div className='flex flex-col justify-between m-auto w-full max-w-[1100px] h-screen'>
			<Header title={title} />
			<div className='flex flex-col w-full items-center justify-between text-black h-screen px-2'>
				<QuestionForm
					questions={questionArray}
					title={title}
				/>
			</div>
			<MobileNav />
		</div>
	);
}
