'use client';

import React from 'react';

import { usePathname } from 'next/navigation';

import navlinks from '../../libs/navlinks';
import userlinks from '../../libs/userlinks';
import Navlink from './Navlink';

export default function Sidebar() {
	const pathname = usePathname();

	return (
		<div className='bg-navBackground lg:min-w-[300px] min-w-[150px] flex-col justify-between py-2 hidden md:flex h-screen'>
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
			<div className='flex flex-col items-center'>
				{userlinks.map((link, index) => (
					<Navlink
						key={index}
						name={link.name}
						href={link.href}
						icon={link.icon}
					/>
				))}
			</div>
		</div>
	);
}
