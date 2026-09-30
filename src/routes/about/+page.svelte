<script lang="ts">
	import {
		ContentHeader,
		ContentPage,
		DetailSections,
		MetadataList
	} from '$lib/components/content';

	const metadata = [
		{ label: 'CREATED', value: 'AUTUMN 2026' },
		{ label: 'UPDATED', value: 'AUTUMN 2026' }
	];

	const sections = [
		{
			paragraphs: [
				'This is the portfolio website for Zekun Liu, I also go by Matthew Liu at times.',
				'Here you\'ll find information pertaining to my career as a software engineer. Detailed breakdowns of my technical projects, vague descriptions of my professional work, and my resume, and my blog, and whatnot will be found to the bar to your left.'
			]
		},
	];
</script>

<ContentPage>
	<ContentHeader
		eyebrow="01.01 — START HERE"
		title="THIS WEBSITE"
		// summary="This page is an example of a nested overview entry: concise context first, followed by the specific principles, artifacts, or decisions that support it."
	/>
	<MetadataList items={metadata} layout="row" />
	<DetailSections {sections} />
</ContentPage>
