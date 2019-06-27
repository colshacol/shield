import * as React from 'react';

import { Logo } from '@components/Logo';
import './styles/TopBar.css';

type PropsT = {};

export const TopBar = (props: PropsT) => {
	return (
		<div styleName="TopBar">
			<div styleName="container">
				<Logo dark />
			</div>
		</div>
	);
};
