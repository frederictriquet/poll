import '$lib/supabaseClient'
import type { Handle } from '@sveltejs/kit'

export const handle: Handle = async ({ event, resolve }) => {
  const hasVoted = event.cookies.get('has-voted');
  event.locals.hasVoted = !!hasVoted;
  return resolve(event);
}
