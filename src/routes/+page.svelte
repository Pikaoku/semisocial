<script>
	export let data;

	$: console.log('session', data.session);
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
<div class="my-auto text-center text-white flex flex-col gap-4 tracking-wide">
	<h1 class="text-6xl mx-auto text-white font-header">semisocial</h1>
	<div>
		<p class="text-lg text-white">struggling to keep up with old friends?</p>

		<p class="text-white">let us do the hard work</p>
	</div>

	<a
		href="/me/create"
		class="bg-pink-600 rounded-full mx-auto px-8 py-2 shadow-sm hover:brightness-105 active:bg-pink-500 text-white font-header text-2xl tracking-wide cursor-pointer"
		>GET STARTED</a
	>
	<div>
		<p class="">already have an account?</p>
		<a href="/me/login" class="text-pink-300 underline">login</a>
	</div>
</div>
