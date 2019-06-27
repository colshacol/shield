import * as React from 'react';
import { ParentSize } from '@vx/responsive';

import { Floater } from '@components/Floater';
import { colors } from '@styles/js';

import './styles/NISTScore.css';

import {
	RadialBarChart,
	RadialBar,
	PieChart,
	Pie,
	Legend,
	Tooltip,
	ResponsiveContainer
} from 'recharts';

type PropsT = {
	level: number
};

const TOTAL_DATA = [
	{
		name: 'bar',
		value: 100
	}
];

const CURRENT_DATA = [
	{
		name: 'bar',
		value: 64
	}
];

const TARGET_DATA = [
	{
		name: 'bar',
		value: (180 - (77 * 1.8))
	}
];

export const NISTScore = (props: PropsT) => {
	return (
		<Floater size="half" title="NIST Score" subtitle="Optional Subtitle">
			<div styleName="NISTScore">
			<ResponsiveContainer height={220} aspect={0.9}>
				<PieChart width={200} height={220}>
					{/* total */}
					<Pie 
						data={TOTAL_DATA}
						dataKey="value"
						nameKey="name"
						cx="50%"
						cy="35%"
						innerRadius={150}
						outerRadius={200}
						fill={colors.gridLineGray}
						opacity={1}
						startAngle={180}
						endAngle={(180 - (100 * 1.8))}
						stroke="none"
						isAnimationActive={false}
					/>
					{/* target */}
					<Pie
						data={TOTAL_DATA}
						dataKey="value"
						nameKey="name"
						cx="50%"
						cy="35%"
						innerRadius={150}
						outerRadius={200}
						fill={colors.blue}
						opacity={1}
						stroke="none"
						startAngle={180}
						endAngle={(180 - (77 * 1.8))}
						// isAnimationActive={false}
					/>
					{/* current */}
					<Pie
						data={TOTAL_DATA}
						dataKey="value"
						nameKey="name"
						cx="50%"
						cy="35%"
						innerRadius={150}
						outerRadius={200}
						fill={colors.green}
						opacity={1}
						stroke="none"
						startAngle={180}
						endAngle={(180 - (64 * 1.8))}
					/>
				</PieChart>

				{/* <RadialBarChart
						cy="42%"
						innerRadius="80%"
						outerRadius="100%"
						data={MOCK_DATA}
						startAngle={180}
						endAngle={0}
						barSize={40}
						barCategoryGap={-22}
					>
						<RadialBar
							height={250}
							background
							minAngle={10}
							maxAngle={90}
							clockWise={true}
							barGap={22}
						/>
						<RadialBar
							height={250}
							background
							minAngle={10}
							maxAngle={90}
							data={MOCK_DATA}
							clockWise={true}
							barGap={22}
						/>

					</RadialBarChart> */}
			</ResponsiveContainer>
			</div>
		</Floater>
	);
};
