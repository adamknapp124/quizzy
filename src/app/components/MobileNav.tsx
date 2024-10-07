'use client';

import React from 'react';

import { usePathname } from 'next/navigation';

import navlinks from '@/app/libs/navlinks';
import Navlink from '@/app/components/sidebar/Navlink';

export default function MobileNav() {
	const pathname = usePathname();
	return (
		<div className='flex md:hidden w-full'>
			<div className='flex w-full bg-navBackground justify-between'>
				{navlinks.map((link, index) => (
					<Navlink
						key={index}
						name={link.name}
						href={link.href}
						icon={link.icon}
						pathname={pathname}
						classes=''
					/>
				))}
			</div>
		</div>
	);
}
