<script>
	import BlobbyBackground from '$lib/BlobbyBackground.svelte';
	import { page } from '$app/stores';
</script>

<div class="flex flex-row gap-4">
	<input
		class="bg-black/60 rounded-full w-full shadow-inner px-4 placeholder:font-light text-white"
		placeholder="Search contacts or events"
	/>
	<div class="rounded-full bg-cyan-300 w-8 aspect-square flex justify-center items-center">
		<div>SM</div>
	</div>
</div>
<h1 class="text-6xl font-bold">Upcoming</h1>

<BlobbyBackground />
