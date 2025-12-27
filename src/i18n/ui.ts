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
				//{ label: 'Work', path: '/work/' },
				{ label: 'About', path: '/about/' },
			] satisfies NavLink[],
			langToggleLabel: 'Switch language',
		},
		home: {
			metaTitle: 'AI-Phil Consulting | Making sense of AI',
			metaDescription:
				'Helping organisations make sense of AI — its capabilities, limits, and responsible use.',
			heroTitle: 'AI-Phil Consulting',
			heroTagline: 'Helping organisations make sense of AI.',
			heroImageAlt: 'Abstract illustration representing artificial intelligence and collective understanding',
			roles: [
				  { icon: 'microphone-stage', label: 'Talks & Public Interventions' },
  				  { icon: 'rocket', label: 'Training & Interactive Sessions' },
  				  { icon: 'list', label: 'Advisory Reports ' },
			],
			skills: [
				{
					icon: 'code',
					title: 'Conceptual clarity',
					description:
					'Clarifying what AI is, what it can do, and where its limits lie — drawing on philosophy, computer science, and current research.',
				},
				{
					icon: 'users-four',
					title: 'Collective sense-making',
					description:
					'Facilitating discussions, trainings, and interactive formats that help organisations build a shared understanding of AI.',
				},
				{
					icon: 'strategy',
					title: 'Context-aware guidance',
					description:
					'Situating AI technologies within organisational, social, and technical contexts to support informed and responsible use.',
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
			metaDescription: 'AI-Phil Consulting is a practice focused on helping organisations understand and navigate artificial intelligence.',
			heroTitle: 'About',
			heroTagline:
				'A practice at the intersection of artificial intelligence, philosophy, and collective understanding.',

			heroImageAlt:
				'Abstract illustration representing dialogue, reflection, and artificial intelligence',

			sections: [
				{
				title: 'What this practice is',
				paragraphs: [
					'AI-Phil Consulting is a practice dedicated to helping organisations make sense of artificial intelligence — what it is, what it can do, and where its limits lie.',
					'Rather than promoting tools or solutions, the focus is on understanding, orientation, and informed decision-making in contexts shaped by rapid AI adoption.',
				],
				},
				{
				title: 'How we approach AI',
				paragraphs: [
					'Our work draws on multiple traditions, including computer science, philosophy, and interdisciplinary research on technology and society.',
					'We privilege clarity over hype, dialogue over prescription, and contextual understanding over one-size-fits-all answers.',
				],
				},
				{
				title: 'A collaborative structure',
				paragraphs: [
					'AI-Phil Consulting operates as a flexible and collaborative structure.',
					'Depending on the mission, we may work independently or involve trusted collaborators from academic, technical, or professional networks, in order to address specific questions or contexts.',
				],
				},
			],
		},
		contact: {
			heading: 'Interested in working together?',
			cta: 'Get in touch',
		},
		footer: {
			tagline: 'Designed & developed in Paris with ',
			owner: 'All rights reserved.',
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
      //{ label: 'Travaux', path: '/work/' },
      { label: 'À propos', path: '/about/' },
    ] satisfies NavLink[],
    langToggleLabel: 'Changer de langue',
  },

  home: {
    metaTitle: 'AI-Phil Consulting | Comprendre l’IA',
    metaDescription:
      'Aider les organisations à comprendre l’IA — ses capacités, ses limites et ses usages responsables.',

    heroTitle: 'AI-Phil Consulting',
    heroTagline: 'Aider les organisations à comprendre l’IA.',
    heroImageAlt:
      'Illustration abstraite représentant l’intelligence artificielle et la compréhension collective',

    roles: [
      { icon: 'microphone-stage', label: 'Conférences & interventions publiques' },
      { icon: 'rocket', label: 'Formations & formats interactifs' },
      { icon: 'list', label: 'Rapports de conseil' },
    ],

    skills: [
      {
        icon: 'code',
        title: 'Clarté conceptuelle',
        description:
          'Clarifier ce qu’est l’IA, ce qu’elle permet — et ses limites — en s’appuyant sur la philosophie, l’informatique et la recherche actuelle.',
      },
      {
        icon: 'users-four',
        title: 'Construction collective de sens',
        description:
          'Animer des discussions, formations et formats interactifs afin d’aider les organisations à construire une compréhension partagée de l’IA.',
      },
      {
        icon: 'strategy',
        title: 'Accompagnement contextualisé',
        description:
          'Situer les technologies d’IA dans leurs contextes organisationnels, sociaux et techniques afin de favoriser des usages éclairés et responsables.',
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
			metaDescription:
				'AI-Phil Consulting est une pratique dédiée à l’accompagnement des organisations dans la compréhension et l’appropriation de l’intelligence artificielle.',

			heroTitle: 'À propos',
			heroTagline:
				'Une pratique à l’intersection de l’intelligence artificielle, de la philosophie et de la compréhension collective.',

			heroImageAlt:
				'Illustration abstraite représentant le dialogue, la réflexion et l’intelligence artificielle',

			sections: [
				{
				icon: 'strategy',
				title: 'Notre mission',
				paragraphs: [
					'AI-Phil Consulting est une pratique dédiée à aider les organisations à comprendre l’intelligence artificielle — ce qu’elle est, ce qu’elle permet et où se situent ses limites.',
					
				],
				},
				{
				icon: 'code',
				title: 'Notre approche',
				paragraphs: [
					'Nous adoptons une approche interdisciplinaire, notamment à la croisée de l’informatique, la philosophie et l\'impact éthique de l\'IA.',
					'Nous privilégions la clarté aux effets d’annonce, le dialogue à la prescription, et la compréhension contextuelle aux réponses standardisées.',
				],
				},
				{
				icon: 'microphone-stage',
				title: 'Une structure collaborative',
				paragraphs: [
					'AI-Phil Consulting fonctionne comme une structure souple et collaborative.',
					'Selon les missions, nous pouvons intervenir de manière autonome ou faire appel à des collaborateurs de confiance issus de réseaux académiques, techniques ou professionnels, afin de répondre à des questions ou des contextes spécifiques.',
				],
				},
			],
			},
			contact: {
			heading: 'Intéressé·e par une collaboration ?',
			cta: 'Nous contacter',
			},
		footer: {
			tagline: 'Conçu et développé à Paris avec ',
			owner: 'Tous droits réservés.',
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
