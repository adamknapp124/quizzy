'use client';

import React, { useState, useEffect } from 'react';
import RadioInputs from './RadioInputs';

interface QuestionFormProps {
	questions: {
		question: string;
		answer: string;
		generatedAnswers: [];
	}[];
}

export default function QuestionForm({ questions }: QuestionFormProps) {
	const [score, setScore] = useState(0);
	const [index, setIndex] = useState(0);
	const [selectedAnswer, setSelectedAnswer] = useState('');

	const question = questions[index]?.question || '';
	const correctAnswer = questions[index]?.answer || '';
	const generatedAnswers = questions[index]?.generatedAnswers || [];

	const handleSubmit = () => {
		if (selectedAnswer === correctAnswer) {
			setScore((prev) => prev + 1);
		}
		if (index < questions.length - 1) {
			setIndex(index + 1);
		}
	};

	return (
		<div className='flex bg-sky-950 rounded-lg'>
			<div className='flex bg-sky-950 rounded-lg'>
				{questions.length > 0 && (
					<RadioInputs
						question={question}
						correctAnswer={correctAnswer}
						setSelectedAnswer={setSelectedAnswer}
						generatedAnswers={generatedAnswers}
					/>
				)}
			</div>
			<div
				className='w-[100px] h-[50px] border-white border flex items-center justify-center'
				onClick={handleSubmit}>
				Next
			</div>
			<div className='text-white'>{score}</div>
		</div>
	);
}
