import type { PageLoad } from './$types';

export const load = (async (data) => {
	const texts = [
		'Le vote est en cours...',
		'Quel suspense insoutenable !',
		"Mais qui peut bien être l'assassin ?",
		'Bientôt le dénouement de cette histoire incroyable.'
	];

    console.dir(data.data);

	return { ...data.data, text: texts[Math.floor(Math.random() * texts.length)] };
}) satisfies PageLoad;
