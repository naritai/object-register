import { AppBar, Toolbar, Typography } from "@material-ui/core";
import React from "react";
import { clearEvents } from "../ObjectsEventList/model";
import { resetObjectCounter } from "../ObjectsRegister/model";
import "./MainHeader.css";

export const MainHeader = () => {
	return (
		<AppBar position="fixed" className="main-header">
			<Toolbar>
				<Typography variant="h5" noWrap>
					Object Register
				</Typography>

				<button className="btn" onClick={handleClearEvents}>
					Clear event list
				</button>
			</Toolbar>
		</AppBar>
	);
};

const handleClearEvents = (e: any) => {
	clearEvents();
	resetObjectCounter();
};
