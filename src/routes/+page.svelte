<script>
	import Toast from '$lib/components/Toast.svelte';
	/**
	 * @type {{ fact: string; }}
	 */
	export let data;
	let loading = false;
	/**
	 * @type {string}
	 */
	let message;
	async function getFact() {
		loading = true;
		const response = await fetch('https://catfact.ninja/fact');
		const fact = await response.json();
		data = fact;
		loading = false;
	}

	async function copy() {
		navigator.clipboard.writeText(data.fact);
		message = 'Copied';
	}
</script>

<div>
	<button
		class="bg-violet-900 rounded-full py-2 px-4 flex justify-center items-center space-x-1 text-white mx-auto mb-4 hover:bg-violet-700 active:ring-2 active:ring-offset-2 active:ring-violet-700 active:ring-offset-cyan-100"
		on:click={getFact}
	>
		{#if loading === true}
			<span>Loading...</span>
			<svg
				class="animate-spin w-5 h-5"
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
			>
				<circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" />
				<path
					class="opacity-75"
					fill="currentColor"
					d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
				/>
			</svg>
		{:else}
			<span>New Fact</span>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				stroke-width="1.5"
				stroke="currentColor"
				class="w-5 h-5"
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18"
				/>
			</svg>
		{/if}
	</button>
	<div class="bg-white rounded-lg bg-opacity-60 shadow-lg p-6 relative">
		<button
			on:click={copy}
			class="absolute top-2 right-2 p-1 text-violet-900 hover:text-violet-700 active:ring-2 active:ring-violet-900 active:ring-offset-2 rounded-lg"
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				stroke-width="2"
				stroke="currentColor"
				class="w-4 h-4"
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					d="M15.666 3.888A2.25 2.25 0 0013.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 01-.75.75H9a.75.75 0 01-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 01-2.25 2.25H6.75A2.25 2.25 0 014.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 011.927-.184"
				/>
			</svg>
		</button>
		<p class="text-xl font-medium text-center">
			{#if loading === true}
				<svg
					class="animate-spin w-5 h-5 block mx-auto"
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
				>
					<circle
						class="opacity-25"
						cx="12"
						cy="12"
						r="10"
						stroke="currentColor"
						stroke-width="4"
					/>
					<path
						class="opacity-75"
						fill="currentColor"
						d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
					/>
				</svg>
			{:else}
				{@html data.fact}
			{/if}
		</p>
	</div>

	{#if message}
		<Toast {message} />
	{/if}
</div>
