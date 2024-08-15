import { writable } from 'svelte/store';

export type WordType = {
	word: string;
	description: string;
	addedOn: Date;
};
export const words = writable<WordType[]>([]);
