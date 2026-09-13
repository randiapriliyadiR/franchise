import type { MediaType } from '../data/types';

export function formatDate(iso: string | undefined): string {
	if (!iso) return 'TBA';
	const date = new Date(`${iso}T00:00:00Z`);
	if (Number.isNaN(date.getTime())) return iso;
	return new Intl.DateTimeFormat('en-US', {
		year: 'numeric',
		month: 'long',
		day: 'numeric',
		timeZone: 'UTC'
	}).format(date);
}

export function formatYear(iso: string | undefined): string {
	if (!iso) return 'TBA';
	return iso.slice(0, 4);
}

export function formatRuntime(minutes: number | undefined): string | null {
	if (!minutes) return null;
	const h = Math.floor(minutes / 60);
	const m = minutes % 60;
	if (h === 0) return `${m}m`;
	if (m === 0) return `${h}h`;
	return `${h}h ${m}m`;
}

export function formatTotalRuntime(minutes: number): string {
	const days = Math.floor(minutes / (60 * 24));
	const hours = Math.round((minutes % (60 * 24)) / 60);
	if (days === 0) return `${hours}h`;
	return `${days}d ${hours}h`;
}

const TYPE_LABELS: Record<MediaType, string> = {
	film: 'Film',
	series: 'Series',
	game: 'Game',
	comic: 'Comic',
	short: 'Short'
};

export function typeLabel(type: MediaType): string {
	return TYPE_LABELS[type];
}

export function formatRating(rating: number | undefined | null): string {
	if (typeof rating !== 'number') return '—';
	return rating.toFixed(1);
}
