const cssNext = require('postcss-cssnext');

module.exports = {
	plugins: [
		cssNext({
			features: {
				customProperties: {
					appendVariables: true,
					variables: {
						darkBlue: '#45467B',
						white: '#FFFFFF',
						lightGray: '#F6F7F9',
						blue: '#799DFF',
						paleBlue: '#B2B2C9',
						green: '#76E38E',
						orange: '#FEA82A',
						red: '#F74F32',
						gridLineGray: 'rgba(178,178,201, 0.1)',
						invisible: 'rgba(0,0,0,0.0)',
						shadow0: '1px 3px 4px 0 rgba(183,187,195,0.10), 1px 2px 8px 0 rgba(126,159,255,0.08)'
					}
				}
			}
		})
	]
};
