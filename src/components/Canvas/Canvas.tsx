import React from "react";
import "./Canvas.css";

export const Canvas = () => {
	const handleClick = (e: any) => {
		console.log(e.target.getBoundingClientRect());
	};

	return (
		<div className="canvas-wrapper">
			<svg
				id="canvas"
				width="900"
				height="520"
				version="1.1"
				viewBox="0 0 900 600"
				onClick={handleClick}
				// xmlns="http://www.w3.org/2000/svg"
				// xmlns:xlink="http://www.w3.org/1999/xlink"
				// xmlns:svgjs="http://svgjs.com/svgjs"
			>
				{/* <rect
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
				</rect> */}
			</svg>
		</div>
	);
};
