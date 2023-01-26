<script lang="ts">
	import type { PageData } from './$types';
	export let data: PageData;

	import Graph from '$lib/Graph.svelte';
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
	<h1 class="text-center">Votes pour l'assassin</h1>
	<Graph {width} {height} points={data.suspects} />

	<h1 class="text-center mt-5">Votes pour le lieu</h1>
	<Graph {width} {height} points={data.rooms} />
{/if}

<style>
	div {
		@apply text-center;
	}
</style>
