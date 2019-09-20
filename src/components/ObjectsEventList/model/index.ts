import { createEvent, createStore } from "effector";

export const appendEvent = createEvent<any>();
export const clearEvents = createEvent<void>();
export const $eventList = createStore<any[]>([])
	.on(appendEvent, (state, value) => [...state, value])
	.reset(clearEvents);
