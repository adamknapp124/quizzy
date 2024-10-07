'use client';

import React from 'react';

import clsx from 'clsx';

interface SubmitButtonProps {
	name: string;
	classes: string;
	type: 'submit' | 'button' | 'reset';
	onClick?: () => void;
	disabled?: boolean;
	selectedAnswer?: string;
}

export default function SubmitButton({
	name,
	classes,
	type,
	onClick,
	disabled,
	selectedAnswer,
}: SubmitButtonProps) {
	return (
		<button
			type={type}
			className={clsx(
				`h-[100px] w-full rounded-xl text-black font-quiz text-lg 
            tracking-widest`,
				{
					'border-sky-600': selectedAnswer !== '',
				},
				classes
			)}
			onClick={onClick}
			disabled={disabled}>
			{name}
		</button>
	);
}
