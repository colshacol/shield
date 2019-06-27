import * as React from 'react';

import { QuickInfoBox } from '@components/QuickInfoBox';

import './styles/GlobalThreatLevel.css';

type PropsT = {
	level: number
}

const items = (level: number) => {
	return (
		<>
			<small data-z-active={level === 0}>GUARDED</small>
			<small data-z-active={level === 1}>ELEVATED</small>
			<small data-z-active={level === 2}>HIGH</small>
			<small data-z-active={level === 3}>CRITICAL</small>
		</>
	)
}

export const GlobalThreatLevel = (props: PropsT) => {
	return (
		<QuickInfoBox
			title="Global Threat Level"
			items={items(props.level)}
		/>
	)
}