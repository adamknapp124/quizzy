import MobileNav from '@/app/components/MobileNav';

import Header from '@/app/components/Header';

export default function Home() {
	return (
		<div className='font-body text-3xl flex flex-col justify-between h-screen w-full'>
			<Header title='Dashboard' />
			<div>Home</div>
			<div className='flex md:hidden w-full'>
				<MobileNav />
			</div>
		</div>
	);
}
