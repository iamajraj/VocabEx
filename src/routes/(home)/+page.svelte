<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import type { Writable } from 'svelte/store';
	import Navbar from './components/Navbar.svelte';
	import { getContext } from 'svelte';

	const words = getContext('words') as Writable<string[]>;
</script>

<div class="w-full max-w-5xl mx-auto mt-3 flex flex-col">
	<Navbar />
	<Button class="mt-3 ms-auto">Add Word</Button>
	<div class="mt-3">
		{#each $words as word}
			<p>{word}</p>
		{/each}
	</div>
</div>
