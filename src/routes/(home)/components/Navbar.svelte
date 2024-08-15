<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import * as Dialog from '$lib/components/ui/dialog';

	let open: boolean = false;

	const openAbout = () => {
		open = true;
	};
</script>

<nav class="border-b pb-3 flex justify-between items-center">
	<a href="/" class="text-lg font-bold">Vocab<span class="text-blue-500">Ex</span></a>
	<ul class="flex items-center gap-3 text-sm font-medium">
		<li>
			<Button variant="outline" on:click={openAbout}>About</Button>
		</li>
		<li>
			<a href="https://github.com/iamajraj" target="_blank">@iamajraj</a>
		</li>
	</ul>
</nav>

<Dialog.Root bind:open>
	<Dialog.Content>
		<Dialog.Header>
			<Dialog.Title>About</Dialog.Title>
			<Dialog.Description>
				This is a simple vocabulary app. You can add words that you want to remember. You can also
				search for words.
			</Dialog.Description>
		</Dialog.Header>
		<Dialog.Footer>
			<a href="https://github.com/iamajraj/vocabex" target="_blank">
				<Button variant="outline">View Source</Button>
			</a>
		</Dialog.Footer>
	</Dialog.Content>
</Dialog.Root>
