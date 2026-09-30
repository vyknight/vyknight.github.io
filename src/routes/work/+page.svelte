<script lang="ts">
	import { ContentPage, IndexHeader, ProjectList } from '$lib/components/content';
	import { formatEntryCount } from '$lib/utils/format-entry-count';

	const projects = [
		{
			id: '01',
			title: 'Scanlined',
			type: 'Open-source library',
			description:
				'An animated text renderer that turns glyphs into selectable scanline blocks for the web.',
			stack: 'TypeScript · SVG · Svelte action',
			anchorId: 'scanlined'
		},
		{
			id: '02',
			title: 'This portfolio',
			type: 'Web system',
			description:
				'A deliberately small SvelteKit site designed as a living index of technical work.',
			stack: 'SvelteKit · Static export · GitHub Pages',
			anchorId: 'portfolio-system'
		},
		{
			id: '03',
			title: 'Next entry',
			type: 'In progress',
			description:
				'Reserve this slot for a case study, experiment, or system worth documenting in full.',
			stack: 'Add project metadata',
			anchorId: 'in-progress'
		}
	];
</script>

<ContentPage>
	<IndexHeader eyebrow="02 — SELECTED WORK" count={formatEntryCount(projects.length)} />
	<ProjectList {projects} />
</ContentPage>
