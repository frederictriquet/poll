import { getData, putData } from '$lib/supabaseClient';
import { json, type RequestHandler } from '@sveltejs/kit';

export const GET: RequestHandler = async () => {
    // await putData();
    const result = await getData();
    console.log(`new result ${result}`);
    return json({ data: result });
};