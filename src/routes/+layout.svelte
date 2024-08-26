<script>
	import '../app.css';

	import { invalidate } from '$app/navigation';
	import { onMount } from 'svelte';

	export let data;
	$: ({ session, supabase } = data);

	onMount(() => {
		const { data } = supabase.auth.onAuthStateChange((_, newSession) => {
			if (newSession?.expires_at !== session?.expires_at) {
				invalidate('supabase:auth');
			}
		});

		return () => data.subscription.unsubscribe();
	});
</script>

<div class="min-h-screen flex flex-col md:justify-center md:items-center">
	<div
		class="bg-pink-800 w-full h-screen sm:h-auto sm:aspect-[9/16] max-w-md p-2 sm:rounded md:shadow overflow-y-scroll flex flex-col overflow-hidden"
	>
		<slot />
	</div>
</div>

<style lang="postcss">
	:global(body) {
		@apply bg-pink-900 font-body;
	}
</style>
