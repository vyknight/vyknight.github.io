<svelte:head>
	<title>Vyknight — Scanlined</title>
</svelte:head>

<section class="content-section">
	<p class="path">~/work/scanlined</p>
	<p class="kicker">02.01 — CASE STUDY</p>
	<h2>Scanlined</h2>
	<p class="detail-summary">
		An animated text renderer that begins as a field of bars and resolves into selectable,
		accessible letterforms.
	</p>

	<dl class="detail-meta">
		<div><dt>ROLE</dt><dd>Design + engineering</dd></div>
		<div><dt>STACK</dt><dd>TypeScript / SVG</dd></div>
		<div><dt>STATE</dt><dd>Open source</dd></div>
	</dl>

	<div class="detail-grid">
		<div class="detail-block">
			<h3>Problem</h3>
			<p>Most display effects sacrifice selection, accessibility, or clear rendering control.</p>
		</div>
		<div class="detail-block">
			<h3>Approach</h3>
			<p>Rasterize text into a compact grid, build horizontal bar geometry, then animate its reveal.</p>
		</div>
		<div class="detail-block">
			<h3>Outcome</h3>
			<p>The effect works as a framework-agnostic core with a small Svelte integration layer.</p>
		</div>
	</div>
</section>
