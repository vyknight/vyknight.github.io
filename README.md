# Portfolio site

This is a statically generated SvelteKit portfolio.

## Editing guide

- Edit sidebar sections and child links in `src/lib/data/navigation.ts`.
- Edit header coordinate values in `src/lib/data/coordinate-locations.ts`.
- Edit the site title, wordmark, contact links, and animation timing in `src/lib/config/site.ts`.
- Edit page-specific wording and data in the matching file under `src/routes`.
- Edit shared colors, spacing, widths, and typography in `src/styles/tokens.css`.

## Reusable page components

Reusable components in `src/lib/components/content` control presentation and repeated interface
patterns:

- `ContentPage` provides the page container.
- `ContentHeader` renders the eyebrow, title, and optional summary.
- `MetadataList` renders reusable metadata rows such as date, type, stack, and deploy.
- `ContentBody` applies shared typography and spacing to normal HTML content.
- `IndexHeader` renders landing-page headings and entry counts.
- `ProjectList` renders project index entries.

Page-specific prose belongs directly in its route as semantic Svelte/HTML. Do not encode prose as
arrays or section objects:

```svelte
<script lang="ts">
	import {
		ContentBody,
		ContentHeader,
		ContentPage,
		MetadataList
	} from '$lib/components/content';

	const metadata = [{ label: 'DATE', value: '2026' }];
</script>

<ContentPage>
	<ContentHeader eyebrow="CATEGORY" title="Page title" summary="Page summary." />
	<MetadataList items={metadata} />
	<ContentBody>
		<section>
			<h3>Section title</h3>
			<p>Opening paragraph with an <a href="/projects">inline link</a>.</p>
			<ul>
				<li>First item</li>
				<li>Second item</li>
			</ul>
			<p>Paragraph after the list.</p>
		</section>
	</ContentBody>
</ContentPage>
```

Structured data remains appropriate for repeated UI such as navigation, metadata, project cards,
and work-history card summaries. Work detail routes pass that shared card data into
`WorkHistoryPage`, but write their prose as ordinary child markup.

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
