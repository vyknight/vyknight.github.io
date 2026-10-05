<script lang="ts">
	import {
		ContentBody,
		ContentHeader,
		ContentPage,
		MetadataList
	} from '$lib/components/content';
	import type { WorkHistoryEntry } from '$lib/data/work-history';
	import type { Snippet } from 'svelte';

	let {
		entry,
		children
	}: {
		entry: WorkHistoryEntry;
		children: Snippet;
	} = $props();
</script>

<ContentPage>
	<ContentHeader eyebrow={`02.${entry.id} — WORK HISTORY`} title={entry.title} />
	<MetadataList items={[{ label: 'ROLE', value: entry.type }]} />
	<ContentBody>
		<section>
			{@render children()}
		</section>
	</ContentBody>
</ContentPage>
