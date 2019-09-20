import React, { useEffect } from "react";
import { useSVGField } from "../../lib/svg";
import "./Canvas.css";
import { canvasHeight, canvasWidth, svgFieldId } from "./params";

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
			wrapper.appendChild(canvas);
		}
	}, [canvas]);

	const handleClick = (e: any) => {
		console.log(e.target.getBoundingClientRect());
	};

	return (
		<div
			className="canvas-wrapper"
			id="canvas-wrapper"
			onClick={handleClick}
		></div>
	);
};
