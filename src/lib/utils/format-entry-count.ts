export function formatEntryCount(count: number): string {
	const paddedCount = String(count).padStart(2, '0');
	const label = count === 1 ? 'ENTRY' : 'ENTRIES';
	return `${paddedCount} ${label}`;
}
