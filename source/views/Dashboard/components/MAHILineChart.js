import * as React from 'react';

import { ParentSize } from '@vx/responsive';

import {
	LineChart,
	Line,
	CartesianGrid,
	XAxis,
	YAxis,
	ResponsiveContainer
} from 'recharts';

export const MAHILineChart = (props) => {
	return (
		<ResponsiveContainer width={'100%'} height={160}>
			<LineChart data={props.data} margin={{ bottom: 0, left: 0, right: 0, top: 12 }}>
				<defs>
					<filter id="lineBlur0">
						<feGaussianBlur in="SourceGraphic" stdDeviation="5" />
					</filter>
					<filter id="lineBlur1">
						<feGaussianBlur in="SourceGraphic" stdDeviation="9" />
					</filter>
					<linearGradient id="lineGradient" gradientUnits="userSpaceOnUse">
						<For each="set" of={props.data} index="i">
							<stop
								key={i + set.level}
								offset={100 / props.data.length * i + '%'}
								stopColor={gradientColors[Math.floor(set.level)]}
								stopOpacity="100%"
							/>
						</For>
					</linearGradient>
				</defs>
				{/* <CartesianGrid stroke={colors.foo} width={2000} height={220} /> */}
				<Line
					type="monotone"
					dataKey="level"
					strokeWidth={5}
					className="mainLine"
					dot={false}
					stroke="url(#lineGradient)"
				/>
				<Line
					type="monotone"
					dataKey="level"
					dot={false}
					filter="url(#lineBlur0)"
					className="shadowLine"
					stroke="url(#lineGradient)"
				/>
				<Line
					type="monotone"
					dataKey="level"
					dot={false}
					filter="url(#lineBlur1)"
					stroke="url(#lineGradient)"
					className="shadowLine"
				/>
			</LineChart>
		</ResponsiveContainer>
	);
};