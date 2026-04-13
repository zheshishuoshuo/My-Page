import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Home',
      href: getPermalink('/'),
    },
    {
      text: 'Profile',
      href: getPermalink('/about'),
    },
    {
      text: 'Journal',
      href: getBlogPermalink(),
    },
    {
      text: 'Toolbox',
      href: getPermalink('/tools'),
    },
  ],
  actions: [{ text: 'Latest Entries', href: getBlogPermalink(), variant: 'primary' }],
};

export const footerData = {
  links: [
    {
      title: 'Site',
      links: [
        { text: 'Home', href: getPermalink('/') },
        { text: 'Profile', href: getPermalink('/about') },
        { text: 'Journal', href: getBlogPermalink() },
        { text: 'Toolbox', href: getPermalink('/tools') },
      ],
    },
    {
      title: 'Journal Topics',
      links: [
        { text: 'Observing Plans', href: getPermalink('Observing Plans', 'category') },
        { text: 'Data Reduction', href: getPermalink('Data Reduction', 'category') },
        { text: 'Paper Notes', href: getPermalink('Paper Notes', 'category') },
        { text: 'Research Ideas', href: getPermalink('Research Ideas', 'category') },
      ],
    },
    {
      title: 'Daily Links',
      links: [
        { text: 'NASA ADS', href: 'https://ui.adsabs.harvard.edu/' },
        { text: 'SIMBAD', href: 'https://simbad.cds.unistra.fr/simbad/' },
        { text: 'VizieR', href: 'https://vizier.cds.unistra.fr/' },
        { text: 'Astropy', href: 'https://docs.astropy.org/' },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'RSS', href: getAsset('/rss.xml') },
    { text: 'Journal', href: getBlogPermalink() },
  ],
  socialLinks: [{ ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') }],
  footNote: `
    Built for astronomy research profiles, working notes, and tool organization.
  `,
};
