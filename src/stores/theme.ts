import { writable } from 'svelte/store';

export type Theme = 1 | 2 | 3;
export const theme = writable<Theme>(1);
