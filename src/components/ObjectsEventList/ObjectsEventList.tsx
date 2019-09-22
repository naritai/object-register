import { ListItem, ListItemText, Paper } from "@material-ui/core";
import { useStore } from "effector-react";
import React from "react";
import { ObjectsCounter } from "../ObjectsCounter/ObjectsCounter";
import { EventListItem } from "./EventListItem";
import { $eventList } from "./model";
import "./ObjectsEventList.css";

export const ObjectsEventList = () => {
	const events = useStore($eventList);
	const showEvents = events.length > 0;

	return (
		<Paper square elevation={6} className="event-register">
			<ListItem divider className="primary-item-list">
				<ListItemText primary="Event list" secondary={<ObjectsCounter />} />
			</ListItem>

			<div id="object-events-element">
				{showEvents ? (
					<div>
						{events.map((event, id) => {
							return <EventListItem key={id} event={event} />;
						})}
					</div>
				) : (
					<span> here will be some events </span>
				)}
			</div>
		</Paper>
	);
};
