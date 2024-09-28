import React from 'react';
import Image from 'next/image';

import Link from 'next/link';

interface NavlinkProps {
	name: string;
	href: string;
	icon: string;
}

export default function Navlink({ name, href, icon }: NavlinkProps) {
	return (
		<Link
			href={href}
			className='w-full font-quiz flex items-center justify-center'>
			<div className='flex w-2/3 items-center justify-center lg:justify-between m-auto h-[75px] lg:px-8 gap-3 rounded-xl hover:bg-border transition duration-300 ease-in-out'>
				<Image
					src={icon}
					alt='icon'
					width={40}
					height={40}
				/>
				<div className='w-full hidden lg:block text-xl tracking-wide'>{name}</div>
			</div>
		</Link>
	);
}
