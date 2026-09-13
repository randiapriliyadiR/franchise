<script lang="ts">
	import { page } from '$app/state';
	import { asset } from '$app/paths';

	let {
		title,
		description,
		image
	}: {
		title: string;
		description: string;
		image?: string;
	} = $props();

	const fullTitle = $derived(`${title} · Franchise Explorer`);
	const canonical = $derived(`https://randiapriliyadir.github.io${page.url.pathname}`);
	const resolvedImage = $derived(image ?? `https://randiapriliyadir.github.io${asset('/og.png')}`);
</script>

<svelte:head>
	<title>{fullTitle}</title>
	<meta name="description" content={description} />
	<link rel="canonical" href={canonical} />

	<meta property="og:type" content="website" />
	<meta property="og:title" content={fullTitle} />
	<meta property="og:description" content={description} />
	<meta property="og:image" content={resolvedImage} />
	<meta property="og:url" content={canonical} />

	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={fullTitle} />
	<meta name="twitter:description" content={description} />
	<meta name="twitter:image" content={resolvedImage} />
</svelte:head>
