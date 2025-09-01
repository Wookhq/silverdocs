// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

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
				src: './src/assets/lutiontext.svg',
				replacesTitle: true,
			},
			sidebar: [
				{
					label : 'Lution',
					items : [
						{ label: 'Introduction', slug: 'lution/introduction' },
						{ label: 'Installation', slug: 'lution/installation' },
					],
				},
				{
					label : 'Lution Marketplace',
					items : [
						{ label: 'Add your own theme/mods into the marketplace', slug: 'lutionmarketplace/addtheme' },
					],
				}
			],
		}),
	],
});
