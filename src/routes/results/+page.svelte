<script lang="ts">
	import type { PageData } from './$types';
	export let data: PageData;

	import Graph from '$lib/Graph.svelte';
	import Podium from '$lib/Podium.svelte';
	import { onDestroy, onMount } from 'svelte';
	let width = 500;
	let height = 200;

	let apiInterval;
	onMount(() => {
		apiInterval = setInterval(async () => {
			let statusResponse = await fetch('/api/status.json');
			const body = await statusResponse.json();
			// console.log(body.status, data.status);
			if (body.status != data.status) {
				// console.log('redirect');
				window.location.replace('/results');
			}
		}, 10000);
	});

	onDestroy(() => {
    clearInterval(apiInterval);
});
</script>

{#if data.status === 1}
	<div>
		<h1 class="text-center">Le vote n'est pas fini</h1>
		<h2 class="text-center">Déjà {data.nbVotes} vote{data.nbVotes>1 ? 's' : ''}</h2>
		<a data-sveltekit-reload href="/results"
			><button class="nicebutton">Rafraîchir la page</button></a
		>
	</div>
{:else if data.status === 2}
	<h1 class="text-center">La personne désignée par le public comme étant l'assassin est</h1>
	<Podium data={data.suspects?.sort((a,b) => b.votes - a.votes)[0]} />
	<Graph {width} {height} points={data.suspects} />
{/if}

<style type="postcss">
	div {
		@apply text-center;
	}
</style>
