import { getRandom } from '$lib/services/db';
import type { RequestHandler } from '../../$types';

export const GET: RequestHandler = async () => {
    getRandom();
    return new Response();
};