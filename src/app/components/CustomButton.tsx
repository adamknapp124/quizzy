'use client';

import React from 'react';

import clsx from 'clsx';
import Link from 'next/link';

interface CustomButtonProps {
	name: string;
	classes: string;
	type?: 'submit' | 'reset' | 'button';
	onClick?: () => void;
	href?: string;
}

export default function CustomButton({
	name,
	href,
	classes,
	type,
	onClick,
}: CustomButtonProps) {
	return (
		<>
			{href ? (
				<Link
					href={`/quizzes/${href}`}
					className='w-full'>
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
				</Link>
			) : (
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
			)}
		</>
	);
}
