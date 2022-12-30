import { createClient } from '@supabase/auth-helpers-sveltekit'
import { env } from '$env/dynamic/private'

export const supabase = createClient(env['SUPABASE_URL'], env['SUPABASE_ANON_KEY'])

export async function getData() {
  // supabase.
  // const { data, error, status } = await supabase.from('dummy').select("*");

  const { data, error, status } = await supabase
        .from('dummy')
        .select(`id, data`)
        .eq('id', 1)
        .limit(1)
        .single();
  console.log(data);
  console.log(error);
  console.log(status);
  console.log(data?.data.something)
  return data?.data.something;
}

export async function putData() {
  const {error} = await supabase.from("dummy").insert({ data: '{"a":"b"}'});
  console.log(error);
}


export async function getSuspects() {
  const { data, error, status } = await supabase
        .from('suspects')
        .select(`id, name, votes`);
  console.log(data);
  console.log(error);
  console.log(status);
  return data;
}
export async function deleteSuspect(id: number) {
  const {error} = await supabase.from('suspects').delete().eq('id', id);
  console.log(error);
}

export async function createSuspect(name: string) {
  const {error} = await supabase.from('suspects').insert({ name: name, votes: 0});
  console.log(error);
}

export async function voteForSuspect(id: number) {
  const {error} = await supabase.rpc('vote_suspect', { row_id: id })
  console.log(error);
}

export async function getRooms() {
  const { data, error, status } = await supabase
        .from('rooms')
        .select(`id, name, votes`);
  return data;
}
export async function deleteRoom(id: number) {
  const {error} = await supabase.from('rooms').delete().eq('id', id);
  console.log(error);
}

export async function createRoom(name: string) {
  const {error} = await supabase.from('rooms').insert({ name: name, votes: 0});
  console.log(error);
}

export async function voteForRoom(id: number) {
  const {error} = await supabase.rpc('vote_room', { row_id: id })
  console.log(error);
}
