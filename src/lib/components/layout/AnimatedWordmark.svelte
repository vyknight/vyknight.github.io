<script lang="ts">
	import { onMount } from 'svelte';
	import type { ScanlineActionOptions } from 'scanlined/svelte';
	import { SITE_WORDMARK, WORDMARK_ANIMATION } from '$lib/config/site';

	let {
		onReady
	}: {
		onReady: () => void;
	} = $props();

	let wordmarkElement: HTMLHeadingElement;
	let wordmarkRendered = $state(false);

	const scanlineOptions = {
		font: 'IBM Plex Mono',
		fontWeight: 700,
		pixelHeight: 136,
		color: '#0f62fe',
		glyphSpacing: 0,
		trigger: 'manual',
		raster: { resolution: 13, threshold: 0.5, blockFit: 'advance' },
		animation: {
			duration: WORDMARK_ANIMATION.revealDurationMs,
			stagger: 0,
			direction: 'sweep-right',
			sweepScope: 'glyph'
		}
	} satisfies ScanlineActionOptions;

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
					...scanlineOptions,
					trigger: 'manual'
				});

				if (destroyed) {
					instance.destroy();
					return;
				}

				cleanup = instance.destroy;
				wordmarkRendered = true;
				readyFrame = requestAnimationFrame(() => {
					settledFrame = requestAnimationFrame(() => {
						onReady();
						revealTimer = window.setTimeout(
							() => instance.reveal(),
							WORDMARK_ANIMATION.revealDelayMs
						);
					});
				});
			} catch {
				wordmarkRendered = true;
				onReady();
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

<h1
	class:wordmark--loading={!wordmarkRendered}
	class="site-wordmark"
	bind:this={wordmarkElement}
>
	{SITE_WORDMARK}
</h1>
