<script lang="ts">
	import WorkHistoryPage from '$lib/components/work/WorkHistoryPage.svelte';
	import { amazonIntern } from '$lib/data/work-history';
</script>

<WorkHistoryPage entry={amazonIntern}>
	<p>I was a member of SPOT team, who handles supply chain chargebacks.</p>
	<p>My project was to fix this disgustingly broken search system that took about 15 minutes to search through 30k records a DynamoDB with no indexing optimization.</p>
	<p>I really learned a lot during this internship, and my solution was good enough to get me invited back. Also I learned how good Kotlin was.</p>
	<p>Main technology used were Java, Kotlin, Python, TypeScript, and a bunch of AWS stuff like S3, DynamoDB, OpenSearch, SNS, and so on.</p>
</WorkHistoryPage>
