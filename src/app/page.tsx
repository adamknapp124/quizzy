'use client';

import MobileNav from '@/app/components/MobileNav';
import { useRouter } from 'next/navigation';

import { useAuth } from '@/app/AuthContext';

import Header from '@/app/components/Header';

export default function Home() {
	const router = useRouter();
	const { user } = useAuth();

	const handleClick = () => {
		router.push('/dashboard');
	};

	if (!user) {
		router.push('/login');
	}

	return (
		<div className='flex flex-col justify-between items-center h-screen w-full'>
			<div className=''>
				<Header title='Home' />
				<div className='flex flex-col w-full p-2 gap-5'>
					<h1 className='text-black max-w-[1100px] w-full flex items-center justify-center m-auto font-quiz text-2xl font-bold text-center'>
						Welcome to Quizzy,{' '}
						{user?.displayName ? user?.displayName : 'Guest'}
					</h1>
					<div className='p-2 bg-shadow rounded-lg'>
						<div className='bg-sky-600 rounded-lg p-2'>
							<div className='bg-white rounded-lg flex flex-col gap-2 p-2'>
								<h2 className='text-xl text-black font-quiz font-bold text-center'>
									To use:
								</h2>
								<div className='flex flex-col gap-2 px-2'>
									<p className='text-black font-quiz font-bold text-center'>
										Click on the school icon to take a premade quiz.
									</p>
									<p className='text-black font-quiz font-bold text-center'>
										OR
									</p>
									<p className='text-black font-quiz font-bold text-center'>
										Click the plus icon to create a quiz of your own.
									</p>
									<hr className='bg-black h-[2px]' />
									<p className='text-black font-quiz font-bold text-center'>
										After you are finished, you can submit your final
										score and compare it with others.
									</p>
								</div>
							</div>
						</div>
					</div>
					<div className='p-2 bg-shadow rounded-lg'>
						<div className='bg-sky-600 rounded-lg p-2'>
							<div className='bg-white rounded-lg flex flex-col gap-2 p-2'>
								<h2 className='text-xl text-black font-quiz font-bold text-center'>
									How it works
								</h2>
								<div className='flex flex-col gap-4 px-2'>
									<p className='text-black font-quiz font-bold text-center'>
										This app uses AI to generate possible answers
										based on the question and answer you provide.
									</p>
									<p className='text-black font-quiz font-bold text-center'>
										In a future update, you will be able to create
										each quiz just by providing a subject and grade
										level. The AI will do the rest.
									</p>
									<hr className='bg-black h-[2px]' />
									<div className='text-black font-quiz font-bold text-center'>
										ready to continue? click one of the icons
										<p className='text-black font-quiz font-bold text-center'>
											or
										</p>
										<p
											onClick={handleClick}
											className='text-sky-600 font-bold font-quiz text-lg hover:text-sky-300 cursor-pointer'>
											continue to your dashboard.
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<MobileNav />
		</div>
	);
}
