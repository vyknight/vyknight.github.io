<script lang="ts">
	import '../app.css';
	import Sidebar from '$lib/components/layout/Sidebar.svelte';
	import SiteHeader from '$lib/components/layout/SiteHeader.svelte';
	import { SITE_TITLE, WORDMARK_ANIMATION } from '$lib/config/site';

	let { children } = $props();
	let siteReady = $state(false);
	let sidebarOffset = $state(0);
</script>

<svelte:head>
	<title>{SITE_TITLE}</title>
</svelte:head>

<div
	class:site-shell--ready={siteReady}
	class="site-shell"
	style={`--layout-sidebar-top: ${sidebarOffset}px; --wordmark-reveal-delay: ${WORDMARK_ANIMATION.revealDelayMs}ms; --wordmark-reveal-duration: ${WORDMARK_ANIMATION.revealDurationMs}ms`}
>
	<SiteHeader
		{siteReady}
		onSiteReady={() => (siteReady = true)}
		onHeightChange={(height) => (sidebarOffset = height)}
	/>

	<div class="site-layout">
		<Sidebar />
		<main class="site-main">
			{@render children()}
		</main>
	</div>
</div>
