import React, { useEffect } from 'react';

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
				selectedQuiz === link ? 'bg-border text-white text-lg' : null
			)}>
			<div
				className={clsx(
					`h-[100px] bg-white rounded-lg text-black font-quiz w-full flex justify-center items-center col-span-1
                tracking-widest transition duration-500 border-2 border-transparent 
                hover:border-border hover:border p-5 cursor-pointer text-center`,
					selectedQuiz === link ? 'bg-hover text-white' : null
				)}>
				{name}
			</div>
		</div>
	);
}
