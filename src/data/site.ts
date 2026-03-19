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


