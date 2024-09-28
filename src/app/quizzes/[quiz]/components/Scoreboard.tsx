import React from 'react';

import { submitScoreAction } from '@/app/actions/submitScoreAction';

interface scoredataProps {
	score: number;
	quiz: string;
	user: string;
}

export default function Scoreboard({ score, quiz, user }: scoredataProps) {
	const handleScoreSubmit = async () => {
		await submitScoreAction(score, quiz, user);
	};
	const handleBackToQuizzes = () => {
		window.history.back();
	};
	const handleTryAgain = () => {
		window.location.reload();
	};

	return (
		<div>
			<div>Thank you for playing</div>
			<div className='py-5 px-10 my-2 text-8xl'>{score} correct!</div>
			<div className='flex flex-col gap-2'>
				<button
					className='w-full py-3 bg-yellow-600 text-white rounded-lg font-bold tracking-wide text-xl hover:bg-slate-900'
					onClick={handleScoreSubmit}>
					Submit Score
				</button>
				<div className='flex gap-2'>
					<button
						className='w-full py-3 bg-yellow-600 text-white rounded-lg font-bold tracking-wide text-xl hover:bg-slate-900'
						onClick={handleBackToQuizzes}>
						To Quiz Selection
					</button>
					<button
						className='w-full py-3 bg-yellow-600 text-white rounded-lg font-bold tracking-wide text-xl hover:bg-slate-900'
						onClick={handleTryAgain}>
						Try Again
					</button>
				</div>
			</div>
		</div>
	);
}
