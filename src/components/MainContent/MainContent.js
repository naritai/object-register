import React from "react";
import ObjectRegister from "../ObjectsRegister/";
import "./MainContent.css";
import EventRegister from "../EventRegister/";

const MainContent = () => {
	return <div className="main-content">
		<ObjectRegister />
		<EventRegister />
	</div>
}

export default MainContent;