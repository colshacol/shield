import * as React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';

import { Frame } from './components/Frame';
import './styles/variables.css';
import './styles/reset.css';

const render = (Comp) => {
	return ReactDOM.render(
		<AppContainer>
			<Comp/>
		</AppContainer>,
		document.querySelector('#mountPoint')
	)
}

module.hot && module.hot.accept('./components/Frame', () => {
	const NextRootContainer = require('./components/Frame').Frame;
	render(NextRootContainer);
});

render(Frame);
