<script lang="ts">
	import {
		ContentHeader,
		ContentPage,
		DetailSections,
		MetadataList
	} from '$lib/components/content';

	const metadata = [
		{ label: 'ROLE', value: 'Design + engineering' },
		{ label: 'STACK', value: 'TypeScript / SVG' },
		{ label: 'STATE', value: 'Open source' }
	];

	const sections = [
		{
			heading: 'Problem',
			paragraphs: ['Most display effects sacrifice selection, accessibility, or clear rendering control.']
		},
		{
			heading: 'Approach',
			paragraphs: ['Rasterize text into a compact grid, build horizontal bar geometry, then animate its reveal.']
		},
		{
			heading: 'Outcome',
			paragraphs: ['The effect works as a framework-agnostic core with a small Svelte integration layer.']
		}
	];
</script>

<ContentPage>
	<ContentHeader
		eyebrow="02.01 — CASE STUDY"
		title="Scanlined"
		summary="An animated text renderer that begins as a field of bars and resolves into selectable, accessible letterforms."
	/>
	<MetadataList items={metadata} layout="inline" />
	<DetailSections {sections} />
</ContentPage>
