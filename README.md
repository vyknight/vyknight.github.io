# Portfolio site

This is a statically generated SvelteKit portfolio.

## Editing guide

- Edit sidebar sections and child links in `src/lib/data/navigation.ts`.
- Edit header coordinate values in `src/lib/data/coordinate-locations.ts`.
- Edit the site title, wordmark, contact links, and animation timing in `src/lib/config/site.ts`.
- Edit page-specific wording and data in the matching file under `src/routes`.
- Edit shared colors, spacing, widths, and typography in `src/styles/tokens.css`.

## Shared content components

Content routes are assembled from reusable components in `src/lib/components/content`:

- `ContentPage` provides the page container.
- `ContentHeader` renders the eyebrow, title, and summary.
- `MetadataList` renders reusable metadata rows such as date, type, stack, and deploy.
- `DetailSections` renders repeated titled text or list sections.
- `IndexHeader` renders landing-page headings and entry counts.
- `ProjectList` renders project index entries.

A typical detail route keeps its editable content near the top:

```svelte
<script lang="ts">
	import {
		ContentHeader,
		ContentPage,
		DetailSections,
		MetadataList
	} from '$lib/components/content';

	const metadata = [{ label: 'DATE', value: '2026' }];
	const sections = [
		{
			heading: 'Section title',
			paragraphs: ['Opening paragraph.'],
			bullets: ['First item', 'Second item'],
			paragraphsAfterBullets: ['Paragraph after the list.']
		}
	];
</script>

<ContentPage>
	<ContentHeader eyebrow="CATEGORY" title="Page title" summary="Page summary." />
	<MetadataList items={metadata} layout="inline" />
	<DetailSections {sections} />
</ContentPage>
```

## Styles

The stylesheet entry point is `src/app.css`. It imports:
- `tokens.css` for shared design values.
- `base.css` for document defaults.
- `shell.css` for the header, sidebar, navigation, and globe.
- `content.css` for reusable page and content components.
- `responsive.css` for viewport-specific layout changes.

## Development

```sh
npm install
npm run dev
```

Run `npm run build` before publishing.
