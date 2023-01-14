<script>
	/**
	 * @type {String}
	 */
	export let message;
</script>

<div
	class="fixed top-4 right-4 p-2 bg-green-200 text-green-900 text-sm rounded-lg flex items-center"
>
	<p class="inline-flex justify-center items-center">
		<svg
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 24 24"
			stroke-width="2"
			stroke="currentColor"
			class="w-5 h-5 mr-2"
		>
			<path
				stroke-linecap="round"
				stroke-linejoin="round"
				d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
			/>
		</svg>
		{message}
	</p>
</div>
