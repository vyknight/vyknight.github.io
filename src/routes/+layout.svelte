<script lang="ts">
	import '../app.css';
	import { onMount } from 'svelte';
	import type { ScanlinedInstance } from 'scanlined';
	import type { ScanlineActionOptions } from 'scanlined/svelte';

	let { children } = $props();
	let wordmarkReady = $state(false);
	let siteReady = $state(false);
	let coordinateTickerReady = $state(false);
	let wordmarkElement: HTMLHeadingElement;
	let headerElement: HTMLElement;
	let coordinateLineOne: HTMLParagraphElement;
	let coordinateLineTwo: HTMLParagraphElement;
	let coordinateLineThree: HTMLParagraphElement;
	let sidebarTop = $state(0);
	const headerScanDelay = 250;
	const headerScanDuration = 1200;
	const coordinateAnimationDuration = 900;
	const coordinateRevealHold = 1400;
	const coordinateCoveredHold = 250;

	// Fictional locations use approximate real-world anchors from their stated regions.
	const coordinateLocations = [
		'54.000  166.500', // Shadow Moses
		'40.580  073.750', // Big Shell
		'40.707  074.010', // Federal Hall
		'19.918  075.160', // Camp Omega
		'34.983  033.750', // Dhekelia SBA Memorial Hospital, Cyprus
		'34.555  069.207', // Northern Kabul, Afghanistan
		'10.750  022.300', // Angola-Zaire border region, Central Africa
		'04.680  055.492', // Seychelles waters
		'12.000  082.000', // Mother Base, Caribbean waters east of Nicaragua
		'10.968  074.781', // Barranquilla Coast, Colombia
		'09.748  083.753', // Costa Rica
		'11.934  085.956', // U.S. missile base, Nicaragua
		'10.500  075.500', // San Hieronymo Peninsula, Colombia
		'38.560  068.770', // Tselinoyarsk
		'50.075  014.438', // Eastern Europe / Prague, Guns of the Patriots
		'33.315  044.366', // Middle East theater, Guns of the Patriots
		'08.783  055.491', // South America theater, Guns of the Patriots
		'37.000  071.000', // Zanzibar Land
		'24.000  029.000', // Outer Heaven
		// 'Now do you remember?', who you are? What you were meant to do?
		'Are you there?'
	] as const;

	const navigation = [
		{
			label: 'About',
			href: '/about',
			items: [
				{ label: 'Introduction', href: '/about' },
				{ label: 'Focus', href: '/overview/focus' }
			]
		},
		{
			label: 'Work',
			href: '/work',
			items: [
				{ label: 'Portfolio system', href: '/work/portfolio-system' },
				{ label: 'In progress', href: '/work/in-progress' }
			]
		},
		{
			label: 'Projects',
			href: '/projects',
			items: [{ label: 'Scanlined', href: '/projects/scanlined' }]
		},
		{
			label: 'Notes',
			href: '/notes',
			items: [
				{ label: 'Working log', href: '/notes/working-log' },
				{ label: 'Architecture', href: '/notes/architecture' }
			]
		},
		{
			label: 'Resume',
			href: '/resume',
			items: []
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
		animation: {
			duration: headerScanDuration,
			stagger: 0,
			direction: 'sweep-right',
			sweepScope: 'glyph'
		}
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
						revealTimer = window.setTimeout(() => instance.reveal(), headerScanDelay);
					});
				});
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

	onMount(() => {
		let destroyed = false;
		const instances: ScanlinedInstance[] = [];
		const pendingDelays = new Map<number, () => void>();
		const coordinateElements = [coordinateLineOne, coordinateLineTwo, coordinateLineThree];

		const wait = (duration: number) =>
			new Promise<boolean>((resolve) => {
				const timer = window.setTimeout(() => {
					pendingDelays.delete(timer);
					resolve(!destroyed);
				}, duration);
				pendingDelays.set(timer, () => resolve(false));
			});

		const chooseCoordinate = (excluded: Set<string>) => {
			const available = coordinateLocations.filter((location) => !excluded.has(location));
			return available[Math.floor(Math.random() * available.length)] ?? coordinateLocations[0];
		};

		const chooseLinesToRefresh = () => {
			const lineIndexes = coordinateElements.map((_, index) => index);
			for (let index = lineIndexes.length - 1; index > 0; index -= 1) {
				const randomIndex = Math.floor(Math.random() * (index + 1));
				[lineIndexes[index], lineIndexes[randomIndex]] = [
					lineIndexes[randomIndex],
					lineIndexes[index]
				];
			}

			const roll = Math.random();
			const refreshCount = roll < 0.15 ? 1 : roll < 0.85 ? 2 : 3;
			return lineIndexes.slice(0, refreshCount);
		};

		const concealCoordinate = async (
			element: HTMLParagraphElement,
			instance: ScanlinedInstance,
			duration: number
		) => {
			const overlays = Array.from(
				element.querySelectorAll<HTMLElement>('.scanlined-cover [aria-hidden="true"]')
			);

			instance.reset();

			if (duration === 0 || overlays.length === 0) return !destroyed;

			const coveredFrames = overlays.map((overlay) => ({
				left: overlay.style.left,
				width: overlay.style.width
			}));
			const animations = overlays.map((overlay, index) =>
				overlay.animate(
					[
						{ left: coveredFrames[index].left, width: '0px' },
						coveredFrames[index]
					],
					{
						duration,
						easing: 'cubic-bezier(0.65, 0, 0.35, 1)'
					}
				)
			);

			await Promise.allSettled(animations.map((animation) => animation.finished));
			return !destroyed;
		};

		void (async () => {
			let currentCoordinates: string[] = [];

			try {
				await document.fonts?.load('600 12px "IBM Plex Mono"');
				const { createScanlined } = await import('scanlined');
				const animationDuration = coordinateAnimationDuration;

				for (const element of coordinateElements) {
					const coordinate = chooseCoordinate(new Set(currentCoordinates));
					currentCoordinates.push(coordinate);
					element.textContent = '';

					const instance = await createScanlined(element, {
						text: coordinate,
						mode: 'cover',
						font: 'IBM Plex Mono',
						fontWeight: 600,
						color: '#0f62fe',
						trigger: 'manual',
						animation: {
							duration: animationDuration,
							stagger: 0,
							direction: 'sweep-right',
							sweepScope: 'line'
						}
					});

					if (destroyed) {
						instance.destroy();
						return;
					}

					instances.push(instance);
				}

				coordinateTickerReady = true;

				while (!siteReady) {
					if (!(await wait(50))) return;
				}
				if (!(await wait(headerScanDelay))) return;

				while (!destroyed) {
					const activeLines = chooseLinesToRefresh();
					activeLines.forEach((lineIndex) => instances[lineIndex].reveal());
					if (!(await wait(animationDuration + coordinateRevealHold))) return;

					if (
						!(
							await Promise.all(
								activeLines.map((lineIndex) =>
									concealCoordinate(
										coordinateElements[lineIndex],
										instances[lineIndex],
										animationDuration
									)
								)
							)
						).every(Boolean)
					)
						return;
					if (!(await wait(50))) return;

					const excludedCoordinates = new Set(currentCoordinates);
					const nextCoordinates = activeLines.map(() => {
						const coordinate = chooseCoordinate(excludedCoordinates);
						excludedCoordinates.add(coordinate);
						return coordinate;
					});

					await Promise.all(
						activeLines.map((lineIndex, index) =>
							instances[lineIndex].update({ text: nextCoordinates[index] })
						)
					);
					activeLines.forEach((lineIndex, index) => {
						currentCoordinates[lineIndex] = nextCoordinates[index];
					});

					if (!(await wait(coordinateCoveredHold))) return;
				}
			} catch {
				if (destroyed) return;
				instances.forEach((instance) => instance.destroy());
				coordinateElements.forEach((element, index) => {
					element.textContent = coordinateLocations[index];
				});
				coordinateTickerReady = true;
			}
		})();

		return () => {
			destroyed = true;
			for (const [timer, cancel] of pendingDelays) {
				window.clearTimeout(timer);
				cancel();
			}
			pendingDelays.clear();
			instances.forEach((instance) => instance.destroy());
		};
	});
</script>

<svelte:head>
	<title>Zekun Liu - Portfolio</title>
</svelte:head>

<div
	class:site-ready={siteReady}
	class="site-shell"
	style={`--sidebar-top: ${sidebarTop}px; --header-scan-delay: ${headerScanDelay}ms; --header-scan-duration: ${headerScanDuration}ms`}
>
	<header class="site-header" bind:this={headerElement}>
		<h1 class:wordmark-loading={!wordmarkReady} class="wordmark" bind:this={wordmarkElement}>
			刘ZEKUN
		</h1>
		<div
			class:coordinate-ticker-ready={coordinateTickerReady}
			class="header-coordinates"
			aria-hidden="true"
		>
			<p class="header-coordinate" bind:this={coordinateLineOne}></p>
			<p class="header-coordinate" bind:this={coordinateLineTwo}></p>
			<p class="header-coordinate" bind:this={coordinateLineThree}></p>
		</div>
	</header>

	<div class="app-layout">
		<aside class="sidebar" aria-label="Portfolio navigation">
			<div>
				<a class="home-link" href="/">Home</a>
				<nav class="directory-nav">
					{#each navigation as item}
						<div class="directory-item">
							<a class="directory-link" href={item.href}>
								{item.label}
							</a>
							{#if item.items.length > 0}
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
							{/if}
						</div>
					{/each}
				</nav>
			</div>

			<div class="sidebar-meta">
				<p class="section-label">Contacts</p>
				<dl>
					<!-- <div><dt>STATUS</dt><dd>AVAILABLE</dd></div> -->
					<!-- <div><dt>STACK</dt><dd>SVELTE / TS</dd></div> -->
					<!-- <div><dt>BUILD</dt><dd>STATIC</dd></div> -->
					<div>
						<dd>
							<a href="https://github.com/vyknight" rel="noreferrer" target="_blank">GITHUB</a>
						</dd>
					</div>
					<div>
						<dd>
							<a
								href="https://www.linkedin.com/in/matthewzekunliu/"
								rel="noreferrer"
								target="_blank">LINKEDIN</a
							>
						</dd>
					</div>
				</dl>
			</div>
		</aside>

		<main class="main-content">
			{@render children()}
		</main>
	</div>
</div>
