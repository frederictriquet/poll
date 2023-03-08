import { getStatus } from "$lib/supabaseClient";
import { json, type RequestHandler } from "@sveltejs/kit";


export const GET: RequestHandler = async () => {
  const status = await getStatus();
  return json({status: status});
}