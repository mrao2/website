/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: 'class',
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				accent: {
					50: '#f0f9ff',
					100: '#e0f2fe',
					500: '#0ea5e9',
					600: '#0284c7',
					700: '#0369a1'
				}
			}
		}
	},
	plugins: []
};
