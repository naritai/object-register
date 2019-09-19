import React from "react";
import "./MainHeader.css"

const MainHeader = () => {
	return (
		<div className="main-header">
			<h1>Fake object register</h1>
			<div>
				<button className="btn btn-primary custom-btn">Start</button>
				<button className="btn btn-secondary custom-btn">Stop</button>
			</div>
		</div>
	)
}

export default MainHeader;