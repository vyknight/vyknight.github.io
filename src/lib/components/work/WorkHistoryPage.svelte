<script lang="ts">
	import {
		ContentHeader,
		ContentPage,
		DetailSections,
		MetadataList
	} from '$lib/components/content';
	import type { WorkHistoryEntry } from '$lib/data/work-history';

	let {
		entry
	}: {
		entry: WorkHistoryEntry;
	} = $props();
</script>

<ContentPage>
	<ContentHeader eyebrow={`02.${entry.id} — WORK HISTORY`} title={entry.title} />
	<MetadataList items={[{ label: 'ROLE', value: entry.type }]} />
	<DetailSections sections={[{ paragraphs: [entry.description] }]} />
</ContentPage>
