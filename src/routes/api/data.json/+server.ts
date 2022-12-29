import { getRandom } from '$lib/services/db';
import { json } from '@sveltejs/kit';
import type { RequestHandler } from '../../$types';

export const GET: RequestHandler = async () => {
    const result = await getRandom();
    console.log(`new result ${result}`);
    return json({ rand: result });
};