import type { PageLoad } from './$types';

export const load = (async ({ fetch }) => {
	const url = `/api/data.json`;
	const response = await fetch(url);
    const resp = await response.json();
	return { random: resp.rand };
}) satisfies PageLoad;
