import { useEffect, useState } from "react";

type SVGFiledProps = {
	width: string;
	height: string;
	fill: string;
	viewBox?: string;
	id?: string;
};

export function useSVGField(options: SVGFiledProps) {
	const [SVGFiled, setSVGFiled] = useState<any>(
		useEffect(() => {
			const svg1 = document.createElementNS(
				"http://www.w3.org/2000/svg",
				"svg"
			);

			svg1.setAttribute("width", options.width);
			svg1.setAttribute("height", options.height);
			svg1.setAttribute("fill", options.fill);
			svg1.setAttribute("id", options.id || "");

			setSVGFiled(svg1);

			return () => {
				try {
					const parent = svg1.parentNode as any;
					parent.removeChild(svg1);
				} catch (err) {
					console.error("Ошибка: Не удалось удалить тег sv");
					console.error(err.message);
				}
			};
		}, [])
	);

	return SVGFiled;
}

type SVGRectProps = {
	width: string;
	height: string;
	fill?: string;
	stroke: string;
	strokeWidth?: string;
	bottom?: string;
	left?: string;
	right?: string;
	top?: string;
};

export function createRect(options: SVGRectProps): SVGRectElement {
	const rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");

	rect.setAttribute("width", options.width);
	rect.setAttribute("height", options.height);
	rect.setAttribute("fill", options.fill || "none");
	rect.setAttribute("stroke", options.stroke);
	rect.setAttribute("stroke-width", options.strokeWidth || "1");
	rect.setAttribute("left", options.left || "0");
	rect.setAttribute("top", options.top || "0");
	rect.setAttribute("bottom", options.bottom || "");
	rect.setAttribute("right", options.right || "");

	// enable to trigger clicks on svg elements
	rect.style.pointerEvents = "all";

	return rect;
}

type SVGAnimateProps = {
	attributeType?: string;
	attributeName: string;
	from: string;
	to: string;
	dur?: string;
	repeatCount?: string;
};

export function animateRect(
	rect: SVGRectElement,
	options: SVGAnimateProps
): SVGRectElement {
	const animate = document.createElementNS(
		"http://www.w3.org/2000/svg",
		"animate"
	);

	animate.setAttribute("attributeType", options.attributeName || "XML");
	animate.setAttribute("attributeName", options.attributeName);
	animate.setAttribute("from", options.from);
	animate.setAttribute("to", options.to);
	animate.setAttribute("dur", options.dur || "5s");
	animate.setAttribute("repeatCount", options.repeatCount || "1");
	animate.setAttribute("additive", "sum");

	rect.appendChild(animate);

	return rect;
}

export const createRandomAnimatedRect = () => {
	// TODO: add randomness

	const rand = Math.random() + 0.5;

	const rect = createRect({
		width: rand > 1 ? "60" : "160",
		height: rand > 1 ? "100" : "80",
		stroke: rand > 1 ? "yellow" : "green",
		strokeWidth: "3",
		left: rand > 1 ? "100" : "300",
		top: rand > 1 ? "200" : "400"
	});

	const animatedRect = animateRect(rect, {
		from: "-100",
		to: "900",
		attributeName: "x",
		dur: "2s"
	});

	return animatedRect;
};
