export type MetadataLayout = 'grid' | 'inline' | 'row';

export interface MetadataItem {
	label: string;
	value: string;
	href?: string;
}

export interface ProjectSummary {
	id?: string;
	title: string;
	type?: string;
	description: string;
	stack?: string;
	href?: string;
	anchorId?: string;
}
