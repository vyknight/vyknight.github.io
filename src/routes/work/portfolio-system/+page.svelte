<script lang="ts">
	import {
		ContentHeader,
		ContentPage,
		DetailSections,
		MetadataList
	} from '$lib/components/content';

	const metadata = [
		{ label: 'TYPE', value: 'Static website' },
		{ label: 'STACK', value: 'SvelteKit' },
		{ label: 'DEPLOY', value: 'GitHub Pages' }
	];

	const sections = [
		{
			heading: 'Structure',
			paragraphs: ['Header and directory live in the root layout; content routes can evolve independently.']
		},
		{
			heading: 'Navigation',
			paragraphs: ['Top-level pages are categories, while the accordion exposes their child documents.']
		}
	];
</script>

<ContentPage>
	<ContentHeader
		eyebrow="02.02 — CASE STUDY"
		title="Portfolio system"
		summary="This site is structured as a durable technical index: a persistent shell, category landing pages, and nested routes for details that grow over time."
	/>
	<MetadataList items={metadata} layout="inline" />
	<DetailSections {sections} />
</ContentPage>
