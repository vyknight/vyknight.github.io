<script lang="ts">
	import { onMount } from 'svelte';
	import createGlobe from 'cobe';

	let canvas: HTMLCanvasElement;

	onMount(() => {
		let phi = 0;
		let animationFrame: number;

		const globe = createGlobe(canvas, {
			width: 1,
			height: 1,
			devicePixelRatio: Math.min(window.devicePixelRatio, 2),
			phi,
			theta: 0.33,
			dark: 0,
			opacity: 0.6,
			diffuse: 1,
			scale: 1,
			mapSamples: 12000,
			mapBrightness: 10,
			mapBaseBrightness: 0,
			// baseColor: [0.059, 0.384, 0.945],
			baseColor: [1,1,1],
			markerColor: [0.059, 0.384, 0.945],
			glowColor: [1, 1, 1],
			offset: [0, 0],
			markers: []
		});

		const resize = () => {
			const { width, height } = canvas.getBoundingClientRect();
			globe.update({ width, height });
		};

		const animate = () => {
			phi += 0.004;
			globe.update({ phi });
			animationFrame = requestAnimationFrame(animate);
		};

		const resizeObserver = new ResizeObserver(resize);
		resizeObserver.observe(canvas);
		resize();
		animationFrame = requestAnimationFrame(animate);

		return () => {
			cancelAnimationFrame(animationFrame);
			resizeObserver.disconnect();
			globe.destroy();
		};
	});
</script>

<svelte:head>
	<title>Vyknight — Overview</title>
	<meta name="description" content="A technical portfolio of software, systems, and experiments." />
</svelte:head>

<section class="globe-page">
	<canvas bind:this={canvas} class="globe-canvas" aria-label="A rotating globe" role="img"></canvas>
	<div class="orbit-ring" aria-hidden="true">
		<svg class="orbit-svg" viewBox="0 0 300 300">
			<defs>
				<path
					id="portfolio-orbit-path"
					d="M 150,10 A 140,140 0 0,0 10,150 A 140,140 0 0,0 150,290 A 140,140 0 0,0 290,150 A 140,140 0 0,0 150,10"
				/>
			</defs>
			<text class="orbit-text">
				<textPath href="#portfolio-orbit-path" startOffset="50.5%" text-anchor="middle">
					{'SOMEWHERE IN THIS WORLD SOMETHING IS WAITING FOR YOU'}
				</textPath>
			</text>
		</svg>
	</div>
</section>
