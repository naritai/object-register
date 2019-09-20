import { Typography } from "@material-ui/core";
import { useStore } from "effector-react";
import React from "react";
import { $objectsCounter } from "../ObjectsRegister/model";

export const ObjectsCounter = () => {
	const counter = useStore($objectsCounter);

	return (
		<Typography color="primary" variant="subtitle2">
			Objects dispatched: {counter}
		</Typography>
	);
};
