<script lang="ts">
	import WorkHistoryPage from '$lib/components/work/WorkHistoryPage.svelte';
	import { unicefProjectIntern } from '$lib/data/work-history';
</script>

<WorkHistoryPage entry={unicefProjectIntern}>
	<p>This project was a part of an initiative between the University of Toronto and UNICEF where students get experiences doing real projects for UNICEF.</p>
	<p>Our specific projects involves creating a small web application to replace paperwork for UNICEF field offices. It was basically a form builder.</p>
	<p>The web application uses the Django Python framework for basically everything, with React being used for frontend layouts.</p>
	<p>The only real complexity of this project was enabling Microsoft Azure SSO in a time before ChatGPT.</p>
</WorkHistoryPage>
