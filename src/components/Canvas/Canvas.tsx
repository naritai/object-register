import React, { useEffect } from "react";
import { useSVGField } from "../../lib/svg";
import { appendEvent } from "../ObjectsEventList/model";
import { canvasHeight, canvasWidth, svgFieldId } from "./params";

import "./Canvas.css";

export const Canvas = () => {
	const canvas = useSVGField({
		width: String(canvasWidth),
		height: String(canvasHeight),
		fill: "none",
		id: svgFieldId
	});

	useEffect(() => {
		const wrapper: any = document.getElementById("canvas-wrapper");
		if (canvas) {
			try {
				wrapper.appendChild(canvas);
			} catch (err) {
				console.error(err.message);
			}
		}
	}, [canvas]);

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

	return (
		<div
			className="canvas-wrapper"
			id="canvas-wrapper"
			onClick={handleClick}
		></div>
	);
};

const updateEventListScroll = () => {
	const element: any = document.getElementById("object-events-element");
	element.scrollTop = 9999;
};
