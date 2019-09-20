import React, { useEffect } from "react";
import { useSVGField } from "../../lib/svg";
import "./Canvas.css";

export const svgFieldId = "super-canvas";

export const Canvas = () => {
	const canvas = useSVGField({
		width: "892",
		height: "520",
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

	console.log("CANVAS COMPONENT UPDATED!!!");

	return (
		<div
			className="canvas-wrapper"
			id="canvas-wrapper"
			onClick={handleClick}
		></div>
	);
};
