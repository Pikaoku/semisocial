import { supabase } from '$lib/supabaseClient';

export async function load() {
	const { data } = await supabase.from('temptest').select();
	return {
		tempies: data ?? []
	};
}
