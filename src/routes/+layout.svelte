<script>
	import '../app.css';
</script>

<div class="min-h-screen flex flex-col md:justify-center md:items-center">
	<div
		class="bg-pink-400 w-full h-screen md:h-auto md:aspect-[9/16] max-w-md p-2 md:rounded md:shadow overflow-y-scroll"
	>
		<slot />
	</div>
</div>

<style lang="postcss">
	:global(body) {
		@apply bg-pink-800;
	}
</style>
