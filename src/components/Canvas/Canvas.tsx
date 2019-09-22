import React, { createRef, RefObject, useEffect, useRef } from "react";
import { useSVGField } from "../../lib/svg";
import { appendEvent } from "../ObjectsEventList/model";
import { canvasHeight, canvasWidth, svgFieldId } from "./params";

import "./Canvas.css";

export class Canvas extends React.Component {
	canvas:
		| string
		| ((instance: HTMLDivElement | null) => void)
		| RefObject<HTMLDivElement>
		| null
		| undefined;

	constructor(props: any) {
		super(props);
		this.canvas = createRef();
	}

	componentDidMount() {
		const myCanvas = createCnavas({
			width: String(canvasWidth),
			height: String(canvasHeight),
			fill: "none",
			id: svgFieldId
		});

		// @ts-ignore: Unreachable code error
		this.canvas.current.appendChild(myCanvas);
	}

	render() {
		return (
			<div
				className="canvas-wrapper"
				id="canvas-wrapper"
				onClick={handleClick}
				ref={this.canvas}
			></div>
		);
	}
}

const createCnavas = (options: any) => {
	const svg1 = document.createElementNS("http://www.w3.org/2000/svg", "svg");

	svg1.setAttribute("width", options.width);
	svg1.setAttribute("height", options.height);
	svg1.setAttribute("fill", options.fill);
	svg1.setAttribute("id", options.id || "");
	return svg1;
};

// TODO: Maybe legacy code, cause we need strong reference
// export const Canvas = () => {
// const canvas = useSVGField({
// 	width: String(canvasWidth),
// 	height: String(canvasHeight),
// 	fill: "none",
// 	id: svgFieldId
// });

// 	const canvasRef = useRef(canvas);

// 	useEffect(() => {
// 		const wrapper: any = document.getElementById("canvas-wrapper");
// 		if (canvas) {
// 			try {
// 				wrapper.appendChild(canvasRef.current);
// 			} catch (err) {
// 				console.error(err.message);
// 			}
// 		}
// 	}, [canvas]);

// 	return (
// 		<div
// 			className="canvas-wrapper"
// 			id="canvas-wrapper"
// 			onClick={handleClick}
// 			ref={canvasRef}
// 		></div>
// 	);
// };

// ******* handlers

const updateEventListScroll = () => {
	const element: any = document.getElementById("object-events-element");
	element.scrollTop = 9999;
};

const handleClick = (e: any) => {
	const id = e.target.getAttribute("id");
	if (id === svgFieldId || id === "canvas-wrapper") {
		e.stopPropagation();
		return;
	}

	const { left, right, top, bottom } = e.target.getBoundingClientRect();
	const type = e.target.classList.value;

	const coords = {
		left: parseInt(left),
		right: parseInt(right),
		top: parseInt(top),
		bottom: parseInt(bottom),
		type
	};

	appendEvent(coords);
	updateEventListScroll();
};
