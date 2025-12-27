export type Lang = 'en' | 'fr';

type NavLink = {
	label: string;
	path: string;
};

const translations = {
	en: {
		nav: {
			links: [
				{ label: 'Home', path: '/' },
				{ label: 'Work', path: '/work/' },
				{ label: 'About', path: '/about/' },
			] satisfies NavLink[],
			langToggleLabel: 'Switch language',
		},
		home: {
			metaTitle: 'AI-Phil Consulting | Applied AI Strategy',
			metaDescription:
				'Philosophy-informed AI consulting for leaders who need clarity, governance, and measurable value.',
			heroTitle: 'AI-Phil Consulting',
			heroTagline: 'Philosophy-led AI and data strategy for regulated, mission-driven teams.',
			heroImageAlt: 'Jeanine White smiling in a red plaid shirt and tortoise shell glasses',
			roles: [
				{ icon: 'code', label: 'Technical Advisor' },
				{ icon: 'microphone-stage', label: 'Keynote Speaker' },
				{ icon: 'pencil-line', label: 'Author' },
			],
			skills: [
				{
					icon: 'terminal-window',
					title: 'Full-stack research',
					description: 'Translate analytic philosophy into pragmatic models, audits, and governance.',
				},
				{
					icon: 'trophy',
					title: 'Industry leadership',
					description: 'Trusted by healthcare, finance, and public entities to guide AI adoption.',
				},
				{
					icon: 'strategy',
					title: 'Strategy-minded delivery',
					description: 'Turn pilot programs into production systems that create measurable ROI.',
				},
			],
			selectedWork: {
				title: 'Consulting highlights',
				description: 'Featured client work that blends philosophy, AI research, and operations.',
				cta: 'View all projects',
			},
			mentions: {
				title: 'Press & mentions',
				description: 'Select outlets and conferences that have referenced our work.',
				brands: ['Medium', 'BuzzFeed', 'The Next Web', 'awwwards.', 'TechCrunch'],
			},
		},
		work: {
			metaTitle: 'Client Work | AI-Phil Consulting',
			metaDescription: 'Explore recent AI-Phil Consulting projects and transformation programs.',
			heroTitle: 'Client work',
			heroTagline: 'Snapshots of advisory engagements and delivery roadmaps.',
			backLinkLabel: 'Back to work',
		},
		about: {
			metaTitle: 'About | AI-Phil Consulting',
			metaDescription: 'Learn more about Jeanine White and the philosophy-forward practice.',
			heroTitle: 'About',
			heroTagline: 'Philosophy PhD turned AI strategist building ethical, scalable systems.',
			heroImageAlt: 'Jeanine White collaborating with a colleague in the studio',
			sections: [
				{
					title: 'Background',
					paragraphs: [
						'I advise leadership teams on how to align AI initiatives with organizational values, regulatory expectations, and measurable outcomes.',
						'Before founding AI-Phil Consulting I led research labs translating normative theory into trustworthy automation for public agencies and Fortune 500 companies.',
					],
				},
				{
					title: 'Education',
					paragraphs: [
						'Ph.D. in Philosophy, University of British Columbia — focus on logic, ethics, and philosophy of mind.',
						'Certified in Responsible AI Leadership, MIT Sloan & CSAIL collaborative program.',
					],
				},
				{
					title: 'Capabilities',
					paragraphs: [
						'Executive facilitation, AI readiness assessments, governance design, model risk reviews, and policy translation into operating procedures.',
					],
				},
			],
		},
		contact: {
			heading: 'Interested in working together?',
			cta: 'Send me a message',
		},
		footer: {
			tagline: 'Designed & developed in Portland with Astro',
			owner: 'Jeanine White',
		},
		notFound: {
			metaTitle: 'Page not found',
			metaDescription: '404 error — page not found',
			heroTitle: 'Page not found',
			heroTagline: 'The page you were looking for has moved or no longer exists.',
		},
	},
	fr: {
		nav: {
			links: [
				{ label: 'Accueil', path: '/' },
				{ label: 'Réalisations', path: '/work/' },
				{ label: 'À propos', path: '/about/' },
			] satisfies NavLink[],
			langToggleLabel: 'Changer de langue',
		},
		home: {
			metaTitle: 'AI-Phil Consulting | Stratégie IA appliquée',
			metaDescription:
				'Conseil en IA inspiré de la philosophie pour des dirigeant·es qui exigent rigueur, gouvernance et impact mesurable.',
			heroTitle: 'AI-Phil Consulting',
			heroTagline: 'Une stratégie IA et data éclairée par la philosophie pour les organisations régulées.',
			heroImageAlt: 'Jeanine White sourit en chemise à carreaux rouges et lunettes écaille.',
			roles: [
				{ icon: 'code', label: 'Conseillère technique' },
				{ icon: 'microphone-stage', label: 'Conférencière' },
				{ icon: 'pencil-line', label: 'Autrice' },
			],
			skills: [
				{
					icon: 'terminal-window',
					title: 'Recherche complète',
					description: 'Transformer la philosophie analytique en modèles, audits et règles concrètes.',
				},
				{
					icon: 'trophy',
					title: 'Leadership sectoriel',
					description: 'Référente pour la santé, la finance et le secteur public sur l’adoption de l’IA.',
				},
				{
					icon: 'strategy',
					title: 'Livrables stratégiques',
					description: 'Convertir les pilotes en systèmes en production avec retour sur investissement mesurable.',
				},
			],
			selectedWork: {
				title: 'Études de cas',
				description: 'Réalisations emblématiques où se rencontrent philosophie, IA et opérations.',
				cta: 'Voir tous les projets',
			},
			mentions: {
				title: 'Revue de presse',
				description: 'Sélection de médias et d’événements qui citent notre travail.',
				brands: ['Medium', 'BuzzFeed', 'The Next Web', 'awwwards.', 'TechCrunch'],
			},
		},
		work: {
			metaTitle: 'Réalisations | AI-Phil Consulting',
			metaDescription: 'Parcourez les récents projets et programmes de transformation AI-Phil Consulting.',
			heroTitle: 'Réalisations',
			heroTagline: 'Instantanés d’accompagnements stratégiques et de feuilles de route.',
			backLinkLabel: 'Retour aux projets',
		},
		about: {
			metaTitle: 'À propos | AI-Phil Consulting',
			metaDescription: 'Découvrez le parcours de Jeanine White et l’approche philosophie + IA.',
			heroTitle: 'À propos',
			heroTagline: 'Docteure en philosophie devenue stratège IA pour des systèmes éthiques et scalables.',
			heroImageAlt: 'Jeanine White collabore avec une collègue au studio',
			sections: [
				{
					title: 'Parcours',
					paragraphs: [
						'J’accompagne les équipes dirigeantes pour aligner les initiatives IA sur leurs valeurs, les cadres réglementaires et les indicateurs business.',
						'Avant AI-Phil Consulting, j’ai piloté des laboratoires de recherche qui traduisaient la théorie normative en automatisations fiables pour des agences publiques et le Fortune 500.',
					],
				},
				{
					title: 'Formation',
					paragraphs: [
						'Ph. D. en philosophie, University of British Columbia — logique, éthique et philosophie de l’esprit.',
						'Certification Responsible AI Leadership, programme conjoint MIT Sloan & CSAIL.',
					],
				},
				{
					title: 'Expertises',
					paragraphs: [
						'Animation exécutive, diagnostics de maturité IA, conception de gouvernance, audits de risque modèle et traduction des politiques en procédures opérationnelles.',
					],
				},
			],
		},
		contact: {
			heading: 'Envie de collaborer ?',
			cta: 'Écrivez-moi',
		},
		footer: {
			tagline: 'Conçu et développé à Portland avec Astro',
			owner: 'Jeanine White',
		},
		notFound: {
			metaTitle: 'Page introuvable',
			metaDescription: 'Erreur 404 — page introuvable',
			heroTitle: 'Page introuvable',
			heroTagline: 'La page demandée a été déplacée ou n’existe plus.',
		},
	},
} as const;

export type Translations = (typeof translations)[Lang];

export function t(lang: Lang): Translations {
	return translations[lang];
}

export function getLangFromPath(pathname: string): Lang {
	return pathname === '/fr' || pathname.startsWith('/fr/') ? 'fr' : 'en';
}

export function stripLangPrefix(pathname: string): string {
	if (pathname === '/fr') return '/';
	if (pathname.startsWith('/fr/')) return pathname.replace('/fr', '') || '/';
	return pathname || '/';
}

export function withLangPrefix(lang: Lang, path: string): string {
	if (!path.startsWith('/')) {
		throw new Error(`withLangPrefix expects an absolute path. Received: ${path}`);
	}
	if (lang === 'fr') {
		if (path === '/' || path === '') return '/fr';
		if (path.startsWith('/fr')) return path;
		return `/fr${path}`;
	}
	return path === '' ? '/' : path;
}
