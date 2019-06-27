import * as React from 'react';
import { Link } from 'react-router-dom';

import './styles/ViewHeader.css';

type TLink = {
	name: string,
	path: string
};

type PropsT = {
	title: string,
	links: TLink[]
};

export const ViewHeader = (props: PropsT) => {
	return (
		<div styleName="ViewHeader">
			<div styleName="container">
				<h3>{props.title}</h3>
				<div>
					<For each="link" of={props.links}>
						<Link to={link.path} key={link.name}>
							{link.name}
						</Link>
					</For>
				</div>
			</div>
		</div>
	);
};
