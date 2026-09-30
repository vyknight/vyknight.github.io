export type MetadataLayout = 'grid' | 'inline' | 'row';

export interface MetadataItem {
	label: string;
	value: string;
}

export interface DetailTextSegment {
	text: string;
	href?: string;
}

export type DetailParagraph = string | readonly DetailTextSegment[];

export interface DetailSection {
	heading?: string;
	paragraphs?: readonly DetailParagraph[];
	bullets?: readonly string[];
	paragraphsAfterBullets?: readonly DetailParagraph[];
}

export interface ProjectSummary {
	id: string;
	title: string;
	type: string;
	description: string;
	stack: string;
	href?: string;
	anchorId?: string;
}
