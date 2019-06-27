import { colors } from '@styles/js';

export const GRADIENT_COLORS = [colors.green, colors.blue, colors.orange, colors.red];

export const VERTICAL_RAINBOW_GRADIENT = [
	[colors.red, 0],
	[colors.orange, 30],
	[colors.blue, 60],
	[colors.green, 90]
];

export const VERTICAL_WARNING_GRADIENT = [
	[colors.red, 20],
	[colors.orange, 100]
];

export const VERTICAL_BLUE_GRADIENT = [
	[colors.darkBlue, 20],
	[colors.darkBlue1, 100]
];

export const ZERO_MARGIN = { bottom: 0, left: 0, right: 0, top: 0 };

export const Y_AXIS_TICKS = [0, 1, 2, 3, 4];
export const Y_AXIS_DOMAIN = [0, 5];

export const X_AXIS_TICKS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23];
export const X_AXIS_DOMAIN = ['dataMin', 'dataMax + 1'];

export const LINKS = [
	{
		name: 'Home',
		path: '/'
	}
];

export const MOCK_TICKET_DATA = {
	open: 32,
	closed: 19,
	escalated: 0
};

export const MOCK_MAHI_DATA = [
	{
		level: 2.0,
		hour: 1
	},
	{
		level: 1.0,
		hour: 2
	},
	{
		level: 2.0,
		hour: 3
	},
	{
		level: 3.0,
		hour: 4
	},
	{
		level: 4.0,
		hour: 5
	},
	{
		level: 2.0,
		hour: 6
	},
	{
		level: 3.0,
		hour: 7
	},
	{
		level: 2.0,
		hour: 8
	},
	{
		level: 1.0,
		hour: 9
	},
	{
		level: 3.0,
		hour: 10
	},
	{
		level: 2.0,
		hour: 11
	},
	{
		level: 2.0,
		hour: 12
	},
	{
		level: 1.0,
		hour: 13
	},
	{
		level: 1.0,
		hour: 14
	},
	{
		level: 2.0,
		hour: 15
	},
	{
		level: 3.0,
		hour: 16
	},
	{
		level: 2.0,
		hour: 17
	},
	{
		level: 3.0,
		hour: 18
	},
	{
		level: 1.0,
		hour: 19
	},
	{
		level: 4.0,
		hour: 20
	},
	{
		level: 2.0,
		hour: 21
	},
	{
		level: 1.0,
		hour: 22
	},
	{
		level: 2.0,
		hour: 23
	},
	{
		level: 3.0,
		hour: 24
	},
	{
		level: 2.0,
		hour: 24
	}
];
