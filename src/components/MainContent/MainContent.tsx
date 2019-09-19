import React from "react";
import ObjectsEventList from "../ObjectsEventList";
import ObjectRegister from "../ObjectsRegister";
import "./MainContent.css";

export const MainContent = () => {
	return (
		<div className="main-content">
			<ObjectRegister />
			<ObjectsEventList />
		</div>
	);
};
