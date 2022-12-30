import { getRooms, getSuspects, voteForRoom, voteForSuspect } from '$lib/supabaseClient';
import { redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load = (async () => {
	const suspects = await getSuspects();
	const rooms = await getRooms();
	return { suspects: suspects, rooms: rooms };
}) satisfies PageServerLoad;

/** @type {import('./$types').Actions} */
export const actions = {
	vote: async ({ request }) => {
		const data = await request.formData();
		const suspectId = data.get('selectedSuspect');
		const roomId = data.get('selectedRoom');
		await voteForSuspect(suspectId);
		await voteForRoom(roomId);
        throw redirect(303, '/results');
		// return { success: true };
	}
};
