import React from 'react';

import { getGradesByUser } from '@/app/actions/getGradesByUser';

import SignOutButton from '@/app/components/buttons/SignOutButton';
import Header from '@/app/components/Header';
import MobileNav from '@/app/components/MobileNav';
import ScoreTable from './components/ScoreTable';

export default async function page() {
	const grades = await getGradesByUser('Adam Knapp');

	return (
		<div className='text-black w-full h-screen justify-between flex gap-5 text-sm flex-col items-center'>
			<Header title='Account' />
			<ScoreTable grades={grades} />
			<div className='flex flex-col md:hidden w-full'>
				<div className='w-full flex items-center font-quiz text-lg font-bold justify-end'>
					Logout
					<SignOutButton />
				</div>
				<MobileNav />
			</div>
		</div>
	);
}
