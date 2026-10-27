<script lang="ts">
	import WorkHistoryPage from '$lib/components/work/WorkHistoryPage.svelte';
	import { huaweiIntern } from '$lib/data/work-history';
</script>

<WorkHistoryPage entry={huaweiIntern}>
	<p>I was a member of the GaussDB team, during my time we've successfully pushed our TPC-H benchmarks to below 8 seconds.</p>
	<p>But I'll be fully honest here over the 4 months I worked there they only let me write ONE line of C++.</p>
	<p>Interns were assigned actual slave tasks like running benchmarks and making flamecharts and editing excel spreadsheets with the results.</p>
	<p>The extent to which I coded was bash and python scripts in order to run those tests and make those flamecharts. I really hated this internship.</p>
	<p>This wasn't just me by the way every intern had to do this for first 4 months, at which point I've already left for Amazon.</p>
</WorkHistoryPage>
