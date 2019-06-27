import * as React from 'react';

import { QuickInfoBox } from '@components/QuickInfoBox';

import './styles/TicketsInfo.css';

type PropsT = {
	data: TicketDataT
}

type TicketDataT = {
	open: number,
	closed: number,
	escalated: number
}

const items = (data: TicketDataT) => {
	return (
		<>
			<small><span>{data.open}</span>OPEN</small>
			<small><span>{data.closed}</span>CLOSED</small>
			<small><span>{data.escalated}</span>ESCALATED</small>
		</>
	)
}

export const TicketsInfo = (props: PropsT) => {
	return (
		<QuickInfoBox
			title="Tickets"
			items={items(props.data)}
		/>
	)
}