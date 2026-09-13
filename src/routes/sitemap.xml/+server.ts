import { franchises } from '$lib/data/franchises';
import { getEntries } from '$lib/data';
import { base } from '$app/paths';
import type { RequestHandler } from './$types';

export const prerender = true;

const ORIGIN = 'https://randiapriliyadir.github.io';

export const GET: RequestHandler = () => {
	const paths = [
		'/',
		...franchises.flatMap((f) => [
			`/${f.id}/`,
			`/${f.id}/timeline/`,
			`/${f.id}/stats/`,
			...getEntries(f.id).map((e) => `/${f.id}/${e.id}/`)
		])
	];

	const body =
		`<?xml version="1.0" encoding="UTF-8"?>\n` +
		`<urlset xmlns="https://www.sitemaps.org/schemas/sitemap/0.9">\n` +
		paths.map((p) => `  <url><loc>${ORIGIN}${base}${p}</loc></url>`).join('\n') +
		`\n</urlset>\n`;

	return new Response(body, {
		headers: { 'Content-Type': 'application/xml' }
	});
};
