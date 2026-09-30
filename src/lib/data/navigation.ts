import type { NavigationSection } from '$lib/types/navigation';

export const NAVIGATION_SECTIONS: readonly NavigationSection[] = [
	{
		label: 'About',
		href: '/about',
		children: [
			{ label: 'Introduction', href: '/about' },
			{ label: 'Focus', href: '/overview/focus' }
		]
	},
	{
		label: 'Work',
		href: '/work',
		children: [
			{ label: 'Portfolio system', href: '/work/portfolio-system' },
			{ label: 'In progress', href: '/work/in-progress' }
		]
	},
	{
		label: 'Projects',
		href: '/projects',
		children: [{ label: 'Scanlined', href: '/projects/scanlined' }]
	},
	{
		label: 'Notes',
		href: '/notes',
		children: [
			{ label: 'Working log', href: '/notes/working-log' },
			{ label: 'Architecture', href: '/notes/architecture' }
		]
	},
	{
		label: 'Blog',
		href: '/blog',
		children: []
	},
	{
		label: 'Resume',
		href: '/resume',
		children: []
	}
];
