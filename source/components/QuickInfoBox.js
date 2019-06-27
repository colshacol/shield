import * as React from 'react';

import './styles/QuickInfoBox.css';

type PropsT = {
	title: string,
	items: React.Node[]
}

export const QuickInfoBox = (props: PropsT) => {
	return (
		<div styleName="QuickInfoBox">
			<div styleName="title">{props.title}</div>
			<div styleName="dataContainer">
				{props.items}
			</div>
		</div>
	)
}