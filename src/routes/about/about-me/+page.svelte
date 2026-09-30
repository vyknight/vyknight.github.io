<script lang="ts">
	import { ContentHeader, ContentPage, DetailSections, MetadataList } from '$lib/components/content';
	import type { DetailSection } from '$lib/types/content';

	const metadata = [
		{ label: 'CREATED', value: 'AUTUMN 2026' },
		{ label: 'UPDATED', value: 'AUTUMN 2026' }
	];

	const sections = [
		{
			heading: 'Careerwise',
			paragraphs: [
				'I\'m a L4 Software Engineer working for Amazon within the Supply Chain Optimization Technologies (SCOT) Organization.',
				'I graduated from the University of Toronto in June 2026 with a Bachelor of Science. I specialized in the Computer Systems subdiscipline of Computer Science. Though after I left, the CS department revealed that they\'re creating a brand new degree called "Bachelor of Computer Science", which was unfortunate',
				'I began working at Amazon right after graduation, but previously I also interned at:'
			],
			bullets: [
				'Amazon, on the same team as I am now.',
				'Huawei, on the GaussDB team.',
				'IBM, on the SkillsNetwork team.',
				'UNICEF, for a one semester project.',
				'Onova, a small consultancy startup for which I was its second ever programmer.'
			],
			paragraphsAfterBullets: [
				'I mainly work on backend systems that handle large quantities of data. This is because I\'m good at rotating large systems in my head and because I enjoy making small optimizations wherever I can.',
				'However when duty calls I design a decent frontend.'
			]
		},
		{
			heading: 'Funwise',
			paragraphs: [
				'For a long time, my only real hobby was playing video games, but after starting full time work I lost the ability to enjoy them. So here\'s a list of other things I\'ve been trying (though I must disclaim that I\'m bad at all of them):'
			],
			bullets: [
				'Drawing.',
				'Reading.',
				'Writing.',
				'Running.',
				'Photography.',
				'Making videos.',
				'Watching movies.',
				'Working on coding projects.',
				'Playing billiards.',
				'Translating manhua.',
				'Smoking cigarettes.',
				'Gambling.',
				'Starting arguments on the internet.',
				'Picking someone on the street and following them as far as I can.',
				'Playing the flute.'
			],
			paragraphsAfterBullets: [
				'Yes each of these takes skill, including smoking cigarettes, and yes I manage to be bad at all of them, including smoking cigarettes.'
			]
		}
	] satisfies readonly DetailSection[];
</script>

<ContentPage>
	<ContentHeader
		eyebrow="01.02 — ABOUT ME"
		title="ME"
		// summary="A focused overview page can capture an ongoing area of interest without needing to become a full project case study."
	/>
	<MetadataList items={metadata} />
	<DetailSections {sections} />
</ContentPage>
