<script lang="ts">
	import type { MetadataItem, MetadataLayout } from '$lib/types/content';

	let {
		items,
		layout = 'row'
	}: {
		items: readonly MetadataItem[];
		layout?: MetadataLayout;
	} = $props();
</script>

<dl
	class:metadata-list--inline={layout === 'inline'}
	class:metadata-list--row={layout === 'row'}
	class="metadata-list"
>
	{#each items as item}
		<div class="metadata-list__item">
			<dt>{item.label}</dt>
			<dd>{item.value}</dd>
		</div>
	{/each}
</dl>
