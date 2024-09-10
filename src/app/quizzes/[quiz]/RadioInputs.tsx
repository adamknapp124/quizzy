'use client';

import React, { useState, useEffect } from 'react';

interface RadioInputsProps {
	question: string;
	correctAnswer: string;
	setSelectedAnswer: React.Dispatch<React.SetStateAction<string>>;
	generatedAnswers: string[];
}

export default function RadioInputs({
	question,
	correctAnswer,
	generatedAnswers,
}: RadioInputsProps) {
	const [selectedAnswer, setSelectedAnswer] = useState('');
	// const [score, setScore] = useState(0);
	// const [answers, setAnswers] = useState<string[]>([]);

	const handleSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
		setSelectedAnswer(e.target.value);
		if (e.target.value === correctAnswer) {
			console.log('correct');
		} else {
			console.log('incorrect');
		}
	};

	return (
		<div className='flex bg-sky-950 rounded-lg p-5 gap-3'>
			<div className='font-header text-3xl border-r border-white p-5 my-2'>
				{question}
			</div>
			<div className='flex gap-3 flex-col'>
				<div className='flex gap-3'>
					<input
						type='radio'
						id={`${correctAnswer}`}
						name='answer'
						value={correctAnswer}
						onChange={handleSelect}
					/>
					<label
						htmlFor={`${correctAnswer}`}
						className='text-xl'>
						{correctAnswer}
					</label>
				</div>
				{generatedAnswers.map((answer, index) => (
					<div
						key={index}
						className='flex gap-3'>
						<input
							type='radio'
							id={`answer-${index}`}
							name='answer'
							value={answer}
							onChange={handleSelect}
						/>
						<label
							htmlFor={`answer-${index}`}
							className='text-xl'>
							{answer}
						</label>
					</div>
				))}
			</div>
		</div>
	);
}
