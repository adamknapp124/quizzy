'use client';

import React, { useState, useEffect } from 'react';

interface RadioInputsProps {
	question: string;
	correctAnswer: string;
	setSelectedAnswer: React.Dispatch<React.SetStateAction<string>>;
	selectedAnswer: string;
	generatedAnswers: string[];
}

export default function RadioInputs({
	question,
	correctAnswer,
	generatedAnswers,
	selectedAnswer,
	setSelectedAnswer,
}: RadioInputsProps) {
	const [shuffledAnswers, setShuffledAnswers] = useState<string[]>([]);

	const handleSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
		setSelectedAnswer(e.target.value);
		if (e.target.value === correctAnswer) {
			console.log('correct');
		} else {
			console.log('incorrect');
		}
	};

	const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
		setSelectedAnswer(e.currentTarget.textContent || '');
		console.log(selectedAnswer);
	};

	// Fisher-Yates Shuffle algorithm to randomize array
	const shuffleArray = (array: string[]) => {
		for (let i = array.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			[array[i], array[j]] = [array[j], array[i]]; // Swap elements
		}
		return array;
	};

	useEffect(() => {
		if (generatedAnswers) {
			const combinedAnswers = [...generatedAnswers, correctAnswer];
			const randomizedAnswers = shuffleArray(combinedAnswers);
			setShuffledAnswers(randomizedAnswers);
		}
	}, [generatedAnswers, correctAnswer]);

	return (
		<div className='flex flex-col rounded-lg gap-3'>
			<div className='flex flex-col squared gap-3'>
				{shuffledAnswers.map((answer, index) => (
					<div
						key={index}
						className='flex gap-2 w-[200px] justify-center w-full border border-black py-2 rounded-lg 
                        hover:bg-navBackground hover:text-white cursor-pointer font-quiz font-bold tracking-wide'
						onClick={handleClick}>
						{answer}
					</div>
				))}
			</div>
		</div>
	);
}
