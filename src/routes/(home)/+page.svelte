<script lang="ts">
	import type { Writable } from 'svelte/store';
	import Navbar from './components/Navbar.svelte';
	import { getContext } from 'svelte';
	import AddWord from './components/AddWord.svelte';
	import * as Card from '$lib/components/ui/card';
	import type { WordType } from '$lib/store/words';
	import moment from 'moment';

	const words = getContext('words') as Writable<WordType[]>;
	let search = '';

	$: filteredWords = $words.filter((word) => {
		if (search.trim() === '') {
			return true;
		}
		return (
			word.word.toLowerCase().includes(search.toLowerCase()) ||
			word.description.toLowerCase().includes(search.toLowerCase())
		);
	});
</script>

<div class="w-full max-w-5xl mx-auto mt-3 flex flex-col px-3 lg:px-0">
	<Navbar />
	<AddWord bind:search />
	<div class="mt-3 grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-3">
		{#each filteredWords as word}
			<Card.Root class="max-w-[250px]">
				<Card.Header>
					<Card.Title>
						{word.word}
					</Card.Title>
					<Card.Description>{word.description}</Card.Description>
				</Card.Header>
				<Card.Footer>
					<p class="text-[12px] ms-auto">{moment(word.addedOn).fromNow()}</p>
				</Card.Footer>
			</Card.Root>
		{/each}
	</div>
</div>
