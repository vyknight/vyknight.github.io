import type { ExternalLink } from '$lib/types/navigation';

export const SITE_TITLE = 'Zekun Liu - Portfolio';
export const SITE_WORDMARK = '刘ZEKUN';

export const WORDMARK_ANIMATION = {
	revealDelayMs: 250,
	revealDurationMs: 1200
} as const;

export const COORDINATE_TICKER_ANIMATION = {
	revealDurationMs: 900,
	revealedHoldMs: 1400,
	coveredHoldMs: 250
} as const;

export const CONTACT_LINKS: readonly ExternalLink[] = [
	{
		label: 'GITHUB',
		href: 'https://github.com/vyknight',
		newTab: true
	},
	{
		label: 'LINKEDIN',
		href: 'https://www.linkedin.com/in/matthewzekunliu/',
		newTab: true
	}
];
