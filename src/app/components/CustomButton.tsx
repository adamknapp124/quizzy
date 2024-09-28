'use client';

import React from 'react';

import clsx from 'clsx';

interface CustomButtonProps {
	name: string;
	classes: string;
	type?: 'submit' | 'reset' | 'button';
	onClick?: () => void;
}

export default function CustomButton({
	name,
	classes,
	type,
	onClick,
}: CustomButtonProps) {
	return (
		<button
			type={type}
			className={clsx(
				`h-[100px] w-full rounded-xl text-black font-quiz text-lg 
        tracking-widest`,
				classes
			)}
			onClick={onClick}>
			{name}
		</button>
	);
}
