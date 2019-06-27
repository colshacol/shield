import * as React from 'react';

type PropsT = {
	id: string,
	gradient: Array<[string, number]>
}

export const SVGGradientDef = (props) => {
	return (
		<linearGradient id={props.id} gradientUnits="objectBoundingBox" gradientTransform={`rotate(${props.rotation})`}>
			<For each="gradientStop" of={props.gradient} index="i">
				<stop key={`${gradientStop[0]}-${gradientStop[1]}`} offset={`${gradientStop[1]}%`} stopColor={gradientStop[0]} stopOpacity="100%" />
			</For>
		</linearGradient>
	);
};

/*
<defs>
	<SVGGradientDef
		id="myGradient"
		gradient={[
			['#fff', 10],
			['#eee', 40],
			['#bbb', 70],
		]}
	/>
</defs>

*/