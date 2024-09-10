'use client';

import React, { useState } from 'react';

interface AddQuestionProps {
	initialQuestions: number;
}

export default function AddQuestion({ initialQuestions }: AddQuestionProps) {
	const [extraQuestions, setExtraQuestions] = useState(initialQuestions);

	const handleClick = () => {
		setExtraQuestions((prev) => prev + 1);
	};

	return (
		<div
			className='flex items-center justify-center border-2
			border-yellow-600 rounded-lg py-3 px-3 cursor-pointer
			hover:bg-yellow-600 hover:text-black duration-200 transition ease-in'
			onClick={handleClick}>
			Add Another Question ({extraQuestions})
		</div>
	);
}
