import * as React from 'react';
import { isObservable, trace } from 'mobx';
import { Observer, inject, observer } from 'mobx-react';
import DevTools from 'mobx-react-devtools';

import { ViewHeader } from '@components/ViewHeader';
import { Floater } from '@components/Floater';
import { GlobalThreatLevel } from './GlobalThreatLevel';
import { TicketsInfo } from './TicketsInfo';
import { MAHIAwareness } from './MAHIAwareness';
import { NISTScore } from './NISTScore';
import { MAHIAreaChart } from './MAHIAreaChart';

import { MOCK_MAHI_DATA, LINKS, MOCK_TICKET_DATA } from '../consts';

import './styles/Dashboard.css';

export const Dashboard = (props: PropsT) => {
	return (
		<>
			<DevTools />
			<div styleName="Dashboard">
				<ViewHeader title="Client Dashboard" links={LINKS} />
				<div styleName="infoBoxesRow">
					<TicketsInfo data={MOCK_TICKET_DATA} />
					<GlobalThreatLevel level={0} />
				</div>
				<MAHIAwareness />
				<div styleName="floaterRow">
					<NISTScore />
					<Floater size="half" title="MAHI Awareness" subtitle="Optional Subtitle">
						foobar
					</Floater>
				</div>
			</div>
			<MAHIAwarenessDock />
		</>
	);
};

const MAHIAwarenessDock = inject('appStore')(observer((props) => {
	return (
		<If condition={props.appStore.docked}>
			<div styleName="dockedMAHI">
				<div styleName="dockedMAHITitle">MAHI Awareness</div>
				<MAHIAreaChart height={200} data={MOCK_MAHI_DATA} color="blue" />
			</div>
		</If>
	)
}));
