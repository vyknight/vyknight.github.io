<script lang="ts">
	import type { DetailSection } from '$lib/types/content';

	let {
		sections
	}: {
		sections: readonly DetailSection[];
	} = $props();
</script>

<div class="detail-sections">
	{#each sections as section}
		<section class="detail-section">
			{#if section.heading}
				<h3>{section.heading}</h3>
			{/if}
			{#if section.paragraphs}
				{#each section.paragraphs as paragraph}
					<p>{paragraph}</p>
				{/each}
			{/if}
			{#if section.bullets}
				<ul>
					{#each section.bullets as bullet}
						<li>{bullet}</li>
					{/each}
				</ul>
			{/if}
		</section>
	{/each}
</div>
