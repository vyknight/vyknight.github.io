<script lang="ts">
	import type { ProjectSummary } from '$lib/types/content';

	let {
		project
	}: {
		project: ProjectSummary;
	} = $props();
</script>

{#snippet content()}
	{#if project.id}
		<p class="project-list-item__id">{project.id}</p>
	{/if}
	<div class="project-list-item__title">
		{#if project.type}
			<p class="project-list-item__type">{project.type}</p>
		{/if}
		<h3>{project.title}</h3>
	</div>
	<div
		class:project-list-item__details--centered={!project.stack}
		class="project-list-item__details"
	>
		<p>{project.description}</p>
		{#if project.stack}
			<span>{project.stack}</span>
		{/if}
	</div>
{/snippet}

{#if project.href}
	<a
		class:project-list-item--without-id={!project.id}
		class="project-list-item project-list-item--link"
		href={project.href}
	>
		{@render content()}
	</a>
{:else}
	<article
		class:project-list-item--without-id={!project.id}
		class="project-list-item"
		id={project.anchorId}
	>
		{@render content()}
	</article>
{/if}
