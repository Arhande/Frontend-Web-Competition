module.exports = {
	purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			colors: {
				primary: '#FFFBD9',
				secondary: '#F3F407',
				third: '#10305F',
				fourth: '#FFC603',
			},
			height: {
				xl: '30rem',
				xxl: '50rem',
			},
			width: {
				xl: '30rem',
				xxl: '50rem',
			},
			borderWidth:{
				12: '12px'
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
