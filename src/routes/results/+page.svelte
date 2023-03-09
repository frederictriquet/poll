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
		console.log(data)
		apiInterval = setInterval(async () => {
			window.location.replace('/results');
		}, 5000);
	});

	onDestroy(() => {
		clearInterval(apiInterval);
	});
</script>

{#if data.status === 1}
	<div>
		<h1 class="text-center">{data.text}</h1>
		<h1 class="text-center">Déjà {data.nbVotes} vote{data.nbVotes > 1 ? 's' : ''}</h1>
		<img alt="Impropulsion" class="mx-auto w-96" src="impropulsion.jpg" />
	</div>
{:else if data.status === 2}
	<h1 class="text-center">La personne désignée par le public comme étant l'assassin est</h1>
	<Podium data={data.suspects?.sort((a, b) => b.votes - a.votes)[0]} />
	<Graph {width} {height} points={data.suspects} />
{/if}

<style type="postcss">
	div {
		@apply text-center;
	}
</style>
