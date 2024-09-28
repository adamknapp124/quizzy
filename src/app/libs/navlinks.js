import home from '@/public/icons/home-icon.svg';
import quiz from '@/public/icons/quiz-icon.svg';
import create from '@/public/icons/create-icon.svg';
import account from '@/public/icons/account-icon.svg';

const navlinks = [
	{
		name: 'Home',
		href: '/',
		icon: home,
	},
	{
		name: 'Quizzes',
		href: '/quizzes',
		icon: quiz,
	},
	{
		name: 'Create',
		href: '/create',
		icon: create,
	},
	{
		name: 'Account',
		href: '/account',
		icon: account,
	},
];

const userLinks = [
	{
		name: 'Logout',
		href: '/signout',
	},
	{
		name: 'Account',
		href: '/account',
	},
];

export default navlinks;
