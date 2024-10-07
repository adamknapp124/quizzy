'use client';

import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';

import clsx from 'clsx';

interface QuizLinkProps {
	name: string;
	link: string;
	selectedQuiz: string;
}

export default function QuizLink({ name, link, selectedQuiz }: QuizLinkProps) {
	const router = useRouter();
	useEffect(() => {}, [selectedQuiz]);
	return (
		<>
			<div
				className={clsx(
					`bg-white hover:bg-sky-600 p-1 rounded-lg duration-200 transition-all hidden md:block`,
					selectedQuiz === link ? 'bg-sky-600' : null
				)}>
				<div
					className={clsx(
						`h-[100px] rounded-lg font-quiz text-lg font-bold w-full flex 
                    justify-center items-center col-span-1 tracking-widest transition 
                    duration-500 border-2 border-transparent p-5 cursor-pointer 
                    text-center transition duration-200 hover:bg-sky-600 hover:text-white`,
						selectedQuiz === link ? 'bg-sky-600' : null,
						selectedQuiz !== link ? 'bg-sky-300 text-black font-bold' : null
					)}>
					{name}
				</div>
			</div>
			<div
				className={clsx(
					`bg-white p-1 rounded-lg duration-200 transition-all block md:hidden`,
					selectedQuiz === link ? 'bg-sky-600 hover:bg-sky-500' : null
				)}>
				<button
					className={clsx(
						`h-[100px] bg-sky-300 rounded-lg text-white font-quiz w-full flex 
                    justify-center items-center col-span-1 tracking-widest transition 
                    duration-500 border-2 border-transparent hover:border-indigo-200
                    hover:border p-5 cursor-pointer text-center transition duration-200`
					)}
					onClick={() => router.push(`/quizzes/${link}`)}>
					{name}
				</button>
			</div>
		</>
	);
}
