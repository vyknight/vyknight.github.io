<script lang="ts">
	import type { ProjectSummary } from '$lib/types/content';

	let {
		project
	}: {
		project: ProjectSummary;
	} = $props();
</script>

{#snippet content()}
	<p class="project-list-item__id">{project.id}</p>
	<div>
		<p class="project-list-item__type">{project.type}</p>
		<h3>{project.title}</h3>
	</div>
	<div class="project-list-item__details">
		<p>{project.description}</p>
		<span>{project.stack}</span>
	</div>
{/snippet}

{#if project.href}
	<a class="project-list-item project-list-item--link" href={project.href}>
		{@render content()}
	</a>
{:else}
	<article class="project-list-item" id={project.anchorId}>
		{@render content()}
	</article>
{/if}
