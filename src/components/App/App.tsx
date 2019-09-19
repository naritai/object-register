import { Container } from "@material-ui/core";
import React from "react";
import MainContent from "../MainContent";
import MainHeader from "../MainHeader";
import "./App.css";

export const App = () => {
	return (
		<Container maxWidth="lg" className="container">
			<MainHeader />
			<MainContent />
		</Container>
	);
};
