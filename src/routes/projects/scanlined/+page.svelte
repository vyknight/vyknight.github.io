<script lang="ts">
	import {
		ContentBody,
		ContentHeader,
		ContentPage,
		MetadataList
	} from '$lib/components/content';

	const metadata = [
		{
			label: 'REPOSITORY',
			value: 'github.com/vyknight/Scanlined',
			href: 'https://github.com/vyknight/Scanlined'
		},
		{
			label: 'PACKAGE',
			value: 'npmjs.com/package/scanlined',
			href: 'https://www.npmjs.com/package/scanlined'
		}
	];

</script>

<ContentPage>
	<ContentHeader
		eyebrow="02.01 — CASE STUDY"
		title="Scanlined"
		summary="An animated text renderer that begins as a field of bars and resolves into selectable, accessible letterforms."
	/>
	<MetadataList items={metadata} layout="inline" />
	<ContentBody>
		<section>
			<p>
				I really like the aesthestics of redacting and unredacting text, probably from being overexposed to SCPs and conspiracies when I was younger. 
				Combined with a proclivity towards retro computing aesthetics, I wanted to combine the two effects together for my website. 
				Seeing that there is no existing library to render this effect I decided to create a package myself. 
			</p>
			<p>
				This package essentialy just renders a svg rectangle over the text that just gets resized.
			</p>
			<p>
				For text that gets the scanline effect, the package cuts up the glyph into a grid and then renders the parts of the glyph that stays and the ones that move separately.
				Of course, this annihilates the performance, especially compared to the regular redact effect. Like 100x worse. 
			</p>
			<p>
				Svelte hooks were implemented because I specifically wanted to use Svelte for this portfolio website.
			</p>
		</section>
	</ContentBody>
</ContentPage>
