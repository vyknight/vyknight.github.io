<script lang="ts">
	import { ContentHeader, ContentPage, DetailSections } from '$lib/components/content';

	const sections = [
		{
			heading: 'Current themes',
			bullets: [
				'Legible technical interfaces',
				'Small tools with clear constraints',
				'Documentation as a product surface'
			]
		},
		{
			heading: 'Related work',
			paragraphs: ['Link outward to concrete projects, notes, experiments, or a chronological working log.']
		}
	];
</script>

<ContentPage>
	<ContentHeader
		eyebrow="01.02 — FOCUS"
		title="Make complex systems easier to read."
		summary="A focused overview page can capture an ongoing area of interest without needing to become a full project case study."
	/>
	<DetailSections {sections} />
</ContentPage>
