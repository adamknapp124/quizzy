'use client';

import React from 'react';

interface SubmitButtonProps {
	type: 'submit' | 'reset' | 'button';
	label: string;
}

export default function SubmitButton({ type, label }: SubmitButtonProps) {
	return (
		<div className='p-1'>
			<button
				type={type}
				className='px-8 py-3 rounded-lg bg-yellow-600'>
				{label}
			</button>
		</div>
	);
}
