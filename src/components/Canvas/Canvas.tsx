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

{
	/* <svg
				id="canvas"
				width="900"
				height="520"
				version="1.1"
				viewBox="0 0 900 600"
				onClick={handleClick}
				xmlns="http://www.w3.org/2000/svg"
				xmlns:xlink="http://www.w3.org/1999/xlink"
				xmlns:svgjs="http://svgjs.com/svgjs"
			>
				<rect
					className="enable-events"
					id="svg-rect"
					width="60"
					height="80"
					y="20"
					fill="none"
					stroke="orange"
					strokeWidth="3"
				>
					<animate
						xmlns="http://www.w3.org/2000/svg"
						attributeType="XML"
						attributeName="x"
						from="-100"
						to="900"
						dur="4s"
						repeatCount="1"
					/>
				</rect>
			</svg> */
}
