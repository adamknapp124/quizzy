import type { Metadata } from 'next';
import './globals.css';

import Sidebar from '@/app/components/sidebar/Sidebar';

export const metadata: Metadata = {
	title: 'Quizzy',
	description: 'An app for students to create and take quizzes',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body className='flex'>
				<Sidebar />
				{children}
			</body>
		</html>
	);
}
