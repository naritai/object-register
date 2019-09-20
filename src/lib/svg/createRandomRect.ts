import { animateRect, createRect } from ".";

function randomInteger(min: number, max: number): number {
	const rand = min - 0.5 + Math.random() * (max - min + 1);
	return Math.round(rand);
}

const colors: string[] = [
	"#FF0000",
	"#F7CA18",
	"#52B3D9",
	"#F9690E",
	"#BF55EC",
	"#68C3A3",
	"#6BB9F0",
	"#C8F7C5",
	"#913D88",
	"#1F3A93"
];

type RandomAnimatedRectProps = {
	width: number;
	height: number;
};

export const createRandomAnimatedRect = (options: RandomAnimatedRectProps) => {
	const randomObject = randomInteger(1, 10);
	const randomId: string = Math.random() * 324327 + "sadfasdf";
	const object = randomObject > 5 ? "human" : "car";

	const { width, height } = options;
	const divider = object === "human" ? 7 : 5;
	const reactWidth = String(width / divider);
	const reactHeight = String(height / divider);

	const rect = createRect({
		width: reactWidth,
		height: reactHeight,
		stroke: colors[randomObject],
		strokeWidth: "3",
		left: object === "human" ? "100" : "300",
		top: object === "human" ? "200" : "400",
		id: randomId
	});

	animateRect(rect, {
		className:
			object === "human" ? "animated-object-human" : "animated-object-car"
	});

	return { rect, randomId };
};
