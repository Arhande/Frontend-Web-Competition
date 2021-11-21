module.exports = {
	purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			colors: {
				primarytailwind: '#FFFBD9',
				secondarytailwind: '#F3F407',
				thirdtailwind: '#10305F',
				fourthtailwind: '#FFC603',
			},
			height: {
				xl: '30rem',
				xxl: '50rem',
			},
			width: {
				xl: '30rem',
				xxl: '50rem',
			},
			borderWidth: {
				12: '12px',
			},
		},
	},
	important: true,
	variants: {
		extend: {},
	},
	plugins: [],
};
