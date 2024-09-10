import React from 'react';
import Link from 'next/link';

interface NavlinkProps {
	name: string;
	href: string;
}

export default function Navlink({ name, href }: NavlinkProps) {
	return (
		<Link
			href={href}
			className='p-5 font-bold font-header text-2xl'>
			{name}
		</Link>
	);
}
