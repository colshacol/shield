import * as React from 'react';
import { inject } from 'mobx-react';

import { Floater } from '@components/Floater';
import { MAHIAreaChart } from './MAHIAreaChart';

import { MOCK_MAHI_DATA } from '../consts';

import './styles/MAHIAwareness.css';

export const MAHIAwareness = inject('appStore')((props) => {
	console.log({ props })
	return (
		<Floater size="full" title="MAHI Awareness" subtitle="24 hour tracking" toggleMenu={props.appStore.toggleDockedMAHI}>
			<div styleName="MAHIAwareness">
				<MAHIAreaChart height={160} grid color="blue" data={props.data || MOCK_MAHI_DATA} />
			</div>
		</Floater>
	);
});
