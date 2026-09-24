<script lang="ts">
	const projects = [
		{
			id: '01',
			title: 'Scanlined',
			type: 'Open-source library',
			description:
				'An animated text renderer that turns glyphs into selectable scanline blocks for the web.',
			stack: 'TypeScript · SVG · Svelte action'
		},
		{
			id: '02',
			title: 'This portfolio',
			type: 'Web system',
			description:
				'A deliberately small SvelteKit site designed as a living index of technical work.',
			stack: 'SvelteKit · Static export · GitHub Pages'
		},
		{
			id: '03',
			title: 'Next entry',
			type: 'In progress',
			description:
				'Reserve this slot for a case study, experiment, or system worth documenting in full.',
			stack: 'Add project metadata'
		}
	];
</script>

<svelte:head>
	<title>Vyknight — Selected Work</title>
</svelte:head>

<section class="content-section">
	<div class="section-heading">
		<p class="kicker">02 — SELECTED WORK</p>
		<p class="count">03 ENTRIES</p>
	</div>

	<div class="project-list">
		{#each projects as project}
			<article
				class="project"
				id={project.id === '01'
					? 'scanlined'
					: project.id === '02'
						? 'portfolio-system'
						: 'in-progress'}
			>
				<p class="project-id">{project.id}</p>
				<div>
					<p class="project-type">{project.type}</p>
					<h3>{project.title}</h3>
				</div>
				<div class="project-detail">
					<p>{project.description}</p>
					<span>{project.stack}</span>
				</div>
			</article>
		{/each}
	</div>
</section>
