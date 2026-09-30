<script lang="ts">
	import { ContentPage, IndexHeader } from '$lib/components/content';
	import { formatEntryCount } from '$lib/utils/format-entry-count';

	const entryCount = 0;
</script>

<ContentPage>
	<IndexHeader eyebrow="BLOGS" count={formatEntryCount(entryCount)} />
	<p class="index-copy">Long-form writing, essays, and reflections will be collected here.</p>
	<p class="index-copy">Though nothing's here just yet.</p>
</ContentPage>
