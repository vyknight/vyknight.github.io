<script lang="ts">
	let {
		eyebrow,
		count
	}: {
		eyebrow: string;
		count: string;
	} = $props();
</script>

<div class="index-header">
	<p class="content-eyebrow">{eyebrow}</p>
	<p class="entry-count">{count}</p>
</div>
