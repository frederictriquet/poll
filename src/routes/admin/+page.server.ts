import {
	createSuspect,
	deleteSuspect,
	getStatus,
	getSuspects,
	resetVotesForSuspects,
	updateStatus
} from '$lib/supabaseClient';
import type { PageServerLoad } from './$types';

export const load = (async () => {
	const status = await getStatus();
	const suspects = await getSuspects();
	return { status: status, suspects: suspects };
}) satisfies PageServerLoad;

/** @type {import('./$types').Actions} */
export const actions = {
	updateStatus: async ({ request }) => {
		const data = await request.formData();
		const status = data.get('status');
		await updateStatus(status);
		return { success: true };
	},
	deleteSuspect: async ({ request }) => {
		const data = await request.formData();
		const id = data.get('id');
		await deleteSuspect(id);
		return { success: true };
	},
	createSuspect: async ({ request }) => {
		const data = await request.formData();
		const name = data.get('name');
		await createSuspect(name);
		return { success: true };
	},
	resetVotes: async () => {
		await resetVotesForSuspects();
		return { success: true };
	}
};
