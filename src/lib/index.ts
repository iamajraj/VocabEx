import type { WordType } from './store/words';

export const storeWords = (words: WordType[]) => {
	localStorage.setItem('words', JSON.stringify(words));
};
