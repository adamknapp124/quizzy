'use client';

import React from 'react';
import { useRouter } from 'next/navigation';

import clsx from 'clsx';

interface RouterButtonProps {
	name?: string;
	classes: string;
	type?: 'submit' | 'reset' | 'button';
	route: string;
	disabled?: boolean;
	children?: React.ReactNode;
}

export default function RouterButton({
	name,
	route,
	classes,
	type,
	disabled,
}: RouterButtonProps) {
	const router = useRouter();

	return (
		<button
			type={type}
			className={clsx(
				`w-full rounded-xl text-black font-quiz tracking-widest text-lg transition duration-300`,
				classes,
				{
					'bg-gray-300 text-white': disabled,
					'border-2 border-sky-600 text-black hover:text-white hover:border-sky-300 hover:bg-sky-600':
						!disabled,
				}
			)}
			onClick={() => router.push(route)}
			disabled={disabled}>
			{name}
		</button>
	);
}
