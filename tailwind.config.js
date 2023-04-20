/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx}',
		'./src/components/**/*.{js,ts,jsx,tsx}',
		'./src/app/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		extend: {
			colors: {
				'lab-blue': 'var(--lab-blue)',
				dark: 'var(--github-bg)',
				lighter: 'var(--github-bg-light)',
				'gh-border': 'var(--github-border)',
				link: 'var(--github-link-bg)',
				'link-hover': 'var(--github-link-bg-hover)',
			},
		},
	},
	plugins: [],
};
