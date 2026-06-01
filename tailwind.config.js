/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./index.html','./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			colors: {
				
				primary: '#0b1e3d', // navy
				accent: '#d4af37',  // gold
				neutralBg: '#f5f7fb',
				ink: '#0f172a'
			},
			borderRadius: {
				'xl': '1rem',
				'2xl': '1.25rem'
			},
			fontFamily: {
				sans: ['Inter', 'ui-sans-serif', 'system-ui', 'Segoe UI', 'Roboto', 'Helvetica', 'Arial', 'sans-serif'],
				display: ['"Playfair Display"', 'Inter', 'ui-sans-serif', 'system-ui']
			}
		},
	},
	plugins: [
		require('@tailwindcss/forms')
	],
}


