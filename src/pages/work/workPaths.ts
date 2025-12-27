import { getCollection } from 'astro:content';

export async function getWorkStaticPaths() {
	const work = await getCollection('work');
	return work.map((entry) => ({
		params: { slug: entry.id },
		props: { entry },
	}));
}
