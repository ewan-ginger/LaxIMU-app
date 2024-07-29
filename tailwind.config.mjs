/** @type {import('tailwindcss').Config} */
export default {
	darkMode: 'class',
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		colors: {
			transparent: 'transparent',
      		current: 'currentColor',
			'white': '#ffffff',
			'black': '#000000',
			'dark-background-light': '#353535',
			'dark-background-medium': '#303030',
			'dark-background-dark': '#151515',
			'light-background-light': '#f1f5f9',
			'light-background-medium': '#ededed',
			'light-background-dark': '#ededed',
			'text-nav': '#a3a3a3',
			'light-project-thumb': '#c2c2c2',
			'dark-project-thumb': '#303030',
			'blue-light': '#3b82f6',
			'blue-medium': '#2563eb',
			'blue-dark': '#1d4ed8',
			'orange-light': '#FF952D',
			'orange-medium': '#EE7600',
			'orange-dark': '#914800'
		  },
		extend: {},
	},
	plugins: [],
}
