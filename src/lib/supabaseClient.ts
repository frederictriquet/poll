import { createClient } from '@supabase/auth-helpers-sveltekit';
import { env } from '$env/dynamic/public';

export const supabase = createClient(env.PUBLIC_SUPABASE_URL, env.PUBLIC_SUPABASE_ANON_KEY);

export async function getStatus() {
	const { data, error } = await supabase.from('meta').select(`value_int`).eq('key', 'status');
	if (error) console.log(error);
	if (!data) return 0;
	return data[0].value_int;
}
export async function updateStatus(newStatus: number) {
	const { data, error } = await supabase
		.from('meta')
		.update({ value_int: newStatus })
		.eq('key', 'status');
	if (error) console.log(error);
	return data;
}

export async function getSuspects() {
	const { data, error } = await supabase
		.from('suspects')
		.select(`id, name, votes, picture_data`)
		.order('name');
	if (error) console.log(error);
	return data;
}
export async function getSuspect(id: number) {
	const { data, error } = await supabase
		.from('suspects')
		.select(`id, name, votes, picture_data`)
		.eq('id', id)
		.maybeSingle();
	if (error) console.log(error);
	return data;
}
export async function updateSuspectPicture(id: number, pictureData: string) {
	const { data, error } = await supabase
		.from('suspects')
		.update({ picture_data: pictureData })
		.eq('id', id);
	if (error) console.log(error);
	return data;
}
export async function deleteSuspect(id: number) {
	const { error } = await supabase.from('suspects').delete().eq('id', id);
	if (error) console.log(error);
}

export async function createSuspect(name: string) {
	const { error } = await supabase.from('suspects').insert({ name: name, votes: 0 });
	if (error) console.log(error);
}

export async function voteForSuspect(id: number) {
	const { error } = await supabase.rpc('vote_suspect', { row_id: id });
	if (error) console.log(error);
}

export async function resetVotesForSuspects() {
	const { data, error } = await supabase.from('suspects').update({ votes: 0 }).neq('votes', 0);
	if (error) console.log(error);
	return data;
}
