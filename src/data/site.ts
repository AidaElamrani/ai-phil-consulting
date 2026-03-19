import { getPermalink } from '~/utils/permalinks';

export const navLinks = [
  { text: 'Home', href: getPermalink('/') },
  { text: 'About', href: getPermalink('/about') },
  { text: 'Topics', href: getPermalink('/topics') },
  { text: 'Services', href: getPermalink('/services') },
  { text: 'Join us', href: getPermalink('/join-us') },
];

export const topicItems = [
  {
    title: 'What is AI?',
    description:
      'A clear and structured introduction to the science and technology behind AI — from its historical development to current systems, methods, and applications.',
    icon: 'tabler:brain',
    availableAs: [
      { label: 'Talk', href: getPermalink('/services#talks') },
      { label: 'Workshop', href: getPermalink('/services#workshops') },
    ],
  },
  {
    title: 'Ethical Challenges of the AI Revolution',
    description:
      'An overview of the ethical questions raised by AI, including risks, opportunities, and the limits of current technical and institutional responses.',
    icon: 'tabler:scale',
    availableAs: [
      { label: 'Talk', href: getPermalink('/services#talks') },
      { label: 'Workshop', href: getPermalink('/services#workshops') },
      { label: 'Research', href: getPermalink('/services#research') },
    ],
  },
  {
    title: 'Informed & Responsible Use of LLMs',
    description:
      'Understanding how large language models behave, their cognitive and societal effects, and how to use them effectively and responsibly in different contexts.',
    icon: 'tabler:message-2-check',
    availableAs: [
      { label: 'Workshop', href: getPermalink('/services#workshops') },
    ],
  },
  {
    title: 'Latest Trends and Developments in AI',
    description:
      'A structured overview of recent advances, emerging techniques, and industrial dynamics shaping the current AI landscape.',
    icon: 'tabler:radar-2',
    availableAs: [
      { label: 'Talk', href: getPermalink('/services#talks') },
      { label: 'Advisory', href: getPermalink('/services#advisory') },
    ],
  },
  {
    title: 'Consciousness & Digital Minds',
    description:
      'To what extent can AI be said to think, feel or understand? An interdisciplinary analysis combining computer science, physics, neuroscience, philosophy of mind, and guided by a critical perspective on the history of scientific progress.',
    icon: 'tabler:sparkles',
    availableAs: [
      { label: 'Talk', href: getPermalink('/services#talks') },
    ],
  },
  {
    title: 'AI & Creativity',
    description:
      'The role of AI in creative processes — from generative systems to questions of novelty, authorship, and innovation.',
    icon: 'tabler:palette',
    availableAs: [
      { label: 'Talk', href: getPermalink('/services#talks') },
      { label: 'Workshop', href: getPermalink('/services#workshops') },
      { label: 'Advisory', href: getPermalink('/services#advisory') },
    ],
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
