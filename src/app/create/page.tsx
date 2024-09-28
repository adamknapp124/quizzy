import React from 'react';

import Header from '../components/Header';

import CreateForm from './CreateForm';
import MobileNav from '../components/MobileNav';

export default function page() {
	return (
		<div className='flex flex-col justify-between w-full h-screen'>
			<Header title='Create' />
			<div className='font-quiz text-black font-bold cursor-default text-xl md:text-3xl text-center my-2 hidden md:block'>
				Create A New Quiz
			</div>
			<CreateForm />
			<MobileNav />
		</div>
	);
}
