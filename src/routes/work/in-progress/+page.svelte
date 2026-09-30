<script lang="ts">
	import { ContentHeader, ContentPage, DetailSections } from '$lib/components/content';

	const sections = [
		{
			heading: 'Question',
			paragraphs: ['What is being explored, and what would make the experiment worthwhile?']
		},
		{
			heading: 'Next signal',
			paragraphs: ['Capture the next decision, prototype, or result that determines whether it graduates.']
		}
	];
</script>

<ContentPage>
	<ContentHeader
		eyebrow="02.03 — IN PROGRESS"
		title="Reserved for work still taking shape."
		summary="Use this page pattern for early work: enough context to explain the direction, without prematurely turning an unfinished experiment into a polished case study."
	/>
	<DetailSections {sections} />
</ContentPage>
