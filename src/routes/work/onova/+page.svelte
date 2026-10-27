<script lang="ts">
	import WorkHistoryPage from '$lib/components/work/WorkHistoryPage.svelte';
	import { onovaSoftwareEngineer } from '$lib/data/work-history';
</script>

<WorkHistoryPage entry={onovaSoftwareEngineer}>
	<h3>Onova?</h3>
	<p>Onova is the first company I've ever worked at as a Software Developer, and I was her second ever Software Engineer in turn.</p>
	<p>Onova is a small consulting startup based in Toronto Canada, focussed on planning and running corporate hackathons. Founded by two ex-Capgemini employees, customers includes Capgemini, McDonalds, BMO, and Google among others.</p>
	<p>I was employed both as an intern during the summer of 2023, and then as a part-time enginere in the winter of the same year.</p>
	<p>Whilst there, I worked on two projects.</p>
	<h3>Earth</h3>
	<p>Earth is the web platform Onova uses to run its hackathons. I worked fullstack, but I spent most of my time on API and database features.</p>
	<p>
		It was a pretty generic CRUD website, in reflection the most impressive thing about this project was the crunch we worked in.
		When we first deployed Earth on an actual event, only the public participant pages were finished. Submission, judging, and reward pages were all blank. 
		We had to prioritize tasks by the day participants were supposed to see them and we worked 12 hour days. We pulled thorugh though, and no one was the wiser.
	</p>
	<p>Earth was built with the NextJS fullstack framework, the frontend was React was Chakra UI, whilst the backend implemented Prism as an ORM. Data was stored inside a PostgreSQL database provided by Supabase.</p>
	<h3>PokerGPT</h3>
	<p>Right after this project the AI craze began in earnest, and my founder wanted to hop on and combine AI with his favourite hobby: Poker.</p>
	<p>PokerGPT is an AI powered poker coach, it's still underdevelopment today but for the first several months I was the only developer. I was responsible for everything from database schema design to styling CSS on the frontend to configuring toolchains.</p>
	<p>AI tooling and harnesses were at its infancy in 2023, the techniques available to us were adjusting the system prompt, integrating a vector database for RAG, and using LangChain for early tool calling. This was before MCP servers existed and before Claude was released to the general public.</p>
	<p>If I remember correctly, the techstack was a NextJS frontend, using React with Tailwind CSS + SCSS, then on the backend we served data from a FastAPI server.</p>


</WorkHistoryPage>
