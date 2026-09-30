<script lang="ts">
	import { ContentPage, IndexHeader, ProjectList } from '$lib/components/content';
	import { formatEntryCount } from '$lib/utils/format-entry-count';

	const pages = [
		{
			id: '01',
			title: 'THIS WEBSITE',
			// type: 'Site introduction',
			description: 'Start Here.',
			href: '/about/this-website'
		},
		{
			id: '02',
			title: 'ME',
			// type: 'Personal profile',
			description: 'Or Start Here.',
			href: '/about/about-me'
		}
	];
</script>

<ContentPage>
	<IndexHeader eyebrow="01 — ABOUT" count={formatEntryCount(pages.length)} />
	<ProjectList projects={pages} />
</ContentPage>
