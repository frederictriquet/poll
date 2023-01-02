import { getRooms, getSuspects, voteForRoom, voteForSuspect } from '$lib/supabaseClient';
import { redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load = (async (event) => {
	if (event.cookies.get('has-voted')) {
		throw redirect(303, '/results');
	}
	const suspects = await getSuspects();
	const rooms = await getRooms();
	return { suspects: suspects, rooms: rooms };
}) satisfies PageServerLoad;

/** @type {import('./$types').Actions} */
export const actions = {
	vote: async ({ request, cookies }) => {
		const data = await request.formData();
		const suspectId = data.get('selectedSuspect');
		const roomId = data.get('selectedRoom');
		await voteForSuspect(suspectId);
		await voteForRoom(roomId);

		cookies.set('has-voted', true, {
			path: '/',
			httpOnly: true,
			sameSite: 'strict',
			secure: true,
			maxAge: 60 * 60 * 24
		});

		throw redirect(303, '/results');
		// return { success: true };
	}
};
