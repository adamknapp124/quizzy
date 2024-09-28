import React from 'react';

import navlinks from '@/app/libs/navlinks';
import Navlink from '@/app/components/sidebar/Navlink';

export default function MobileNav() {
	return (
		<div className='flex w-full bg-navBackground justify-between'>
			{navlinks.map((link, index) => (
				<Navlink
					key={index}
					name={link.name}
					href={link.href}
					icon={link.icon}
				/>
			))}
		</div>
	);
}
