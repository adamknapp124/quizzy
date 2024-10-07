'use client';

import React from 'react';
import Image from 'next/image';

import { useAuth } from '@/app/AuthContext';

import logout from '@/public/icons/logout-icon.svg';

export default function SignOutButton() {
	const { logOut } = useAuth();
	return (
		<button
			className='font-quiz flex p-5'
			onClick={logOut}>
			<div
				className='flex items-center justify-end border border-white 
            justify-center m-auto h-[50px] w-[50px] lg:px-8 gap-3 rounded-xl 
            hover:bg-sky-600 transition duration-300 ease-in-out bg-sky-400'>
				<Image
					src={logout}
					alt='icon'
					width={40}
					height={40}
				/>
			</div>
		</button>
	);
}
