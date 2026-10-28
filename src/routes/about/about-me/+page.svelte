<script lang="ts">
	import { ContentBody, ContentHeader, ContentPage, MetadataList } from '$lib/components/content';

	const metadata = [
		{ label: 'CREATED', value: 'AUTUMN 2026' },
		{ label: 'UPDATED', value: 'AUTUMN 2026' }
	];

</script>

<ContentPage>
	<ContentHeader
		eyebrow="01.02 — ABOUT ME"
		title="ME"
		// summary="A focused overview page can capture an ongoing area of interest without needing to become a full project case study."
	/>
	<MetadataList items={metadata} />
	<ContentBody>
		<section>
			<h3>Careerwise</h3>
			<p>
				I'm a L4 Software Engineer working for Amazon within the Supply Chain Optimization
				Technologies (SCOT) Organization.
			</p>
			<p>
				I graduated from the University of Toronto in June 2026 with a Bachelor of Science. I
				specialized in the Computer Systems subdiscipline of Computer Science. Though after I left,
				the CS department revealed that they're creating a brand new degree called "Bachelor of
				Computer Science", which was unfortunate
			</p>
			<p>I began working at Amazon right after graduation, but previously I also interned at:</p>
			<ul>
				<li>Amazon, on the same team as I am now.</li>
				<li>Huawei, on the GaussDB team.</li>
				<li>IBM, on the SkillsNetwork team.</li>
				<li>UNICEF, for a one semester project.</li>
				<li>Onova, a small consultancy startup for which I was its second ever programmer.</li>
			</ul>
			<p>
				I mainly work on backend systems that handle large quantities of data. This is because I'm
				good at rotating large systems in my head and because I enjoy making small optimizations
				wherever I can.
			</p>
			<p>However when duty calls I design a decent frontend.</p>
		</section>

		<section>
			<h3>Funwise</h3>
			<p>
				For a long time, my only real hobby was playing video games, but after starting full time
				work I lost the ability to enjoy them. So here's a list of other things I've been trying:
			</p>
			<ul>
				<li>Drawing.</li>
				<li>Reading.</li>
				<li>Writing.</li>
				<li>Running.</li>
				<li>Photography.</li>
				<li>Making videos.</li>
				<li>Watching movies.</li>
				<li>Working on coding projects.</li>
				<li>Playing billiards.</li>
				<li>Translating manhua.</li>
				<li>Smoking cigarettes.</li>
				<li>Gambling.</li>
				<li>Starting arguments on the internet.</li>
				<li>Picking someone on the street and following them as far as I can.</li>
				<li>Playing the flute.</li>
			</ul>
			<p>
				To be clear I don't claim to be good at any of these.
			</p>
		</section>
	</ContentBody>
</ContentPage>
