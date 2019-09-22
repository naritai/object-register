import { ListItem, ListItemText, Paper } from "@material-ui/core";
import { useStore } from "effector-react";
import React from "react";
import styled, { css } from "styled-components";
import { ObjectsCounter } from "../ObjectsCounter/ObjectsCounter";
import { videoHeight } from "../VideoElement/params";
import { EventListItem } from "./EventListItem";
import { $eventList } from "./model";
import "./ObjectsEventList.css";

export const ObjectsEventList = () => {
	const events = useStore($eventList);
	const showEvents = events.length > 0;

	return (
		<Wrapper videoHeight={videoHeight}>
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
		</Wrapper>
	);
};

type WrapperProps = {
	videoHeight: number;
};

const Wrapper = styled.div`
	height: ${({ videoHeight }: WrapperProps) => videoHeight - 20 + "px"};
	margin-left: 1em;
	padding: 0.5em;
	flex-grow: 1;
	overflow: scroll;
	border: 4px solid orange;
`;
