<script lang="ts">
	import { ContentHeader, ContentPage, DetailSections } from '$lib/components/content';

	const sections = [
		{
			heading: 'Entry format',
			paragraphs: ['Date, a concise observation, the context that produced it, and links to related work.']
		},
		{
			heading: 'Examples',
			bullets: [
				'Why a layout decision changed',
				'A useful implementation constraint',
				'A compact debugging record'
			]
		}
	];
</script>

<ContentPage>
	<ContentHeader
		eyebrow="03.01 — WORKING LOG"
		title="Small observations, kept close to the work."
		summary="A running log is useful for short findings that are too specific for a project page but worth retrieving later."
	/>
	<DetailSections {sections} />
</ContentPage>
