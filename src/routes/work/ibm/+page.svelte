<script lang="ts">
	import WorkHistoryPage from '$lib/components/work/WorkHistoryPage.svelte';
	import { ibmIntern } from '$lib/data/work-history';
</script>

<WorkHistoryPage entry={ibmIntern}>
	<p>From January to August 2024 I interned at IBM as a member of the Skills Network team.</p>
	<p>Our team made money by creating programming, data science, and AI courses and then selling them to Universities or through Coursera/edX.</p>
	<p>I was mainly focussed on maintaining backend services, but occasionally had frontend work as well. My main projects were Flo, an AI customer support ticket resolver; and CloudIDE, an online IDE.</p> 
	<p>CloudIDE was especially interesting, it looks like a normal VSCode fork, but what's cool is that we have a pool of containerized database server instances that we let users access to preserve the full experience of working with a locally or cloud hosted database.</p>
	<p>I initiated a project to rework a service called PUKE that provisioned Kubernetes credentials to end users using a redis cache.</p>
	<p>My biggest achievement while working this job was probably getting Github Action runners to build bigger containers than allowed by including a long script in the docker script to delete everything on the runner host except for what's needed.</p>
	<p>Over 8 months I used a lot of technologies, but the most relevant ones were: Redis, Docker, Kubernetes, Python, React, Tailwind, and TypeScript.</p>
</WorkHistoryPage>
