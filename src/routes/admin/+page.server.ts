import { createRoom, createSuspect, deleteRoom, deleteSuspect, getRooms, getSuspects } from '$lib/supabaseClient';
import type { PageServerLoad } from './$types';

export const load = (async () => {
    const suspects = await getSuspects();
    const rooms = await getRooms();
    return { suspects: suspects, rooms: rooms };
}) satisfies PageServerLoad;



/** @type {import('./$types').Actions} */
export const actions = {
    deleteSuspect: async ({request}) => {
        const data = await request.formData();
        const id = data.get('id');
        await deleteSuspect(id);
        return {success: true};
    },
    createSuspect: async ({request}) => {
      const data = await request.formData();
      const name = data.get('name');
      await createSuspect(name);
      return {success: true};
    },
    deleteRoom: async ({request}) => {
        const data = await request.formData();
        const id = data.get('id');
        await deleteRoom(id);
        return {success: true};
    },
    createRoom: async ({request}) => {
      const data = await request.formData();
      const name = data.get('name');
      await createRoom(name);
      return {success: true};
    }
  };