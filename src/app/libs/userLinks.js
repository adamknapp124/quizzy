import logout from '@/public/icons/logout-icon.svg';
import profile from '@/public/icons/profile-icon.svg';

const userlinks = [
	{
		name: 'Logout',
		href: '/signout',
		icon: logout,
	},
	{
		name: 'User',
		href: '/user',
		icon: profile,
	},
];

export default userlinks;
