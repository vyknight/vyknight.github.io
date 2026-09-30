<script lang="ts">
	import type { DetailParagraph, DetailSection } from '$lib/types/content';

	let {
		sections
	}: {
		sections: readonly DetailSection[];
	} = $props();
</script>

{#snippet renderParagraph(paragraph: DetailParagraph)}
	{#if typeof paragraph === 'string'}
		<p>{paragraph}</p>
	{:else}
		<p>
			{#each paragraph as segment}
				{#if segment.href}
					<a href={segment.href}>{segment.text}</a>
				{:else}
					{segment.text}
				{/if}
			{/each}
		</p>
	{/if}
{/snippet}

<div class="detail-sections">
	{#each sections as section}
		<section class="detail-section">
			{#if section.heading}
				<h3>{section.heading}</h3>
			{/if}
			{#if section.paragraphs}
				{#each section.paragraphs as paragraph}
					{@render renderParagraph(paragraph)}
				{/each}
			{/if}
			{#if section.bullets}
				<ul>
					{#each section.bullets as bullet}
						<li>{bullet}</li>
					{/each}
				</ul>
			{/if}
			{#if section.paragraphsAfterBullets}
				{#each section.paragraphsAfterBullets as paragraph}
					{@render renderParagraph(paragraph)}
				{/each}
			{/if}
		</section>
	{/each}
</div>
