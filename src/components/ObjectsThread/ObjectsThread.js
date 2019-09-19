import React, { useEffect } from "react";
import './ObjectsThread.css';


const makeMagic = () => { 
	const canvas = document.getElementById("canvas-scene");
	const ctx = canvas.getContext("2d");
	canvas.width = 640;
	canvas.height = 480;

	ctx.strokeStyle = "orange";
	ctx.strokeRect(150, 150, 266, 266);
	



}

const ObjectsThread = () => {

	useEffect(() => {
		makeMagic();
	}, []);

	const handleClick = (e) => {
		// ДЕЛЕГИРОВАНИЕОБРАБОТЧИКА СОБЫТИЙ КОНТЕЙНЕРУ
		const target = e.target;
		console.log(target);
	}


	return (
		<div className="transparent-contaner" onClick={handleClick}>	
			<canvas width="900" heigth="600" id="canvas-scene">
				Hello from canvas ELEMENT
			</canvas>
		</div>
	)
}



export default ObjectsThread;