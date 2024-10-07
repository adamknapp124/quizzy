'use client';

import React from 'react';

import { useAuth } from '../AuthContext';
import { useRouter } from 'next/navigation';

import ActionButton from '../components/buttons/ActionButton';

export default function page() {
	const router = useRouter();
	const { user } = useAuth();
	const { signInWithGoogle, signInAsGuest } = useAuth();

	if (user?.accessToken) {
		router.push('/');
	}

	return (
		<div className='w-full h-screen relative'>
			<div className='relative z-20 flex justify-center items-center h-full bg-sky-600 p-2'>
				<div className='w-full max-w-[1100px] bg-white rounded-lg flex p-2 shadow-xl border border-black'>
					<div className='bg-white w-full rounded-lg shadow-2xl flex flex-col justify-between p-20 gap-5'>
						<h1 className='font-navbar text-black font-extrabold text-5xl flex items-center justify-center pt-5'>
							Quizzy
						</h1>
						<ActionButton
							onClick={signInWithGoogle}
							name='Sign in with Google'
							classes='bg-sky-600 text-white font-extrabold py-3 px-2 shadow-2xl hover:bg-sky-500 font-extrabold'
						/>
						<ActionButton
							onClick={signInAsGuest}
							name='Sign in as guest'
							classes='bg-sky-600 text-white font-extrabold py-3 px-2 shadow-2xl hover:bg-sky-500 font-extrabold'
						/>
					</div>
				</div>
			</div>
		</div>
	);
}
