import React, { useState } from "react";
import "./ObjectsRegister.css";
import VideoElement from "../VideoElement/";
import ObjectsThread from "../ObjectsThread/";

const ObjectRegister = () => {
	const [showObjects, setShowObjects] = useState(false);

	const startObserveObjects = (e) => {
		setShowObjects(true);
	}

	const stopObserveObjects = (e) => {
		setShowObjects(false);
	}

	return (
		<div className="object-register">
			<VideoElement showObjects={startObserveObjects}
										hideObjects={stopObserveObjects} />
      {showObjects && <ObjectsThread />}
		</div>
	)
}

export default ObjectRegister;