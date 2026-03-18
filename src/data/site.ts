import { getPermalink } from '~/utils/permalinks';

export const navLinks = [
  { text: 'Home', href: getPermalink('/') },
  { text: 'About', href: getPermalink('/about') },
  { text: 'Topics', href: getPermalink('/topics') },
  { text: 'Services', href: getPermalink('/services') },
  { text: 'Join us', href: getPermalink('/join-us') },
  { text: 'Contact', href: getPermalink('/contact') },
];

export const topicItems = [
  {
    title: 'What is AI?',
    description: 'Conceptual foundations, definitions, and the limits of current claims about artificial intelligence.',
    icon: 'tabler:brain',
  },
  {
    title: 'Ethical challenges of the AI revolution',
    description: 'Accountability, fairness, labour, power, and the social consequences of rapid deployment.',
    icon: 'tabler:scale',
  },
  {
    title: 'Responsible use of LLMs',
    description: 'Practical guidance for organisations working with generative systems in high-stakes contexts.',
    icon: 'tabler:message-2-check',
  },
  {
    title: 'Latest developments in AI',
    description: 'A clear reading of technical and policy shifts without hype or unnecessary jargon.',
    icon: 'tabler:radar-2',
  },
  {
    title: 'Artificial consciousness and digital minds',
    description: 'Philosophical and scientific perspectives on machine minds, sentience, and speculative futures.',
    icon: 'tabler:sparkles',
  },
  {
    title: 'AI and creativity',
    description: 'Questions of authorship, originality, cultural production, and creative work in the age of AI.',
    icon: 'tabler:palette',
  },
];

export const formatItems = [
  {
    title: 'Talks',
    description: 'Focused interventions for conferences, organisations, and internal learning events.',
    icon: 'tabler:microphone-2',
  },
  {
    title: 'Panels',
    description: 'Moderated and well-framed public or private discussions bringing multiple perspectives into view.',
    icon: 'tabler:users-group',
  },
  {
    title: 'Workshops',
    description: 'Structured sessions designed to help teams think carefully through AI-related questions.',
    icon: 'tabler:school',
  },
  {
    title: 'Advisory & Analysis',
    description: 'Independent guidance, research support, and concise written analysis for specific decisions.',
    icon: 'tabler:file-search',
  },
];

export const advisoryItems = [
  {
    title: 'Exploratory Advisory',
    description: 'Early-stage conversations to clarify concerns, frame questions, and identify the right lines of inquiry.',
  },
  {
    title: 'Targeted Analysis',
    description: 'Focused input on a defined issue, development, or use case with attention to practical implications.',
  },
  {
    title: 'Advisory + Memo',
    description: 'A short written synthesis combining discussion, analysis, and recommendations for internal use.',
  },
];

export const homeWisdoms = [
  {
    title: 'Critical Thinking',
    description: 'Humanity has accumulated a rich understanding of how knowledge and error are formed. Critical thinking begins with intellectual vigilance: ideas must be weighed carefully rather than accepted at face value, and tested against perspectives that challenge our assumptions.',
    icon: 'tabler:world',
  },
  {
    title: 'Interdisciplinary Perspectives',
    description: 'When knowledge comes from isolated sources, ideas quickly converge into echo chambers. By mapping broader epistemic networks, interdisciplinary perspectives expand the space in which critical thinking can operate.',
    icon: 'tabler:shield-check',
  },
  
  {
    title: 'Freedom of Inquiry',
    description: 'Sound judgment requires intellectual independence. When ideas are critically examined and situated within a broader constellation of knowledge, it becomes possible to form conclusions free from institutional or ideological pressures.',
    icon: 'tabler:binary-tree-2',
  },
];

export const whatWeDoItems = [
  {
    title: 'Research insights',
    icon: 'tabler:search',
  },
  {
    title: 'Conferences & workshops',
    icon: 'tabler:microphone-2',
  },
  {
    title: 'Advisory reports',
    icon: 'tabler:file-search',
  },
];

export const valuesItems = [
  {
    title: 'Intellectual independence',
    description: 'Analysis should remain clear-eyed, critical, and open to inconvenient conclusions.',
    icon: 'tabler:search',
  },
  {
    title: 'Curiosity',
    description: 'Good inquiry begins with careful questions rather than premature certainty.',
    icon: 'tabler:bulb',
  },
  {
    title: 'Integrity',
    description: 'Work should be rigorous, transparent about limits, and responsible in its claims.',
    icon: 'tabler:rosette-discount-check',
  },
  {
    title: 'Thoughtful dialogue',
    description: 'The most useful conversations about AI bring technical, ethical, and social concerns together.',
    icon: 'tabler:messages',
  },
];
