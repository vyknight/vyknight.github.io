<script lang="ts">
	import {
		ContentBody,
		ContentHeader,
		ContentPage,
		MetadataList
	} from '$lib/components/content';

	const metadata = [
		{ label: 'FORMAT', value: 'Decision record' },
		{ label: 'AUDIENCE', value: 'Future maintainers' },
		{ label: 'SCOPE', value: 'One decision' }
	];

</script>

<ContentPage>
	<ContentHeader
		eyebrow="03.02 — ARCHITECTURE"
		title="Decisions that shape the system."
		summary="Architecture notes explain the constraints and tradeoffs behind a system so future changes have useful context."
	/>
	<MetadataList items={metadata} layout="inline" />
	<ContentBody>
		<section>
			<h3>Context</h3>
			<p>State the problem, its constraints, and the alternatives that were realistically available.</p>
		</section>
		<section>
			<h3>Decision</h3>
			<p>Record what was chosen, why it was chosen, and what consequences it introduces.</p>
		</section>
	</ContentBody>
</ContentPage>
