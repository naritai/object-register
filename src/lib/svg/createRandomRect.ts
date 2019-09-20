import { animateRect, createRect } from ".";

export const createRandomAnimatedRect = () => {
	const rand = Math.random() + 0.5;
	const randomId = Math.random() * 324327 + "sadfasdf";

	const rect = createRect({
		width: rand > 1 ? "60" : "160",
		height: rand > 1 ? "100" : "80",
		stroke: rand > 1 ? "yellow" : "green",
		strokeWidth: "3",
		left: rand > 1 ? "100" : "300",
		top: rand > 1 ? "200" : "400",
		id: randomId
	});

	animateRect(rect, {
		className: "animated-object-human"
	});

	return { rect, randomId };
};
