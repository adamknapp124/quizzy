import React from 'react';

export default function Header({ title }: { title: string }) {
	return (
		<div className='py-2 bg-[#C4C0B5] w-full items-center justify-center flex md:py-10'>
			<div className='bg-navBackground w-2/3 flex justify-center items-center h-[75px] rounded-lg p-2'>
				<div className='bg-white w-full h-full rounded-lg flex items-center justify-center'>
					<div className='text-black text-4xl font-quiz'>{title}</div>
				</div>
			</div>
		</div>
	);
}
