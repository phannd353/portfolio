/** @type {import('tailwindcss').Config} */
module.exports = {
	important: false,
	content: [
		"**/*.{html, jsx, js}",
		"**/*.js",
		"**/*.html",
	],
	theme: {
		extend: {
			colors: {
				primary: "#000",
				secondary: "#fff",
			}
		},
	},
	plugins: [],
}
