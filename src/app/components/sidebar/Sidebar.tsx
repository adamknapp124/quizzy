'use client';

import React from 'react';
import Image from 'next/image';

import guestIcon from '@/public/icons/profile-icon.svg';

import { useAuth } from '@/app/AuthContext';
import { usePathname } from 'next/navigation';

import navlinks from '../../libs/navlinks';
import Navlink from './Navlink';

import logout from '@/public/icons/logout-icon.svg';

export default function Sidebar() {
	const { user, logOut } = useAuth();
	const pathname = usePathname();

	if (!user) {
		return null;
	}

	return user?.displayName ? (
		<div className='bg-sky-300 lg:min-w-[300px] min-w-[150px] flex-col justify-between py-2 hidden md:flex h-screen'>
			<div className='text-5xl font-header text-center hidden lg:block'>Quizzy</div>
			<div className='text-5xl font-header text-center block lg:hidden'>Q</div>
			<div className='flex flex-col items-center gap-5'>
				{navlinks.map((link, index) => (
					<Navlink
						key={index}
						name={link.name}
						href={link.href}
						icon={link.icon}
					/>
				))}
			</div>
			<div className='flex flex-col items-center justify-center w-full px-2 font-bold'>
				<button
					className='w-full font-quiz flex'
					onClick={logOut}>
					<div className='flex w-full items-center justify-center m-auto h-[75px] lg:px-8 gap-3 rounded-xl hover:bg-sky-600 transition duration-300 ease-in-out'>
						<Image
							src={logout}
							alt='icon'
							width={40}
							height={40}
						/>
						<div className='w-full hidden lg:block text-xl tracking-wide'>
							Sign out
						</div>
					</div>
				</button>
				<button className='w-full font-quiz flex items-center justify-center'>
					<div className='flex w-full items-center justify-center m-auto h-[75px] lg:px-8 gap-3 rounded-xl hover:bg-sky-600 transition duration-300 ease-in-out'>
						<Image
							src={user.photoURL}
							alt='icon'
							width={40}
							height={40}
							className='rounded-full'
						/>
						<div className='w-full hidden lg:block text-xl tracking-wide'>
							{user.displayName}
						</div>
					</div>
				</button>
			</div>
		</div>
	) : (
		<div className='bg-sky-300 lg:min-w-[300px] min-w-[150px] flex-col justify-between py-2 hidden md:flex h-screen'>
			<div className='text-5xl font-header text-center hidden lg:block'>Quizzy</div>
			<div className='text-5xl font-header text-center block lg:hidden'>Q</div>
			<div className='flex flex-col items-center gap-5'>
				{navlinks.map((link, index) => (
					<Navlink
						key={index}
						name={link.name}
						href={link.href}
						icon={link.icon}
					/>
				))}
			</div>
			<div className='flex flex-col items-center justify-center w-full px-2 font-bold'>
				<button
					className='w-full font-quiz flex'
					onClick={logOut}>
					<div className='flex w-full items-center justify-center m-auto h-[75px] lg:px-8 gap-3 rounded-xl hover:bg-sky-600 transition duration-300 ease-in-out'>
						<Image
							src={logout}
							alt='icon'
							width={40}
							height={40}
						/>
						<div className='w-full hidden lg:block text-xl tracking-wide'>
							Sign out
						</div>
					</div>
				</button>
				<button className='w-full font-quiz flex items-center justify-center'>
					<div className='flex w-full items-center justify-center m-auto h-[75px] lg:px-8 gap-3 rounded-xl hover:bg-sky-600 transition duration-300 ease-in-out'>
						<Image
							src={guestIcon}
							alt='icon'
							width={40}
							height={40}
							className='rounded-full'
						/>
						<div className='w-full hidden lg:block text-xl tracking-wide'>
							Guest
						</div>
					</div>
				</button>
			</div>
		</div>
	);
}
