import * as React from 'react';

import './styles/ThreatMap.css';

type PropsT = {

}

export const ThreatMap = (props: PropsT) => {
	return (
		<Floater size="full" title="Threat Map" subtitle="Optional Subtitle">
			<div styleName="ThreatMap">
				<div styleName="map">
					<p>map will go here</p>
				</div>
				<div styleName="table">
					<table>
						<thead></thead>
						<tbody></tbody>
						<tfoot></tfoot>
					</table>
				</div>
			</div>
		</Floater>
	)
}