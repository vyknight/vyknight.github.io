<script lang="ts">
	import WorkHistoryPage from '$lib/components/work/WorkHistoryPage.svelte';
	import { amazonSoftwareEngineer } from '$lib/data/work-history';
</script>

<WorkHistoryPage entry={amazonSoftwareEngineer}>
	<p>My current job, we're now called the Chargebacks team.</p>
	<p>So far what I can brag about is an AI service that looks at pictures to decide whether or not the contents have issues.</p>
	<p>It's highkey pretty cool, but I don't know how much I can talk about this stuff.</p>
	<p>Hopefully next time I update this section it'll be when I promote to L5.</p>
</WorkHistoryPage>
