export interface NavigationLink {
	label: string;
	href: string;
}

export interface NavigationSection extends NavigationLink {
	children: readonly NavigationLink[];
}

export interface ExternalLink extends NavigationLink {
	newTab?: boolean;
}
