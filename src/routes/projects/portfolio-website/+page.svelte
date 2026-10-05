<script lang="ts">
	import {
		ContentBody,
		ContentHeader,
		ContentPage,
		MetadataList
	} from '$lib/components/content';

	const metadata = [
		{ label: 'ROLE', value: 'Design + engineering' },
		{ label: 'STACK', value: 'TypeScript / SVG' },
		{ label: 'STATE', value: 'Open source' }
	];

</script>

<ContentPage>
	<ContentHeader
		eyebrow="02.01 — CASE STUDY"
		title="BORTFOLIO"
		summary="An animated text renderer that begins as a field of bars and resolves into selectable, accessible letterforms."
	/>
	<MetadataList items={metadata} layout="inline" />
	<ContentBody>
		<section>
			<h3>Problem</h3>
			<p>Most display effects sacrifice selection, accessibility, or clear rendering control.</p>
		</section>
		<section>
			<h3>Approach</h3>
			<p>Rasterize text into a compact grid, build horizontal bar geometry, then animate its reveal.</p>
		</section>
		<section>
			<h3>Outcome</h3>
			<p>The effect works as a framework-agnostic core with a small Svelte integration layer.</p>
		</section>
	</ContentBody>
</ContentPage>
