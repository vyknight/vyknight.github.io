<script lang="ts">
	import WorkHistoryPage from '$lib/components/work/WorkHistoryPage.svelte';
	import { unicefProjectIntern } from '$lib/data/work-history';
</script>

<WorkHistoryPage entry={unicefProjectIntern}>
	<p>For a semester long project.</p>
</WorkHistoryPage>
