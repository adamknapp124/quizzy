import type { Config } from 'tailwindcss';

const config: Config = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			colors: {
				foreground: 'var(--foreground)',
				navBackground: '#3C3838',
				background: '#F6EFE5',
				hover: '#271D20',
				border: '#774C3A',
				shadow: '#C4C0B5',
			},
			fontFamily: {
				header: ['Permanent Marker'],
				navbar: ['Rock Salt'],
				quiz: ['Julius Sans One'],
			},
		},
	},
	plugins: [],
};
export default config;
