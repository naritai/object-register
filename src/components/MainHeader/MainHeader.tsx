import { AppBar, Toolbar, Typography } from "@material-ui/core";
import React from "react";
import "./MainHeader.css";

export const MainHeader = () => {
	return (
		<AppBar position="fixed" className="main-header">
			<Toolbar>
				<Typography variant="h5" noWrap>
					Object Register
				</Typography>
			</Toolbar>
		</AppBar>
	);
};
