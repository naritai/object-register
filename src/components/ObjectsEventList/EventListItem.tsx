import React from "react";

type Props = {
	event: any;
};

export const EventListItem = ({ event }: Props) => {
	const { top, left, right, bottom, type } = event;

	return (
		<div className="event-list-item">
			<span>Top: {top} px.</span>
			<span>Left: {left} px.</span>
			<span>Right: {right} px.</span>
			<span>Bottom: {bottom} px.</span>
			<span>Type: {type}</span>
		</div>
	);
};
