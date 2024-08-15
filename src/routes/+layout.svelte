<script lang="ts">
	import './app.css';
	import { words, type WordType } from '$lib/store/words';
	import { Toaster } from '$lib/components/ui/sonner';

	import { setContext, onMount } from 'svelte';

	setContext('words', words);

	onMount(() => {
		let storedWords = localStorage.getItem('words');
		const parsedWords = storedWords ? (JSON.parse(storedWords) as WordType[]) : [];
		words.set(parsedWords);
	});
</script>

<Toaster />
<slot />
