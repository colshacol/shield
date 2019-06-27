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
import * as styled from './styled';
import { MOCK_MAHI_DATA } from '../../consts';
import { colors } from '@styles/js';

const gradientColors = [colors.green, colors.blue, colors.orange, colors.red];



const VERTICAL_GRADIENT = [
	[colors.red, 20],
	[colors.orange, 47],
	[colors.blue, 71],
	[colors.green, 95]
];

const ZERO_MARGIN = { bottom: 0, left: 0, right: 0, top: 0 };
const Y_AXIS_TICKS = [0, 1, 2, 3, 4];
const Y_AXIS_DOMAIN = [0, 5];

export const MAHIAreaChart = (props) => {
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
							<feGaussianBlur in="SourceGraphic" stdDeviation="6" />
						</filter>
						<filter id="areaBlur1">
							<feGaussianBlur in="SourceGraphic" stdDeviation="7" />
						</filter>
						<SVGGradientDef gradient={VERTICAL_GRADIENT} id="myGradient" />
					</defs>
					<CartesianGrid stroke={colors.foo} width={parent.width} height={props.height} />
					<YAxis hide ticks={Y_AXIS_TICKS} domain={Y_AXIS_DOMAIN} />
					<Area
						connectNulls
						type="natural"
						dataKey="level"
						strokeWidth={0}
						filter="url(#areaBlur1)"
						fillOpacity={0.2}
						transform="translate(2, 1)"
					/>
					<Area
						connectNulls
						type="natural"
						dataKey="level"
						strokeWidth={0}
						fill="url(#myGradient)"
						filter="url(#areaBlur0)"
						fillOpacity={0.6}
						transform="translate(3, 1)"
					/>
					<Area
						connectNulls
						type="natural"
						dataKey="level"
						strokeWidth={0}
						fill="url(#myGradient)"
						fillOpacity={0.8}
					/>
				</AreaChart>
			)}
		</ParentSize>
	);
};

const MAHIAreaChartBasic = (props) => {
	return (
		<ParentSize>
			{(parent) => (
				<AreaChart
					width={parent.width}
					height={200}
					data={props.data}
					margin={{ top: 0, right: 0, left: 0, bottom: 0 }}
				>
					<Area type="monotone" dataKey="level" stroke="#8884d8" fill="#8884d8" />
				</AreaChart>
			)}
		</ParentSize>
	);
};