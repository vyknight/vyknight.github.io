<script lang="ts">
	import {
		ContentHeader,
		ContentPage,
		DetailSections,
		MetadataList
	} from '$lib/components/content';

	const metadata = [
		{ label: 'FORMAT', value: 'Decision record' },
		{ label: 'AUDIENCE', value: 'Future maintainers' },
		{ label: 'SCOPE', value: 'One decision' }
	];

	const sections = [
		{
			heading: 'Context',
			paragraphs: ['State the problem, its constraints, and the alternatives that were realistically available.']
		},
		{
			heading: 'Decision',
			paragraphs: ['Record what was chosen, why it was chosen, and what consequences it introduces.']
		}
	];
</script>

<ContentPage>
	<ContentHeader
		eyebrow="03.02 — ARCHITECTURE"
		title="Decisions that shape the system."
		summary="Architecture notes explain the constraints and tradeoffs behind a system so future changes have useful context."
	/>
	<MetadataList items={metadata} layout="inline" />
	<DetailSections {sections} />
</ContentPage>
