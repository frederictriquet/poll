<script lang="ts">
	import type { PageData } from './$types';
	export let data: PageData;

	import Graph from '$lib/Graph.svelte';
	let width = 500;
	let height = 200;
</script>

<h1 class="text-center">Votes pour l'assassin</h1>
<Graph {width} {height} points={data.suspects} />

<h1 class="text-center mt-5">Votes pour le lieu</h1>
<Graph {width} {height} points={data.rooms} />
