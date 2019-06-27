import * as React from 'react';

import './styles/Logo.css';

const LOGO_URLS = {
	dark: 'https://baldur.zyston.com/images/zyston-logo.png',
	light: 'https://baldur.zyston.com/images/zyston-logo.png'
};

export const Logo = (props) => {
	return (
		<img
			src={props.light ? LOGO_URLS.light : LOGO_URLS.dark}
			alt="Zyston Logo"
			styleName="Logo"
		/>
	);
};
