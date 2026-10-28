<script lang="ts">
	import WorkHistoryPage from '$lib/components/work/WorkHistoryPage.svelte';
	import { onovaSoftwareEngineer } from '$lib/data/work-history';
</script>

<WorkHistoryPage entry={onovaSoftwareEngineer}>
	<section>
		<p>Onova was my first internship, and the only I've worked at, in turn I was its second ever software engineer.</p>
		<p>It was a small consulting startup for running hackathons in big companies. Customers include the likes of AWS, BMO, and McDonalds.</p>
		<p>
			I started with Earth, an online hackathon management platform. It's really memorable to me because of how frantic the development was. 
			The first time we used it for an actual client the website wasn't even ready yet. We had to prioritize which page to work on by which one will be seen by users first.
		</p>
		<p>
			After this project cooled down with all the major features completed. ChatGPT launched and we started working on PokerGPT, an AI powered poker coach.
		</p>
		<p>
			Unfortunately, while I was there the performance wasn't very good. For a time reference this was before Anthropic released Claude and before MCP tools existed. We only had langchain.
		</p>
		<p>Technologies I remember using during this time was: Langchain, NextJS, FastAPI, Prisma ORM, React, Tailwind, Chakra UI, Supabase, Postgres, TypeScript, and Python.</p>

	</section>


</WorkHistoryPage>
