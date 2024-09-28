'use client';

import React, { useEffect, useState } from 'react';

import clsx from 'clsx';

interface QuizLinkProps {
	name: string;
	link: string;
	selectedQuiz: string;
}

export default function QuizLink({ name, link, selectedQuiz }: QuizLinkProps) {
	useEffect(() => {}, [selectedQuiz]);
	return (
		<div
			className={clsx(
				`bg-[#C4C0B5] hover:bg-border p-1 rounded-lg`,
				selectedQuiz === link ? 'bg-border text-white' : null
			)}>
			<div
				className={clsx(
					`h-[100px] bg-border rounded-lg text-white font-quiz w-full flex 
                    justify-center items-center col-span-1 tracking-widest transition 
                    duration-500 border-2 border-transparent hover:border-border 
                    hover:border p-5 cursor-pointer text-center`,
					selectedQuiz === link ? 'bg-navBackground text-white' : null
				)}>
				{name}
			</div>
		</div>
	);
}
