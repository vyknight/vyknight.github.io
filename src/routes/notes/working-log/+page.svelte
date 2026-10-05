<script lang="ts">
	import { ContentBody, ContentHeader, ContentPage } from '$lib/components/content';
</script>

<ContentPage>
	<ContentHeader
		eyebrow="03.01 — WORKING LOG"
		title="Small observations, kept close to the work."
		summary="A running log is useful for short findings that are too specific for a project page but worth retrieving later."
	/>
	<ContentBody>
		<section>
			<h3>Entry format</h3>
			<p>Date, a concise observation, the context that produced it, and links to related work.</p>
		</section>
		<section>
			<h3>Examples</h3>
			<ul>
				<li>Why a layout decision changed</li>
				<li>A useful implementation constraint</li>
				<li>A compact debugging record</li>
			</ul>
		</section>
	</ContentBody>
</ContentPage>
