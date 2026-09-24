<svelte:head>
	<title>Vyknight — Portfolio System</title>
</svelte:head>

<section class="content-section">
	<p class="path">~/work/portfolio-system</p>
	<p class="kicker">02.02 — CASE STUDY</p>
	<h2>Portfolio system</h2>
	<p class="detail-summary">
		This site is structured as a durable technical index: a persistent shell, category landing
		pages, and nested routes for details that grow over time.
	</p>

	<dl class="detail-meta">
		<div><dt>TYPE</dt><dd>Static website</dd></div>
		<div><dt>STACK</dt><dd>SvelteKit</dd></div>
		<div><dt>DEPLOY</dt><dd>GitHub Pages</dd></div>
	</dl>

	<div class="detail-grid">
		<div class="detail-block">
			<h3>Structure</h3>
			<p>Header and directory live in the root layout; content routes can evolve independently.</p>
		</div>
		<div class="detail-block">
			<h3>Navigation</h3>
			<p>Top-level pages are categories, while the accordion exposes their child documents.</p>
		</div>
	</div>
</section>
