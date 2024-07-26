/** @type {import('tailwindcss').Config} */
export default {
	darkMode: 'class',
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		colors: {
			transparent: 'transparent',
      		current: 'currentColor',
			'dark-primary': '#303030',
			'dark-secondary': '#454545',
			'dark-secondary-gradient-via': '#2563eb',
			'dark-secondary-gradient-end': '#3b82f6',
			'dark-tertiary': '#EE7600',
			'dark-contrast': '#ffffff',
			'dark-text-white': '#ffffff',
			'dark-text-nav': '#a3a3a3',
			'dark-text-nav-hover': '#ffffff',
			'dark-text-hover': '#ff7849',
			'light-primary': '#f1f5f9',
			'light-secondary': '#c2c2c2',
			'light-tertiary': '#ededed',
			'light-contrast': '#000000',
			'dark-text-black': '#000000',
			'light-text-nav': '#a3a3a3',
			'light-text-nav-hover': '#000000',
			'light-text-heading': '#ff7849',
			'light-text-body': '#ff7849',
			'light-text-hover': '#ff7849',
			'test':'#303030'
		  },
		extend: {},
	},
	plugins: [],
}
