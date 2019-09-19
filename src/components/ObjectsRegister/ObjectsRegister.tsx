import React, { useEffect, useState } from "react";
import { createRandomAnimatedRect } from "../../lib/svg";
import Canvas from "../Canvas";
import { svgFieldId } from "../Canvas/Canvas";
import VideoElement from "../VideoElement";
import "./ObjectsRegister.css";

export const ObjectRegister = () => {
	const [showObjects, setShowObjects] = useState(false);
	const [timer, setTimer] = useState<any>(null);

	useEffect(() => {
		if (showObjects) {
			const timerId = setInterval(appendRandomRect, 1000);
			setTimer(timerId);
		}

		return clearInterval(timer);
	}, [showObjects]);

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

const appendRandomRect = () => {
	const svgField: any = document.getElementById(svgFieldId);
	const animatedRect = createRandomAnimatedRect();

	console.log(svgField);
	console.log(animatedRect);

	svgField.appendChild(animatedRect);
};
