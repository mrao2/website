import { browser } from '$app/environment';
import { writable } from 'svelte/store';

export type Theme = 'light' | 'dark';

const storageKey = 'theme';

const { subscribe, set, update } = writable<Theme>('light');

const applyTheme = (theme: Theme) => {
	if (!browser) return;
	document.documentElement.classList.toggle('dark', theme === 'dark');
	document.documentElement.style.colorScheme = theme;
};

const getInitialTheme = (): Theme => {
	if (!browser) return 'light';
	const saved = localStorage.getItem(storageKey);
	if (saved === 'light' || saved === 'dark') return saved;
	return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
};

export const theme = {
	subscribe,
	init() {
		const initial = getInitialTheme();
		set(initial);
		applyTheme(initial);
	},
	toggle() {
		update((current) => {
			const next: Theme = current === 'dark' ? 'light' : 'dark';
			applyTheme(next);
			if (browser) {
				localStorage.setItem(storageKey, next);
			}
			return next;
		});
	}
};
