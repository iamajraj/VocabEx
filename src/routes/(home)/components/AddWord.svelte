<script lang="ts">
	import { storeWords } from '$lib';
	import { Button, buttonVariants } from '$lib/components/ui/button';
	import * as Dialog from '$lib/components/ui/dialog';
	import { Input } from '$lib/components/ui/input';
	import { Label } from '$lib/components/ui/label';
	import { Textarea } from '$lib/components/ui/textarea';
	import { words, type WordType } from '$lib/store/words';
	import { cn } from '$lib/utils';
	import { toast } from 'svelte-sonner';

	export let search: string;
	let word: string = '';
	let description: string = '';
	let open: boolean;

	const saveWord = () => {
		if (word.trim() === '' || description.trim() === '') {
			toast.error('Please enter a word and description');
		} else {
			let data: WordType = { word, description, addedOn: new Date() };
			words.update((w) => [data, ...w]);
			storeWords($words);
			open = false;
			word = '';
			description = '';
			toast.success('Word added successfully');
		}
	};
</script>

<div class="w-full flex gap-2 mt-3">
	<div class="w-full flex items-center gap-2">
		<Label>Search</Label>
		<Input class="flex-1" bind:value={search} placeholder="e.g hello" />
	</div>
	<Dialog.Root bind:open>
		<Dialog.Trigger class={cn(buttonVariants({ variant: 'default' }), 'ms-auto')}>
			Add Word
		</Dialog.Trigger>
		<Dialog.Content>
			<Dialog.Header>
				<Dialog.Title>Add New Word to your Vocabulary</Dialog.Title>
				<Dialog.Description>This will add a new word to your vocabulary.</Dialog.Description>
			</Dialog.Header>
			<div class="grid gap-4 py-4">
				<div class="grid grid-cols-4 items-center gap-4">
					<Label for="name" class="text-right">Word</Label>
					<Input id="name" bind:value={word} class="col-span-3" placeholder="e.g hello" />
				</div>
				<div class="grid grid-cols-4 items-center gap-4">
					<Label for="description" class="text-right">Description</Label>
					<Textarea
						id="description"
						bind:value={description}
						class="col-span-3"
						placeholder="About the word"
					/>
				</div>
			</div>
			<Dialog.Footer>
				<Button on:click={saveWord}>Add</Button>
			</Dialog.Footer>
		</Dialog.Content>
	</Dialog.Root>
</div>
