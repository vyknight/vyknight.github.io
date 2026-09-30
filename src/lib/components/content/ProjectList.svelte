<script lang="ts">
	import ProjectListItem from './ProjectListItem.svelte';
	import type { ProjectSummary } from '$lib/types/content';

	let {
		projects
	}: {
		projects: readonly ProjectSummary[];
	} = $props();
</script>

<div class="project-list">
	{#each projects as project}
		<ProjectListItem {project} />
	{/each}
</div>
