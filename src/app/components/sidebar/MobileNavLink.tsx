import React from 'react';
import Image from 'next/image';

import Link from 'next/link';

interface NavlinkProps {
	name: string;
	href: string;
	icon: string;
}

export default function MobileNavlink({ name, href, icon }: NavlinkProps) {
	return (
		<Link
			href={href}
			className='w-full flex justify-center items-center tracking-widest flex-grow 
            hover:bg-hover transition duration-200 font-quiz flex gap-5 justify-between px-8 rounded-xl'>
			<div className='flex w-full items-center justify-center gap-5 px-3 justify-between'>
				<Image
					src={icon}
					alt='icon'
					width={50}
					height={50}
				/>
			</div>
		</Link>
	);
}
