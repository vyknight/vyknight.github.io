<script lang="ts">
	import { ContentPage, IndexHeader, ProjectList } from '$lib/components/content';
	import { WORK_HISTORY } from '$lib/data/work-history';
	import { formatEntryCount } from '$lib/utils/format-entry-count';
</script>

<ContentPage>
	<IndexHeader eyebrow="02 — WORK HISTORY" count={formatEntryCount(WORK_HISTORY.length)} />
	<ProjectList projects={WORK_HISTORY} />
</ContentPage>
