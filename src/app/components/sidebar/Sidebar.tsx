import React from 'react';

import navlinks from '../../libs/navlinks';
import Navlink from './Navlink';

export default function Sidebar() {
	return (
		<div className='lg:w-[300px] border-r border-white h-screen bg-green-600 flex flex-col'>
			{navlinks.map((link, index) => (
				<Navlink
					key={index}
					name={link.name}
					href={link.href}
				/>
			))}
		</div>
	);
}
