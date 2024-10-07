'use client';

import React, { useState } from 'react';

import { useAuth } from '@/app/AuthContext';
import clsx from 'clsx';

import SubmitButton from '@/app/components/buttons/SubmitButton';

import RadioInputs from './RadioInputs';
import Scoreboard from './Scoreboard';

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
	const { user } = useAuth();
	const [quizLength, setQuizLength] = useState(questions.length);
	const question = questions[index]?.question || '';
	const correctAnswer = questions[index]?.answer || '';
	const generatedAnswers = questions[index]?.generatedAnswers || [];

	console.log('titlesdfsdf: ', title);
	console.log('selectedAnswersdfsdf', selectedAnswer);
	console.log('questionsdfsdf', question);

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
		<div className='bg-shadow p-2 rounded-lg w-full max-w-[700px]'>
			<div className='bg-black p-2 rounded-lg'>
				<div className='flex rounded-lg p-2 flex-col bg-white gap-5'>
					<div className='font-quiz font-bold text-xl my-2 m-auto'>
						<div className='bg-white'>{question}</div>
					</div>
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
								<SubmitButton
									classes={clsx(`rounded-lg font-quiz text-xl font-bold w-full flex 
                    justify-center items-center col-span-1 tracking-widest transition 
                    duration-500 border-2 border-transparent-600 p-5 cursor-pointer 
                    text-center transition duration-200 hover:bg-sky-600 hover:text-white`)}
									type='button'
									onClick={handleSubmit}
									disabled={selectedAnswer === ''}
									name={'Submit'}
									selectedAnswer={selectedAnswer}
								/>
							</div>
						) : (
							<Scoreboard
								score={score}
								quiz={title}
								user={user.displayName}
							/>
						)}
					</div>
				</div>
			</div>
		</div>
	);
}
