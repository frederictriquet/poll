<script lang="ts">
	import HomeLink from '$lib/HomeLink.svelte';
	import type { PageData } from './$types';
	export let data: PageData;
</script>

<HomeLink />

<div class="overflow-x-auto relative shadow-md sm:rounded-lg">
	<table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
		<thead class="text-xs text-gray-700 bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
			<tr>
				<th class="py-3 px-6">Nom</th>
				<th>Votes</th>
				<th
					><form method="POST" action="?/restVotesForSuspects">
						<button class="nice">Reset Votes</button>
					</form></th
				>
			</tr>
			{#each data.suspects as suspect}
				<tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
					<td class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
						>{suspect.name}</td
					>
					<td>{suspect.votes}</td>
					<td
						><form method="POST" action="?/deleteSuspect">
							<input type="hidden" name="id" value={suspect.id} /><button class="nice"
								>delete</button
							>
						</form></td
					>
				</tr>
			{/each}
		</thead>
	</table>
</div>
<form method="POST" action="?/createSuspect">
	<div class="flex">
		<label>
			<input type="text" name="name" placeholder="Nom du suspect" required />
		</label>
		<button class="nice">Ajouter suspect</button>
	</div>
</form>

<div class="overflow-x-auto relative shadow-md sm:rounded-lg mt-10">
	<table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
		<thead class="text-xs text-gray-700 bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
			<tr>
				<th class="py-3 px-6">Nom</th>
				<th>Votes</th>
				<th
					><form method="POST" action="?/restVotesForRooms">
						<button>Reset Votes</button>
					</form></th
				>
			</tr>
			{#each data?.rooms as room}
				<tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
					<td class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
						>{room.name}</td
					>
					<td>{room.votes}</td>
					<td
						><form method="POST" action="?/deleteRoom">
							<input type="hidden" name="id" value={room.id} /><button>delete</button>
						</form></td
					>
				</tr>
			{/each}
		</thead>
	</table>
</div>

<form method="POST" action="?/createRoom">
	<div class="flex">
		<label>
			<input
				type="text"
				name="name"
				class="bg-gray-50 h-full border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
				placeholder="Nom de la pièce"
				required
			/>
		</label>
		<button class="nice">Ajouter une pièce</button>
	</div>
</form>

<style>
	button {
		@apply text-white;
		@apply mb-0;
		@apply mt-0;
		@apply bg-blue-700;
		@apply font-medium;
		@apply rounded-lg;
		@apply text-sm;
		@apply px-5;
		@apply py-2.5;
		@apply text-center;
	}
	input {
		@apply bg-gray-50;
		@apply px-2;
		@apply h-full;
		@apply border;
		@apply border-gray-300;
		@apply text-gray-900;
		@apply text-sm;
		@apply rounded-lg;
		/* @apply focus:ring-blue-500;
		@apply focus:border-blue-500; */
		@apply block;
		@apply bg-gray-700;
		@apply border-gray-600;
		@apply placeholder-gray-400;
		@apply text-white;
		/* @apply focus:ring-blue-500; */
		/* @apply dark:focus:border-blue-500; */
	}
</style>
