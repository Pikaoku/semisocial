import { page } from '$app/stores';
import type { SupabaseClient } from '@supabase/supabase-js';
import { get } from 'svelte/store';

export const getSupabase = (): SupabaseClient => {
	return get(page).data.supabase;
};

export const getSession = async () => {
	const supabase = getSupabase();
	const { data } = await supabase.auth.getSession();
	return data;
};
