import React from 'react';
import { getQuizByTitle } from '@/app/actions/getQuizByTitle';

// import QuestionForm from './QuestionForm';
import EditForm from './EditForm';

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
		<div className='flex flex-col w-full items-center justify-center bg-[#203050] text-black'>
			<div className='bg-white p-3 rounded-lg'>
				{questionArray.map((question, index) => (
					<div key={index}>
						<EditForm questionArray={questionArray} />
						<div>{question.question}</div>
						<div>{question.answer}</div>
						<div>{question.generatedAnswers}</div>
					</div>
				))}
			</div>
		</div>
	);
}
