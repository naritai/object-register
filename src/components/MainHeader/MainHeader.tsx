import { AppBar, Button, Toolbar, Typography } from "@material-ui/core";
import React from "react";
import { clearEvents } from "../ObjectsEventList/model";
import { resetObjectCounter } from "../ObjectsRegister/model";
import "./MainHeader.css";

export const MainHeader = () => {
	return (
		<AppBar position="fixed" className="main-header">
			<Toolbar className="toolbar">
				<Typography variant="h5" noWrap>
					Object Register
				</Typography>

				<Button
					variant="contained"
					color="secondary"
					onClick={handleClearEvents}
				>
					Clear event list
				</Button>
			</Toolbar>
		</AppBar>
	);
};

const handleClearEvents = (e: any) => {
	clearEvents();
	resetObjectCounter();
};
