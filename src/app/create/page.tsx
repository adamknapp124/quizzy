import React from 'react';

import Header from '../components/Header';

import CreateForm from './CreateForm';
import MobileNav from '../components/MobileNav';

export default function page() {
	return (
		<div className='flex flex-col justify-between w-full h-screen'>
			<div className='md:p-2'>
				<Header title='Create' />
			</div>
			<div className='font-quiz text-black font-bold cursor-default text-xl md:text-3xl text-center my-2 hidden md:block'>
				Create A New Quiz
			</div>
			<div className='w-full h-screen m-auto items-center justify-between flex flex-col gap-2 max-w-[1100px]'>
				<CreateForm />
			</div>
			<div className='flex md:hidden w-full'>
				<MobileNav />
			</div>
		</div>
	);
}
