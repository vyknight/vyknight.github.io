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
			href: '/projects/scanlined'
		}
	];
</script>

<ContentPage>
	<IndexHeader eyebrow="PROJECTS" count={formatEntryCount(projects.length)} />
	<ProjectList {projects} />
</ContentPage>
