/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			fontFamily: {
				body: ['Poppins', 'sans-serif'],
				header: ['"Nerko One"', 'sans-serif']
			}
		}
	},
	plugins: []
};
