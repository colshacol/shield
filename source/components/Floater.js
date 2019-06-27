import * as React from 'react';
import Ionicon from 'react-ionicons';
import { observable, action, computed, whyRun, isObservable } from 'mobx';
import { observer, Observer } from 'mobx-react';

import './styles/Floater.css';

type PropsT = {
	title: string,
	subtitle: string,
	body: React.Node,
	size: 'full' | 'half',
	menuOpen: boolean,
	toggleMenu(): void
};

export const Floater = (props: PropsT) => {
	return (
		<div styleName="Floater" data-z-size={props.size}>
			<div styleName="container">
				<div styleName="header">
					<div styleName="headerLeft">
						<div styleName="title">{props.title}</div>
						<If condition={props.subtitle}>
							<div styleName="subtitle">{props.subtitle}</div>
						</If>
					</div>

					<div styleName="headerRight">
						<Ionicon icon="ios-more" fontSize="22px" onClick={props.toggleMenu || (() => {})} />
					</div>
				</div>
				<div styleName="body">{props.children}</div>
				<div styleName="footer" />
			</div>
		</div>
	);
};
