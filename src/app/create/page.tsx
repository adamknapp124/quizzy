import React from 'react';

import CreateForm from './CreateForm';

export default function page() {
	return (
		<div className='w-full m-auto items-center justify-between flex flex-col'>
			<div className='m-auto font-bold text-5xl font-header my-4'>
				Create your quiz
			</div>
			<CreateForm />
		</div>
	);
}
