import * as React from 'react';

import { ParentSize } from '@vx/responsive';

import {
	LineChart,
	Line,
	CartesianGrid,
	XAxis,
	YAxis,
	AreaChart,
	Area,
	ResponsiveContainer
} from 'recharts';

import { SVGGradientDef } from '@components/SVGGradientDef';
import { colors } from '@styles/js';

import './styles/MAHIAreaChart.css';

import {
	MOCK_MAHI_DATA,
	VERTICAL_WARNING_GRADIENT,
	VERTICAL_RAINBOW_GRADIENT,
	VERTICAL_BLUE_GRADIENT,
	Y_AXIS_DOMAIN,
	Y_AXIS_TICKS,
	X_AXIS_DOMAIN,
	X_AXIS_TICKS,
	ZERO_MARGIN,
	GRADIENT_COLORS
} from '../consts';

const GRADIENTS = {
	'blue': 'blueGradient',
	'rainbow': 'rainbowGradient',
	orange: 'orangeGradient'
}

export const MAHIAreaChart = (props) => {
	const gradientId = GRADIENTS[props.color];

	return (
		<ParentSize>
			{(parent) => (
				<AreaChart					
					data={props.data}
					width={parent.width}
					height={props.height}
					margin={ZERO_MARGIN}
				>
					<defs>
						<filter id="areaBlur0">
							<feGaussianBlur in="SourceGraphic" stdDeviation="4" />
						</filter>
						<filter id="areaBlur1">
							<feGaussianBlur in="SourceGraphic" stdDeviation="9" />
						</filter>
						<SVGGradientDef gradient={VERTICAL_WARNING_GRADIENT} id="orangeGradient" rotation={90}/>
						<SVGGradientDef gradient={VERTICAL_RAINBOW_GRADIENT} id="rainbowGradient" rotation={0}/>
						<SVGGradientDef gradient={VERTICAL_BLUE_GRADIENT} id="blueGradient" rotation={90}/>
					</defs>
					{props.grid && <CartesianGrid stroke={colors.gridLineGray} width={parent.width} height={props.height} />}
					<Area
						connectNulls
						type="natural"
						dataKey="level"
						fillOpacity={0.5}
						strokeWidth={0}
						filter="url(#areaBlur1)"
						transform="translate(2, 4)"
					/>
					<Area
						connectNulls
						type="natural"
						dataKey="level"
						fillOpacity={0.4}
						strokeWidth={0}
						fill={`url(#${gradientId})`}
						filter="url(#areaBlur0)"
						isAnimationActive={false}
						transform="translate(4, 4)"
					/>
					<Area
						connectNulls
						type="natural"
						dataKey="level"
						strokeWidth={0}
						fill={`url(#${gradientId})`}
						fillOpacity={0.8}
					/>
					<YAxis hide ticks={Y_AXIS_TICKS} domain={Y_AXIS_DOMAIN} />
					<XAxis
						axisLine={false}
						tickLine={{ stroke: '#fff' }}
						type="category"
						interval={1}
						tickSize={4}
						mirror
						reversed
						tick={{ fill: '#fff' }}
						opacity={0.5}
					/>
				</AreaChart>
			)}
		</ParentSize>
	);
};
