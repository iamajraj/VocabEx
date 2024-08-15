<script lang="ts">
	import './app.css';

	import { setContext, onMount } from 'svelte';
	import { writable } from 'svelte/store';

	const words = writable<string[]>([]);
	setContext('words', words);

	onMount(() => {
		let storedWords = localStorage.getItem('words');
		const parsedWords = storedWords ? (JSON.parse(storedWords) as string[]) : [];
		words.set(parsedWords);
	});
</script>

<slot />
