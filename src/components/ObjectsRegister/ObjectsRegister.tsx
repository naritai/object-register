import React, { useEffect, useState } from "react";
import Canvas from "../Canvas";
import ObjectsThread from "../ObjectsThread";
import VideoElement from "../VideoElement";
import "./ObjectsRegister.css";

export const ObjectRegister = () => {
	const [showObjects, setShowObjects] = useState(false);

	useEffect(() => {
		const canvas = document.getElementById("canvas");
		setInterval(() => appendObjectToCanvas(canvas), 1500);
	}, []);

	const startObserveObjects = (e: React.UIEvent<any>) => {
		setShowObjects(true);
	};

	const stopObserveObjects = (e: React.UIEvent<any>) => {
		setShowObjects(false);
	};

	return (
		<div className="object-register">
			<VideoElement
				showObjects={startObserveObjects}
				hideObjects={stopObserveObjects}
			/>
			<Canvas />
		</div>
	);
};

const appendObjectToCanvas = (canvas: any) => {
	const rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
	const animate = document.createElementNS(
		"http://www.w3.org/2000/svg",
		"animate"
	);

	// rect.setAttributeNS(null, "x", `${-Math.random() * 100}`);
	// rect.setAttributeNS(null, "y", `${-Math.random() * 100}`);
	rect.setAttributeNS(null, "width", String(80));
	rect.setAttributeNS(null, "height", String(120));
	rect.setAttributeNS(null, "fill", "none");
	rect.setAttributeNS(null, "stroke", "orange");
	rect.setAttributeNS(null, "stroke-width", "3");
	rect.setAttributeNS(null, "id", `${Math.random() * 1003131}`);

	animate.setAttributeNS(null, "attributeType", "XML");
	animate.setAttributeNS(null, "attributeName", "x");
	animate.setAttributeNS(null, "from", `${-Math.random() * 100}`);
	animate.setAttributeNS(null, "to", "900");
	animate.setAttributeNS(null, "dur", "4s");
	animate.setAttributeNS(null, "drepeatCountur", "1");

	rect.appendChild(animate);
	canvas.appendChild(rect);
};
