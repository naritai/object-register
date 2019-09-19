import React, { useState } from "react";
import ObjectsThread from "../ObjectsThread";
import VideoElement from "../VideoElement";
import "./ObjectsRegister.css";

export const ObjectRegister = () => {
	const [showObjects, setShowObjects] = useState(false);

	const startObserveObjects = (e: React.UIEvent<any>) => {
		setShowObjects(true);
	};

	const stopObserveObjects = (e: React.UIEvent<any>) => {
		setShowObjects(false);
	};

	return (
		<div>
			<VideoElement
				showObjects={startObserveObjects}
				hideObjects={stopObserveObjects}
			/>
			{showObjects && <ObjectsThread />}
		</div>
	);
};
