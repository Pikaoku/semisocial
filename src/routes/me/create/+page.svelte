<script>
	import { getSupabase } from '$lib/helpers/auth';

	const supabase = getSupabase();

	let email = '';
	let password = '';

	const createAccount = async () => {
		const supabase = getSupabase();
		if (email && password) {
			const { error, data } = await supabase.auth.signUp({
				email,
				password
			});
			if (error) {
				console.error('error', error);
			} else {
				console.log('success data', data);
			}
		}
	};
</script>

<!-- <div class="flex flex-row gap-4">
	<input
		class="bg-black/30 rounded-full w-full shadow-inner px-4 placeholder:font-light text-white placeholder:text-white/60 border-black/10 border-2"
		placeholder="Search contacts or events"
	/>
	<div class="rounded-full bg-cyan-300 w-8 aspect-square flex justify-center items-center">
		<div>SM</div>
	</div>
</div> -->
<div class="my-auto text-center text-white flex flex-col gap-4 tracking-wide p-4">
	<h1 class="text-6xl mx-auto text-white font-header antialiased">semisocial</h1>
	<div>
		<p class="text-lg text-white">lets create your account</p>
	</div>
	<form class="flex flex-col gap-4" on:submit={createAccount}>
		<label>
			<div class="mb-1">email</div>
			<input type="email" class="rounded-full bg-white/60 p-2 w-full" bind:value={email} />
		</label>
		<label>
			<div class="mb-1">password</div>
			<input type="password" class="rounded-full bg-white/60 p-2 w-full" bind:value={password} />
		</label>
		<button
			type="submit"
			class="bg-pink-600 rounded-full mx-auto px-8 py-2 shadow-sm hover:brightness-105 active:bg-pink-500 text-white font-header text-2xl tracking-wide cursor-pointer"
			>CREATE</button
		>
	</form>

	<div>
		<p class="">already have an account?</p>
		<a href="/me/login" class="text-pink-300 underline">login</a>
	</div>
</div>
