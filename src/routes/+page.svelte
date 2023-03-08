<script lang="ts">
	import type { PageData } from './$types';
	export let data: PageData;
	let selectedSuspect;
</script>

{#if data.status == 0}
	<h1 class="text-center">Merci de vous être connecté sur cette page.</h1>
	<h1 class="text-center">Conservez-la ouverte.</h1>
	<h1 class="text-center">Vous l'utiliserez plus tard pour voter.</h1>
	<img src="impropulsion.jpg" />
{:else}
	<h1 class="text-center">Qui est l'assassin ?</h1>

	<ul class="grid gap-6 w-full md:grid-cols-3">
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
						<!-- {suspect.name} -->
						<img src={suspect.picture_data} alt={suspect.name} />
					</div>
				</label>
			</li>
		{/each}
	</ul>
	<div class="mt-10" />

	<form method="POST" action="?/vote">
		<input type="hidden" name="selectedSuspect" value={selectedSuspect} />
		<button
			class="nicebutton w-full text-center"
			disabled={!selectedSuspect}
			type="submit"><div class="w-full">Voter</div></button
		>
	</form>
{/if}
