import React from 'react';
import Image from 'next/image';

import clsx from 'clsx';

import Link from 'next/link';

interface NavlinkProps {
	name: string;
	href: string;
	icon: string;
	pathname?: string | undefined;
	classes?: string;
}

export default function Navlink({ name, href, icon, pathname, classes }: NavlinkProps) {
	return (
		<Link
			href={href}
			className={clsx(`w-full font-quiz flex items-center justify-center px-2`, {
				'bg-sky-600': pathname === href,
			})}>
			<div className='flex w-full items-center md:hover:bg-sky-600 rounded-lg justify-center lg:justify-between m-auto h-[75px] lg:px-8 gap-3 transition duration-300 ease-in-out'>
				<Image
					src={icon}
					alt='icon'
					width={40}
					height={40}
				/>
				<div
					className={clsx(
						`w-full hidden lg:block text-xl tracking-wide text-white font-bold`,
						{
							'bg-sky-600': pathname === href,
						}
					)}>
					{name}
				</div>
			</div>
		</Link>
	);
}
