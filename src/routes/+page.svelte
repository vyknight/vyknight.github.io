<script lang="ts">
	import { onMount } from 'svelte';
	import type { ScanlineActionOptions } from 'scanlined/svelte';

	let wordmarkReady = false;
	let wordmarkElement: HTMLHeadingElement;

	onMount(() => {
		let destroyed = false;
		let cleanup: (() => void) | undefined;

		void (async () => {
			try {
				await document.fonts?.load('700 136px "IBM Plex Mono"');
			} catch {
				// The renderer falls back to the local monospace stack if the web font is unavailable.
			}

			try {
				const { scanline } = await import('scanlined/svelte');

				if (!destroyed) {
					cleanup = scanline(wordmarkElement, wordmark).destroy;
					wordmarkReady = true;
				}
			} catch {
				// Keep the readable text fallback when enhancement is unavailable.
			}
		})();

		return () => {
			destroyed = true;
			cleanup?.();
		};
	});

	const wordmark = {
		font: 'IBM Plex Mono',
		fontWeight: 700,
		pixelHeight: 136,
		color: '#0f62fe',
		glyphSpacing: 0,
		trigger: 'viewport',
		raster: {
			resolution: 13,
			threshold: 0.5,
			blockFit: 'advance'
		},
		animation: {
			duration: 1800,
			stagger: 0,
			direction: 'sweep-right',
			sweepScope: 'glyph'
		}
	} satisfies ScanlineActionOptions;

	const navigation = [
		{ id: '01', label: 'Overview', href: '#overview' },
		{ id: '02', label: 'Selected work', href: '#work' },
		{ id: '03', label: 'Notes', href: '#notes' },
		{ id: '04', label: 'Contact', href: '#contact' }
	];

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
	<title>Vyknight — Technical Portfolio</title>
	<meta
		name="description"
		content="A technical portfolio of software, systems, and experiments by Vyknight."
	/>
</svelte:head>

<div class="site-shell">
	<header class="site-header">
		<h1 class:wordmark-loading={!wordmarkReady} class="wordmark" bind:this={wordmarkElement}>
			刘ZEKUN
		</h1>
	</header>

	<div class="layout">
		<aside class="sidebar" aria-label="Portfolio navigation">
			<div>
				<p class="section-label">Directory</p>
				<nav>
					{#each navigation as item}
						<a href={item.href}>
							<span>{item.id}</span>
							{item.label}
						</a>
					{/each}
				</nav>
			</div>

			<div class="sidebar-meta">
				<p class="section-label">System</p>
				<dl>
					<div>
						<dt>STATUS</dt>
						<dd>AVAILABLE</dd>
					</div>
					<div>
						<dt>STACK</dt>
						<dd>SVELTE / TS</dd>
					</div>
					<div>
						<dt>BUILD</dt>
						<dd>STATIC</dd>
					</div>
				</dl>
			</div>
		</aside>

		<main>
			<section class="intro" id="overview">
				<p class="path">~/portfolio/overview</p>
				<p class="kicker">01 — INTRODUCTION</p>
				<h2>Software, systems,<br />and the details between.</h2>
				<p class="lede">
					A minimal record of technical work: tools built, problems untangled, and experiments
					worth keeping close.
				</p>

				<div class="summary-grid">
					<div>
						<span>FOCUS</span>
						<p>Interfaces that make complex systems feel legible.</p>
					</div>
					<div>
						<span>FORMAT</span>
						<p>Case studies, source notes, and small useful artifacts.</p>
					</div>
				</div>
			</section>

			<section class="content-section" id="work">
				<div class="section-heading">
					<p class="kicker">02 — SELECTED WORK</p>
					<p class="count">03 ENTRIES</p>
				</div>

				<div class="project-list">
					{#each projects as project}
						<article class="project">
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

			<section class="content-section notes" id="notes">
				<div class="section-heading">
					<p class="kicker">03 — NOTES</p>
					<p class="count">WORKING LOG</p>
				</div>
				<p class="note-copy">
					This section is reserved for short technical notes: architecture decisions, debugging
					trails, and lessons that do not need a full case study.
				</p>
				<a class="text-link" href="#contact">View contact endpoint <span>→</span></a>
			</section>

			<section class="contact" id="contact">
				<p class="kicker">04 — CONTACT</p>
				<h2>Have a system<br />worth discussing?</h2>
				<a class="contact-link" href="https://github.com/vyknight" rel="noreferrer" target="_blank">
					GITHUB.COM/VYKNIGHT <span>↗</span>
				</a>
			</section>
		</main>
	</div>
</div>

<style>
	:global(*) {
		box-sizing: border-box;
		border-radius: 0;
	}

	:global(html) {
		scroll-behavior: smooth;
	}

	:global(body) {
		margin: 0;
		min-width: 320px;
		background: #fff;
		color: #000;
		font-family:
			"IBM Plex Mono", ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
	}

	:global(a) {
		color: inherit;
	}

	.site-shell {
		width: min(100%, 100rem);
		margin: 0 auto;
		background: #fff;
		border-inline: 1px solid #000;
	}

	.site-header {
		padding: clamp(1.5rem, 3vw, 2.5rem) 1.25rem 0;
		border-bottom: 1px solid #000;
	}

	.section-heading,
	.summary-grid,
	.sidebar-meta div {
		display: flex;
		justify-content: space-between;
		gap: 1rem;
	}

	.section-label,
	.path,
	.kicker,
	.count,
	.project-id,
	.project-type,
	.summary-grid span,
	.sidebar-meta dt,
	.sidebar-meta dd {
		margin: 0;
		font-size: 0.6875rem;
		letter-spacing: 0.06em;
		line-height: 1.4;
		text-transform: uppercase;
	}

	.wordmark {
		display: block;
		width: min(33.333vw, 100%);
		max-width: 100%;
		margin: 0 0 clamp(1.5rem, 3vw, 2.5rem);
		color: #0f62fe;
		font-size: 1px;
		line-height: 0;
	}

	.wordmark :global(svg) {
		display: block;
		width: 100%;
		max-width: 100%;
		height: auto;
	}

	.wordmark-loading {
		font-size: clamp(2.5rem, 10vw, 8rem);
		font-weight: 700;
		letter-spacing: -0.1em;
		line-height: 0.75;
	}

	.layout {
		display: grid;
		grid-template-columns: 15rem minmax(0, 1fr);
	}

	.sidebar {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		min-height: calc(100svh - 12rem);
		padding: 1.5rem 1.25rem;
		border-right: 1px solid #000;
	}

	.section-label,
	.kicker,
	.project-type,
	.summary-grid span,
	.sidebar-meta dt {
		color: #0f62fe;
	}

	nav {
		margin-top: 1rem;
		border-top: 1px solid #000;
	}

	nav a {
		display: flex;
		gap: 1rem;
		padding: 0.75rem 0;
		border-bottom: 1px solid #000;
		font-size: 0.8125rem;
		text-decoration: none;
	}

	nav a span,
	.project-id {
		color: #0f62fe;
	}

	nav a:hover,
	.text-link:hover,
	.contact-link:hover {
		color: #0f62fe;
	}

	.sidebar-meta {
		margin-top: 4rem;
	}

	.sidebar-meta dl {
		margin: 1rem 0 0;
		border-top: 1px solid #000;
	}

	.sidebar-meta div {
		padding: 0.65rem 0;
		border-bottom: 1px solid #000;
	}

	.sidebar-meta dd {
		font-weight: 600;
	}

	main {
		min-width: 0;
	}

	.intro,
	.content-section,
	.contact {
		padding: clamp(2.5rem, 6vw, 6rem);
		border-bottom: 1px solid #000;
		scroll-margin-top: 1rem;
	}

	.path {
		display: inline-block;
		margin-bottom: clamp(3.5rem, 9vw, 8rem);
		padding: 0.4rem 0.55rem;
		background: #000;
		color: #fff;
	}

	.kicker {
		margin: 0 0 1rem;
	}

	h2,
	h3,
	p {
		margin-top: 0;
	}

	h2 {
		max-width: 12ch;
		margin-bottom: 1.5rem;
		font-size: clamp(2rem, 5vw, 4.5rem);
		font-weight: 500;
		letter-spacing: -0.075em;
		line-height: 0.95;
	}

	.lede {
		max-width: 45rem;
		margin: 0;
		font-size: clamp(1rem, 1.7vw, 1.25rem);
		line-height: 1.65;
	}

	.summary-grid {
		max-width: 45rem;
		margin-top: 4rem;
		border-top: 1px solid #000;
	}

	.summary-grid div {
		flex: 1;
		padding-top: 0.75rem;
	}

	.summary-grid p {
		margin: 0.75rem 0 0;
		font-size: 0.8125rem;
		line-height: 1.65;
	}

	.section-heading {
		align-items: baseline;
		padding-bottom: 1rem;
		border-bottom: 1px solid #000;
	}

	.count {
		color: #0f62fe;
	}

	.project-list {
		border-bottom: 1px solid #000;
	}

	.project {
		display: grid;
		grid-template-columns: 3rem minmax(9rem, 0.8fr) minmax(15rem, 1.2fr);
		gap: 1rem;
		padding: 1.5rem 0;
		border-bottom: 1px solid #000;
	}

	.project h3 {
		margin: 0;
		font-size: clamp(1.25rem, 2.4vw, 2rem);
		font-weight: 500;
		letter-spacing: -0.06em;
		line-height: 1;
	}

	.project-detail p {
		max-width: 34rem;
		margin: 0;
		font-size: 0.8125rem;
		line-height: 1.7;
	}

	.project-detail span {
		display: block;
		margin-top: 1rem;
		color: #0f62fe;
		font-size: 0.6875rem;
		line-height: 1.5;
	}

	.notes {
		background: #fff;
	}

	.note-copy {
		max-width: 39rem;
		margin: 2rem 0;
		font-size: 0.875rem;
		line-height: 1.75;
	}

	.text-link,
	.contact-link {
		display: inline-flex;
		justify-content: space-between;
		gap: 3rem;
		padding: 0.75rem 0;
		border-bottom: 1px solid currentColor;
		font-size: 0.8125rem;
		font-weight: 600;
		text-decoration: none;
	}

	.contact {
		background: #000;
		color: #fff;
	}

	.contact .kicker {
		color: #0f62fe;
	}

	.contact h2 {
		margin-bottom: 3rem;
	}

	.contact-link {
		color: #0f62fe;
	}

	@media (max-width: 52rem) {
		.site-shell {
			border-inline: 0;
		}

		.layout {
			display: block;
		}

		.sidebar {
			display: block;
			min-height: auto;
			padding: 1.25rem;
			border-right: 0;
			border-bottom: 1px solid #000;
		}

		.sidebar-meta {
			display: none;
		}

		nav {
			display: grid;
			grid-template-columns: repeat(2, minmax(0, 1fr));
		}

		nav a {
			padding-right: 0.75rem;
			border-right: 1px solid #000;
		}

		nav a:nth-child(even) {
			padding-left: 0.75rem;
			border-right: 0;
		}

		.project {
			grid-template-columns: 2.5rem 1fr;
		}

		.project-detail {
			grid-column: 2;
			margin-top: 1.25rem;
		}
	}

	@media (max-width: 34rem) {
		.summary-grid {
			display: block;
		}

		.summary-grid div + div {
			margin-top: 1.5rem;
		}

		.intro,
		.content-section,
		.contact {
			padding: 2.5rem 1.25rem;
		}
	}
</style>
