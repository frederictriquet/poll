<script lang="ts">
	import type { PageData } from './$types';
	export let data: PageData;

	import Graph from '$lib/Graph.svelte';
	let width = 500;
	let height = 200;
</script>

<div>
	<a data-sveltekit-reload href="/results"
		><button class="nicebutton">Recharger les résultats</button></a
	>
</div>
<h1 class="text-center">Votes pour l'assassin</h1>
<Graph {width} {height} points={data.suspects} />

<h1 class="text-center mt-5">Votes pour le lieu</h1>
<Graph {width} {height} points={data.rooms} />

<style>
	div {
		@apply text-center;
	}
</style>
