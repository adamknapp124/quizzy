'use client';

import React from 'react';

import clsx from 'clsx';
import Link from 'next/link';

interface LinkButtonProps {
	name: string;
	classes: string;
	type?: 'submit' | 'reset' | 'button';
	onClick?: () => void;
	href?: string;
	route?: string;
}

export default function LinkButton({
	name,
	href,
	classes,
	type,
	onClick,
}: LinkButtonProps) {
	return (
		<Link
			href={`${href}`}
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
	);
}
