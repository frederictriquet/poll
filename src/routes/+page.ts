import type { PageLoad } from './$types';

export const load = (async ({ fetch }) => {
	const url = `/api/data.json`;
	const response = await fetch(url);
	return {};
}) satisfies PageLoad;
