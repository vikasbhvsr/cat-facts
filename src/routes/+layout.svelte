<script>
	import '../app.css';
	import Header from '$lib/components/Header.svelte';
</script>

<div class="bg-gradient-to-r from-cyan-200 to-blue-200 min-h-screen">
	<Header />
	<main class="max-w-2xl mx-auto p-4">
		<slot />
	</main>
</div>
