<script lang="ts">
	import type { PageData } from './$types';
	export let data: PageData;

	import Graph from '$lib/Graph.svelte';
	import Podium from '$lib/Podium.svelte';
	let width = 500;
	let height = 200;
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
