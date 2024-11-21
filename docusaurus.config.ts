import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
    title: 'mutexo-server',
    tagline: 'Mutexo Server Documentation',
    favicon: 'img/favicon.ico',

    // Set the production url of your site here
    url: 'https://www.harmoniclabs.tech/',
    // Set the /<baseUrl>/ pathname under which your site is served
    // For GitHub pages deployment, it is often '/<projectName>/'
    baseUrl: '/',

    // GitHub pages deployment config.
    // If you aren't using GitHub pages, you don't need these.
    organizationName: 'Harmonic Laboratories', // Usually your GitHub org/user name.
    projectName: 'mutexo-server', // Usually your repo name.

    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',

    // Even if you don't use internationalization, you can use this field to set
    // useful metadata like html lang. For example, if your site is Chinese, you
    // may want to replace "en" with "zh-Hans".
    i18n: {
        defaultLocale: 'en',
        locales: ['en'],
    },

    presets: [
        [
        'classic',
        {
            docs: {
            sidebarPath: './sidebars.ts',
            routeBasePath: '/',
            // Please change this to your repo.
            // Remove this to remove the "edit this page" links.
            editUrl:
                'https://github.com/HarmonicLabs/mutexo-server-docs',
            },
            blog: false,
            theme: {
            customCss: './src/css/custom.css',
            },
        } satisfies Preset.Options,
        ],
    ],

    themes: ['@docusaurus/theme-live-codeblock'],
    themeConfig: {
        colorMode: {
            defaultMode: 'dark',
            disableSwitch: false,
            respectPrefersColorScheme: false,
        },
        docs: {
            sidebar: {
                hideable: true,
            }
        },
        // Replace with your project's social card
        image: 'img/docusaurus-social-card.jpg',
        navbar: {
            title: 'mutexo-server',
            logo: {
                alt: 'My Site Logo',
                src: 'img/logo.svg',
            },
            items: [
                {
                    type: 'doc',
                    docId: 'intro',
                    position: 'left',
                    label: 'Docs',
                },
                {
                    href: 'https://github.com/HarmonicLabs/mutexo-server',
                    label: 'GitHub ⭐',
                    position: 'right',
                },
                {
                    href: 'https://github.com/sponsors/HarmonicLabs',
                    label: 'Sponsor ❤️',
                    position: 'right',
                },
                {
                    type: 'docsVersionDropdown',
                },
            ]
        },
        footer: {
            style: 'dark',
            links: [
                {
                    title: 'Docs',
                    items: [
                        {
                            label: 'Intro',
                            to: '/',
                        }
                    ]
                },
                {
                    title: 'Community',
                    items: [
                        {
                            label: 'Discord',
                            href: 'https://discord.gg/CGKNcG7ade',
                        },
                        {
                            label: 'Twitter',
                            href: 'https://x.com/hlabs_tech',
                        }
                    ]
                },
                {
                    title: 'More',
                    items: [
                        {
                            label: 'GitHub',
                            href: 'https://github.com/HarmonicLabs/mutexo-server',
                        },
                        {
                            label: 'Harmonic Labs',
                            href: 'https://harmoniclabs.tech',
                        },
                    ]
                },
            ],
            copyright: `Copyright © ${new Date().getFullYear()} Harmonic Laboratories Srl.`,
        },
        prism: {
            theme: prismThemes.github,
            darkTheme: prismThemes.dracula,
            magicComments: [
                // Remember to extend the default highlight class name as well!
                {
                    className: 'theme-code-block-highlighted-line',
                    line: 'highlight-next-line',
                    block: {start: 'highlight-start', end: 'highlight-end'},
                },
                {
                    className: 'code-block-error-line',
                    line: 'highlight-error',
                },
                {
                    className: 'code-solution',
                    line: 'highlight-solution',
                },
                {
                    className: 'code-bad-practice',
                    line: 'highlight-bad-practice',
                    block: {start: 'bad-practice-start', end: 'bad-practice-end'},
                },
                {
                    className: 'code-bad-practice',
                    line: 'highlight-bad',
                    block: {start: 'bad-start', end: 'bad-end'},
                }
            ]
        },
    } satisfies Preset.ThemeConfig,
};

export default config;
