<script lang="ts">
	import type { Snippet } from 'svelte';

	let {
		children,
		id
	}: {
		children: Snippet;
		id?: string;
	} = $props();
</script>

<section class="content-page" {id}>
	{@render children()}
</section>
