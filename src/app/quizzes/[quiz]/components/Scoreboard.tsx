import React from 'react';

import { submitScoreAction } from '@/app/actions/submitScoreAction';

import SubmitButton from '@/app/components/buttons/SubmitButton';

interface scoredataProps {
	score: number;
	quiz: string;
	user: string;
}

export default function Scoreboard({ score, quiz, user }: scoredataProps) {
	const handleScoreSubmit = async () => {
		await submitScoreAction(score, quiz, user);
		window.alert('Score submitted!');
	};
	const handleBackToQuizzes = () => {
		window.history.back();
	};
	const handleTryAgain = () => {
		window.location.reload();
	};

	return (
		<div className='flex flex-col w-full'>
			<div className='font-quiz text-center text-lg font-bold w-full m-auto'>
				Thank you for playing
			</div>
			<div className='py-5 px-10 my-2 text-4xl font-quiz font-bold text-center'>
				{score} correct!
			</div>
			<div className='flex flex-col gap-2'>
				<SubmitButton
					classes='bg-white border-2 border-sky-300 text-black font-bold 
                    hover:bg-sky-600 hover:text-white transition duration-200 text-xl'
					onClick={handleScoreSubmit}
					type='button'
					name='Submit Score'
				/>
				<div className='flex gap-2'>
					<SubmitButton
						classes='bg-white border-2 border-sky-300 text-black font-bold 
                    hover:bg-sky-600 hover:text-white transition duration-200 text-xl'
						onClick={handleBackToQuizzes}
						name='To Quiz Selection'
						type='button'
					/>
					<SubmitButton
						classes='bg-white border-2 border-sky-300 text-black font-bold 
                    hover:bg-sky-600 hover:text-white transition duration-200 text-xl'
						onClick={handleTryAgain}
						name='Try Again'
						type='button'
					/>
				</div>
			</div>
		</div>
	);
}
