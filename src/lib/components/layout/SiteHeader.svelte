<script lang="ts">
	import { onMount } from 'svelte';
	import AnimatedWordmark from './AnimatedWordmark.svelte';
	import CoordinateTicker from './CoordinateTicker.svelte';

	let {
		siteReady,
		onSiteReady,
		onHeightChange
	}: {
		siteReady: boolean;
		onSiteReady: () => void;
		onHeightChange: (height: number) => void;
	} = $props();

	let headerElement: HTMLElement;

	onMount(() => {
		const updateHeight = () => {
			onHeightChange(Math.max(0, headerElement.getBoundingClientRect().bottom));
		};
		const resizeObserver = new ResizeObserver(updateHeight);
		resizeObserver.observe(headerElement);
		window.addEventListener('scroll', updateHeight, { passive: true });
		updateHeight();

		return () => {
			resizeObserver.disconnect();
			window.removeEventListener('scroll', updateHeight);
		};
	});
</script>

<header class="site-header" bind:this={headerElement}>
	<AnimatedWordmark onReady={onSiteReady} />
	<CoordinateTicker started={siteReady} />
</header>
