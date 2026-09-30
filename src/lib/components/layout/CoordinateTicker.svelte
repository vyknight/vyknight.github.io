<script lang="ts">
	import { onMount } from 'svelte';
	import type { ScanlinedInstance } from 'scanlined';
	import { COORDINATE_TICKER_ANIMATION, WORDMARK_ANIMATION } from '$lib/config/site';
	import { COORDINATE_LOCATIONS } from '$lib/data/coordinate-locations';

	let {
		started
	}: {
		started: boolean;
	} = $props();

	let firstLine: HTMLParagraphElement;
	let secondLine: HTMLParagraphElement;
	let thirdLine: HTMLParagraphElement;
	let tickerRendered = $state(false);

	onMount(() => {
		let destroyed = false;
		const instances: ScanlinedInstance[] = [];
		const pendingDelays = new Map<number, () => void>();
		const lineElements = [firstLine, secondLine, thirdLine];

		const wait = (duration: number) =>
			new Promise<boolean>((resolve) => {
				const timer = window.setTimeout(() => {
					pendingDelays.delete(timer);
					resolve(!destroyed);
				}, duration);
				pendingDelays.set(timer, () => resolve(false));
			});

		const chooseCoordinate = (excluded: Set<string>) => {
			const availableCoordinates = COORDINATE_LOCATIONS.filter(
				(coordinate) => !excluded.has(coordinate)
			);
			return (
				availableCoordinates[Math.floor(Math.random() * availableCoordinates.length)] ??
				COORDINATE_LOCATIONS[0]
			);
		};

		const chooseLinesToRefresh = () => {
			const lineIndexes = lineElements.map((_, index) => index);
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
			instance: ScanlinedInstance
		) => {
			const overlays = Array.from(
				element.querySelectorAll<HTMLElement>('.scanlined-cover [aria-hidden="true"]')
			);

			instance.reset();

			if (overlays.length === 0) return !destroyed;

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
						duration: COORDINATE_TICKER_ANIMATION.revealDurationMs,
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

				for (const element of lineElements) {
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
							duration: COORDINATE_TICKER_ANIMATION.revealDurationMs,
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

				tickerRendered = true;

				while (!started) {
					if (!(await wait(50))) return;
				}
				if (!(await wait(WORDMARK_ANIMATION.revealDelayMs))) return;

				while (!destroyed) {
					const activeLines = chooseLinesToRefresh();
					activeLines.forEach((lineIndex) => instances[lineIndex].reveal());
					if (
						!(
							await wait(
								COORDINATE_TICKER_ANIMATION.revealDurationMs +
									COORDINATE_TICKER_ANIMATION.revealedHoldMs
							)
						)
					)
						return;

					if (
						!(await Promise.all(
							activeLines.map((lineIndex) =>
								concealCoordinate(lineElements[lineIndex], instances[lineIndex])
							)
						)).every(Boolean)
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

					if (!(await wait(COORDINATE_TICKER_ANIMATION.coveredHoldMs))) return;
				}
			} catch {
				if (destroyed) return;
				instances.forEach((instance) => instance.destroy());
				lineElements.forEach((element, index) => {
					element.textContent = COORDINATE_LOCATIONS[index];
				});
				tickerRendered = true;
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

<div
	class:coordinate-ticker--ready={tickerRendered}
	class="coordinate-ticker"
	aria-hidden="true"
>
	<p class="coordinate-ticker__line" bind:this={firstLine}></p>
	<p class="coordinate-ticker__line" bind:this={secondLine}></p>
	<p class="coordinate-ticker__line" bind:this={thirdLine}></p>
</div>
