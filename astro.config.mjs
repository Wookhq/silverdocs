// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  integrations: [
      starlight({
          title: 'Lution',
          social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/wookhq/lution' }, { icon: 'discord', label: 'Discord', href: 'https://discord.gg/BXT7FYjTBa' }],
          customCss: [
              './src/styles/global.css',
                '@fontsource-variable/lexend/index.css',
          ],
          logo: {
              src: './src/assets/silvertext.svg',
              replacesTitle: true,
          },
          sidebar: [
              {
                  label : 'Lution',
                  items : [
                      { label: 'Introduction', slug: 'lution/introduction' },
                      { label: 'Installation', slug: 'lution/installation' },
                      { label: 'Uninstalling Lution', slug: 'lution/uninstall' },
                      { label: 'FAQ', slug: 'lution/faq' },
                      { label: 'Reviews', slug: 'funstuff/reviews' },
                  ],
              },
              {
                  label : 'Lution Marketplace',
                  items : [
                      { label: 'Add your own theme/mods into the marketplace', slug: 'lutionmarketplace/addtheme' },
                      { label: 'Create your own marketplace provider', slug: 'lutionmarketplace/ownmrk' },
                  ],
              }
          ],
      }),
	],

  vite: {
    plugins: [tailwindcss()],
  },
});