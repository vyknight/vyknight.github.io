<svelte:head>
	<title>Vyknight</title>
	<meta name="description" content="A new website, built with Svelte." />
</svelte:head>

<main>
	<p class="eyebrow">SvelteKit</p>
	<h1>New site coming soon.</h1>
	<p class="lede">
		This site has been rebuilt from a clean Svelte foundation.
	</p>
</main>

<style>
	:global(*) {
		box-sizing: border-box;
	}

	:global(body) {
		margin: 0;
		min-width: 320px;
		background: #10131a;
		color: #f7f7f2;
		font-family:
			Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI",
			sans-serif;
	}

	main {
		display: grid;
		align-content: center;
		min-height: 100svh;
		max-width: 48rem;
		margin: 0 auto;
		padding: 2rem;
	}

	.eyebrow {
		margin: 0 0 0.75rem;
		color: #9ac4ff;
		font-size: 0.8rem;
		font-weight: 700;
		letter-spacing: 0.14em;
		text-transform: uppercase;
	}

	h1 {
		margin: 0;
		font-size: clamp(2.75rem, 10vw, 6.5rem);
		letter-spacing: -0.06em;
		line-height: 0.95;
	}

	.lede {
		max-width: 34rem;
		margin: 1.5rem 0 0;
		color: #bdc3cf;
		font-size: clamp(1rem, 2vw, 1.25rem);
		line-height: 1.6;
	}
</style>
