'use client';

import React, { useState, useEffect } from 'react';
import RadioInputs from './RadioInputs';
import SubmitButton from '@/app/components/SubmitButton';
import Scoreboard from './Scoreboard';
import Title from './Title';

interface QuestionFormProps {
	questions: {
		question: string;
		answer: string;
		generatedAnswers: [];
	}[];
	title: string;
}

export default function QuestionForm({ questions, title }: QuestionFormProps) {
	const [score, setScore] = useState(0);
	const [index, setIndex] = useState(0);
	const [selectedAnswer, setSelectedAnswer] = useState('');
	const user = 'username';
	const [quizLength, setQuizLength] = useState(questions.length);
	const question = questions[index]?.question || '';
	const correctAnswer = questions[index]?.answer || '';
	const generatedAnswers = questions[index]?.generatedAnswers || [];

	console.log('title: ', title);
	console.log('selectedAnswer', selectedAnswer);

	const handleSubmit = () => {
		if (selectedAnswer === correctAnswer) {
			setQuizLength((prev) => prev - 1);
			setScore((prev) => prev + 1);
			setSelectedAnswer('');
		}
		if (selectedAnswer !== correctAnswer) {
			setQuizLength((prev) => prev - 1);
			setSelectedAnswer('');
		}
		if (index < questions.length - 1) {
			setIndex(index + 1);
		}
	};

	return (
		<div className='bg-navBackground p-2 rounded-lg min-w-[700px]'>
			<div className='flex rounded-lg p-2 flex-col bg-white'>
				<div className='font-quiz text-5xl my-2 m-auto'>{question}</div>
				<div className='rounded-lg'>
					{quizLength > 0 ? (
						<div className='flex flex-col gap-2'>
							<RadioInputs
								question={question}
								correctAnswer={correctAnswer}
								setSelectedAnswer={setSelectedAnswer}
								selectedAnswer={selectedAnswer}
								generatedAnswers={generatedAnswers}
							/>
							<button
								className='w-full py-3 bg-yellow-600 text-white rounded-lg font-bold tracking-wide text-xl hover:bg-slate-900'
								type='button'
								onClick={handleSubmit}
								disabled={selectedAnswer === ''}>
								Submit
							</button>
						</div>
					) : (
						<Scoreboard
							score={score}
							quiz={title}
							user={user}
						/>
					)}
				</div>
			</div>
		</div>
	);
}
