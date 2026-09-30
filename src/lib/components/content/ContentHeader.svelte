<script lang="ts">
	let {
		eyebrow,
		title,
		summary
	}: {
		eyebrow: string;
		title: string;
		summary?: string;
	} = $props();
</script>

<p class="content-eyebrow">{eyebrow}</p>
<h2 class="content-title">{title}</h2>
{#if summary}
	<p class="content-summary">{summary}</p>
{/if}
