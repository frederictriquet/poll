<script lang="ts">
	import type { PageData } from './$types';
	export let data: PageData;
	let selectedSuspect;
	let selectedRoom;
</script>

<h1 class="text-center">Qui est l'assassin ?</h1>

<ul class="grid gap-6 w-full md:grid-cols-2">
	{#each data.suspects as suspect}
		<li>
			<input
				id="suspect{suspect.id}"
				type="radio"
				class="hidden peer"
				bind:group={selectedSuspect}
				value={suspect.id}
			/>
			<label for="suspect{suspect.id}" class="nicebutton w-full">
				<div class="w-full text-lg font-semibold text-center">
					{suspect.name}
				</div>
			</label>
		</li>
	{/each}
</ul>

<h1 class="text-center mt-10">
	Dans quelle pièce le crime a-t-il été commis ?
</h1>

<ul class="grid gap-6 w-full md:grid-cols-2">
	{#each data.rooms as room}
		<li>
			<input
				id="room{room.id}"
				type="radio"
				class="hidden peer"
				bind:group={selectedRoom}
				value={room.id}
			/>
			<label for="room{room.id}" class="nicebutton w-full">
				<div class="w-full text-lg font-semibold text-center">
					{room.name}
				</div>
			</label>
		</li>
	{/each}
</ul>

<div class="mt-10"/>

<form method="POST" action="?/vote">
	<input type="hidden" name="selectedSuspect" value={selectedSuspect} />
	<input type="hidden" name="selectedRoom" value={selectedRoom} />
	<button class="nicebutton w-full text-center" disabled={!selectedSuspect || !selectedRoom} type="submit"><div class="w-full">Voter</div></button>
</form>

