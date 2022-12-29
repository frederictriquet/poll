import { createClient } from '@supabase/auth-helpers-sveltekit'
import { env } from '$env/dynamic/public'

export const supabase = createClient(env.PUBLIC_SUPABASE_URL, env.PUBLIC_SUPABASE_ANON_KEY)

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