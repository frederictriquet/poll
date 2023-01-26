import {
	createRoom,
	createSuspect,
	deleteRoom,
	deleteSuspect,
	getRooms,
	getStatus,
	getSuspects,
	resetVotesForRooms,
	resetVotesForSuspects,
	updateStatus
} from '$lib/supabaseClient';
import type { PageServerLoad } from './$types';

export const load = (async () => {
	const status = await getStatus();
	const suspects = await getSuspects();
	const rooms = await getRooms();
	return { status: status, suspects: suspects, rooms: rooms };
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
	deleteRoom: async ({ request }) => {
		const data = await request.formData();
		const id = data.get('id');
		await deleteRoom(id);
		return { success: true };
	},
	createRoom: async ({ request }) => {
		const data = await request.formData();
		const name = data.get('name');
		await createRoom(name);
		return { success: true };
	},
	resetVotes: async () => {
		await resetVotesForSuspects();
		await resetVotesForRooms();
		return { success: true };
	}
};
