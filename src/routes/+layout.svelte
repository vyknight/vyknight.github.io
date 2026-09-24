<script lang="ts">
	import '../app.css';
	import { onMount } from 'svelte';
	import type { ScanlineActionOptions } from 'scanlined/svelte';

	let { children } = $props();
	let wordmarkReady = $state(false);
	let siteReady = $state(false);
	let wordmarkElement: HTMLHeadingElement;
	let headerElement: HTMLElement;
	let sidebarTop = $state(0);

	const navigation = [
		{
			id: '01',
			label: 'Overview',
			href: '/',
			items: [
				{ label: 'Introduction', href: '/overview/introduction' },
				{ label: 'Focus', href: '/overview/focus' }
			]
		},
		{
			id: '02',
			label: 'Selected work',
			href: '/work',
			items: [
				{ label: 'Scanlined', href: '/work/scanlined' },
				{ label: 'Portfolio system', href: '/work/portfolio-system' },
				{ label: 'In progress', href: '/work/in-progress' }
			]
		},
		{
			id: '03',
			label: 'Notes',
			href: '/notes',
			items: [
				{ label: 'Working log', href: '/notes/working-log' },
				{ label: 'Architecture', href: '/notes/architecture' }
			]
		},
		{
			id: '04',
			label: 'Contact',
			href: '/contact',
			items: [
				{ label: 'GitHub', href: 'https://github.com/vyknight' },
				{ label: 'LinkedIn', href: 'https://www.linkedin.com/in/matthewzekunliu/' }
			]
		}
	];

	const wordmark = {
		font: 'IBM Plex Mono',
		fontWeight: 700,
		pixelHeight: 136,
		color: '#0f62fe',
		glyphSpacing: 0,
		trigger: 'manual',
		raster: { resolution: 13, threshold: 0.5, blockFit: 'advance' },
		animation: { duration: 1800, stagger: 0, direction: 'sweep-right', sweepScope: 'glyph' }
	} satisfies ScanlineActionOptions;

	onMount(() => {
		const updateHeaderPosition = () => {
			sidebarTop = Math.max(0, headerElement.getBoundingClientRect().bottom);
		};
		const observer = new ResizeObserver(updateHeaderPosition);
		observer.observe(headerElement);
		window.addEventListener('scroll', updateHeaderPosition, { passive: true });
		updateHeaderPosition();

		return () => {
			observer.disconnect();
			window.removeEventListener('scroll', updateHeaderPosition);
		};
	});

	onMount(() => {
		let destroyed = false;
		let cleanup: (() => void) | undefined;
		let revealTimer: number | undefined;
		let readyFrame: number | undefined;
		let settledFrame: number | undefined;

		void (async () => {
			try {
				await document.fonts?.load('700 136px "IBM Plex Mono"');
				const { createScanlined } = await import('scanlined');
				const instance = await createScanlined(wordmarkElement, {
					text: wordmarkElement.textContent ?? '',
					...wordmark,
					trigger: 'manual'
				});

				if (destroyed) {
					instance.destroy();
					return;
				}

				cleanup = instance.destroy;
				wordmarkReady = true;
				readyFrame = requestAnimationFrame(() => {
					settledFrame = requestAnimationFrame(() => {
						siteReady = true;
					});
				});
				revealTimer = window.setTimeout(() => instance.reveal(), 750);
			} catch {
				// Keep the readable text fallback when enhancement is unavailable.
				siteReady = true;
			}
		})();

		return () => {
			destroyed = true;
			if (revealTimer) window.clearTimeout(revealTimer);
			if (readyFrame) cancelAnimationFrame(readyFrame);
			if (settledFrame) cancelAnimationFrame(settledFrame);
			cleanup?.();
		};
	});
</script>

<div class:site-ready={siteReady} class="site-shell" style={`--sidebar-top: ${sidebarTop}px`}>
	<header class="site-header" bind:this={headerElement}>
		<h1 class:wordmark-loading={!wordmarkReady} class="wordmark" bind:this={wordmarkElement}>
			刘ZEKUN
		</h1>
	</header>

	<div class="app-layout">
		<aside class="sidebar" aria-label="Portfolio navigation">
			<div>
				<a class="home-link" href="/">Home</a>
				<nav class="directory-nav">
					{#each navigation as item}
						<div class="directory-item">
							<a class="directory-link" href={item.href}>
								<span>{item.id}</span>
								{item.label}
							</a>
							<div class="directory-panel">
								<div class="directory-panel-inner">
									{#each item.items as child}
										<a
											class="directory-child"
											href={child.href}
											rel={child.href.startsWith('http') ? 'noreferrer' : undefined}
											target={child.href.startsWith('http') ? '_blank' : undefined}
										>
											{child.label}
										</a>
									{/each}
								</div>
							</div>
						</div>
					{/each}
				</nav>
			</div>

			<div class="sidebar-meta">
				<p class="section-label">System</p>
				<dl>
					<div><dt>STATUS</dt><dd>AVAILABLE</dd></div>
					<div><dt>STACK</dt><dd>SVELTE / TS</dd></div>
					<div><dt>BUILD</dt><dd>STATIC</dd></div>
				</dl>
			</div>
		</aside>

		<main class="main-content">
			{@render children()}
		</main>
	</div>
</div>
