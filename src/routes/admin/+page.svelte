<script lang="ts">
	import type { PageData } from './$types';
	export let data: PageData;
</script>

<div class="overflow-x-auto relative shadow-md sm:rounded-lg">
	<table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
		<thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
			<tr>
				<th class="py-3 px-6">Nom</th>
				<th>Votes</th>
				<th />
			</tr>
			{#each data.suspects as suspect}
				<tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
					<td class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
						>{suspect.name}</td
					>
					<td>{suspect.votes}</td>
					<td
						><form method="POST" action="?/deleteSuspect">
							<input type="hidden" name="id" value={suspect.id} /><button>delete</button>
						</form></td
					>
				</tr>
			{/each}
		</thead>
	</table>
</div>
<form method="POST" action="?/createSuspect">
	<div class="flex">
		<label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
			Nom
			<input
				type="text"
				name="name"
				class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
				placeholder="Nom du suspect"
				required
			/>
		</label>
		<button
			class="text-white mb-2 mt-5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
			>Ajouter suspect</button
		>
	</div>
</form>

<div class="overflow-x-auto relative shadow-md sm:rounded-lg mt-10">
	<table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
		<thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
			<tr>
				<th class="py-3 px-6">Nom</th>
				<th>Votes</th>
				<th />
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
		<label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
			Nom
			<input
				type="text"
				name="name"
				class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
				placeholder="Nom de la pièce"
				required
			/>
		</label>
		<button
			class="text-white mb-2 mt-5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
			>Ajouter une pièce</button
		>
	</div>
</form>
