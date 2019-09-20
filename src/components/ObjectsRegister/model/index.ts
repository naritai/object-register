import { createEvent, createStore } from "effector";

export const incrementObject = createEvent<number>();
export const resetObjectCounter = createEvent<void>();
export const $objectsCounter = createStore<number>(0)
	.on(incrementObject, (state, value) => (state += value))
	.reset(resetObjectCounter);
