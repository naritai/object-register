import React, { useEffect } from "react";
import './ObjectsThread.css';

// TODO: here I have to randomly create flying objects 


const createObject = () => {

	const rectangle = document.createElement("div");
	rectangle.style.width = "80px";
	rectangle.style.height = "120px";
	rectangle.style.border = "4px solid yellow";
	rectangle.style.position = "absolute";
	rectangle.style.top = "150px";
	rectangle.classList.add("animated-object");

	const parent = document.querySelector(".transparent");
	parent.appendChild(rectangle)

	const timer = setInterval(() => {
		if (rectangle.style.left === "450px") {
			clearInterval(timer);
		} else {
			const value = Number(rectangle.style.left.slice(0, -2));
			rectangle.style.left = (value + 2) + "px";
		}
	}, 20);
}


const ObjectsThread = () => {

	useEffect(() => {
		// const animateId = requestAnimationFrame(startAnimation);
		// () => cancelAnimationFrame(animateId);

	  createObject();
	}, []);

	const handleClick = (e) => {
		// ДЕЛЕГИРОВАНИЕОБРАБОТЧИКА СОБЫТИЙ КОНТЕЙНЕРУ
		const target = e.target;
		console.log(target);
	}


	return (
		<div className="transparent" onClick={handleClick}>	
			{/* <div className="rectangle-car"/>
			<div className="rectangle-person"/>
			<div className="rectangle-truck"/> */}
		</div>
	)
}



export default ObjectsThread;