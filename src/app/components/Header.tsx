'use client';

import React from 'react';

export default function Header({ title }: { title: string }) {
	return (
		<div className='p-2 w-full flex justify-center items-center'>
			<div className='p-2 bg-shadow w-full items-center justify-center flex rounded-lg max-w-[1100px]'>
				<div className='bg-navBackground w-full flex justify-center items-center h-[75px] rounded-lg p-2'>
					<div className='bg-white w-full h-full rounded-lg flex items-center justify-center'>
						<div className='text-black items-center flex justify-center text-center font-bold text-2xl font-quiz w-full h-full'>
							{title}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
