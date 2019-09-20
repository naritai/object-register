import { useStore } from "effector-react";
import React from "react";
import { EventListItem } from "./EventListItem";
import { $eventList } from "./model";
import "./ObjectsEventList.css";

export const ObjectsEventList = () => {
	const events = useStore($eventList);
	const showEvents = events.length > 0;

	return (
		<div className="event-register">
			{showEvents ? (
				<div>
					{events.map((event) => {
						return <EventListItem key={event.id} event={event} />;
					})}
				</div>
			) : (
				<span> here will be some events </span>
			)}
		</div>
	);
};
