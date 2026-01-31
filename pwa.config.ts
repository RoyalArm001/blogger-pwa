import type { Config } from './types';

export default {
  id: '/',
  name: 'Jermuk Travel',
  shortName: 'Jermuk',
  description: 'Official travel guide of Jermuk, Armenia',
  direction: 'auto',
  language: 'en-US',
  backgroundColor: '#ffffff',
  themeColor: '#0ea5e9',
  display: 'standalone',
  orientation: 'natural',
  scope: '/',
  startUrl: '/?utm_source=homescreen',
  appleStatusBarStyle: 'black-translucent',
  preferRelatedApplications: false,

  pwa: {
    logs: true,
    oneSignalEnabled: false,
  },

  // Blogger origin (Cloudflare Workers mode)
  origin: 'https://www.jermuktravel.com',
} satisfies Config;
