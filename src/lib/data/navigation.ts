import type { NavigationSection } from '$lib/types/navigation';

export const NAVIGATION_SECTIONS: readonly NavigationSection[] = [
	{
		label: 'About',
		href: '/about',
		children: [
			{ label: 'THIS WEBSITE', href: '/about/this-website' },
			{ label: 'ME', href: '/about/about-me' }
		]
	},
	{
		label: 'Work',
		href: '/work',
		children: [
			{ label: 'Amazon — SWE I', href: '/work/amazon-software-engineer' },
			{ label: 'Amazon — Intern', href: '/work/amazon-intern' },
			{ label: 'Huawei', href: '/work/huawei' },
			{ label: 'IBM', href: '/work/ibm' },
			{ label: 'UNICEF', href: '/work/unicef' },
			{ label: 'Onova', href: '/work/onova' }
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
