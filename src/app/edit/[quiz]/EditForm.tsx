'use client';

import React from 'react';

import Input from '@/app/components/Input';

interface Question {
	question: string;
	answer: string;
	generatedAnswers: string;
}

interface QuestionArrayProps {
	questionArray: Question[];
}

export default function EditForm({ questionArray }: QuestionArrayProps) {
	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		console.log('value changed');
	};

	return (
		<div>
			{questionArray.map((question: Question, index: number) => (
				<div key={index}>
					<Input
						id={`question-${index}`}
						type='text'
						required={true}
						placeholder=''
						value={question.question}
						onChange={handleChange}
					/>
					<div>{question.question}</div>
					<div>{question.answer}</div>
					<div>{question.generatedAnswers}</div>
				</div>
			))}
		</div>
	);
}
