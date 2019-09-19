import React, { useEffect } from "react";
import "./ObjectsThread.css";

export const ObjectsThread = () => {
	useEffect(() => {
		// initialize objects thread
	}, []);

	const handleClick = (e: React.MouseEvent<any>) => {
		// ДЕЛЕГИРОВАНИЕОБРАБОТЧИКА СОБЫТИЙ КОНТЕЙНЕРУ
		const target = e.target;
		console.log(target);
	};

	return (
		<div className="transparent-contaner" onClick={handleClick}>
			HERE WILL BE THE CANVAS SVG ELEMENT
		</div>
	);
};
