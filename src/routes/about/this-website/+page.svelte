<script lang="ts">
	import {
		ContentBody,
		ContentHeader,
		ContentPage,
		MetadataList
	} from '$lib/components/content';

	const metadata = [
		{ label: 'CREATED', value: 'AUTUMN 2026' },
		{ label: 'UPDATED', value: 'AUTUMN 2026' }
	];
</script>

<ContentPage>
	<ContentHeader
		eyebrow="01.01 — ABOUT THIS WEBSITE"
		title="THIS WEBSITE"
		// summary="This page is an example of a nested overview entry: concise context first, followed by the specific principles, artifacts, or decisions that support it."
	/>
	<MetadataList items={metadata} />
	<ContentBody>
		<section>
			<p>This is the portfolio website for Zekun Liu, I also go by Matthew Liu at times.</p>
			<p>
				Here you'll find information pertaining to my career as a software engineer. Detailed
				breakdowns of my technical projects, vague descriptions of my professional work, and my
				resume, and my blog, and whatnot will be found on the bar to your left.
			</p>
			<p>
				This website is built with SvelteKit, the font is IBM Plex Mono, and I stole the colour
				pallet from IBM as well. A more detailed breakdown of this website can be found under
				<a href="/projects/portfolio-website">/projects</a>.
			</p>
		</section>
	</ContentBody>
</ContentPage>
