import { getPermalink } from './utils/permalinks';
import { navLinks } from './data/site';

export const headerData = {
  links: navLinks,
  actions: [],
};

export const footerData = {
  links: [
    {
      title: 'Navigate',
      links: [
        { text: 'About', href: getPermalink('/about') },
        { text: 'Topics', href: getPermalink('/topics') },
        { text: 'Services', href: getPermalink('/services') },
      ],
    },
    {
      title: 'Connect',
      links: [
        { text: 'Join us', href: getPermalink('/join-us') },
        { text: 'Contact', href: getPermalink('/contact') },
        { text: 'Paris based, international in scope', href: getPermalink('/contact') },
      ],
    },
  ],
  secondaryLinks: [],
  socialLinks: [],
  footNote: `
    Independent perspectives on artificial intelligence and its implications.
  `,
};
