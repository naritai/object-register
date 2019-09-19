import React from "react";
import EventRegister from "../EventRegister";
import ObjectRegister from "../ObjectsRegister";
import "./MainContent.css";

export const MainContent = () => {
	return (
		<div className="main-content">
			<ObjectRegister />
			<EventRegister />
		</div>
	);
};
