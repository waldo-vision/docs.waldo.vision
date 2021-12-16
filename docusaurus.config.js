// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

// @type {import('@docusaurus/types').Config} 
const config = {
  title: 'WALDO',
  tagline: 'Cheat detection powered by AI',
  url: 'https://waldo.vision',
  baseUrl: '/',
  onBrokenLinks: 'log',
  onBrokenMarkdownLinks: 'log',
  onDuplicateRoutes: 'log',
  favicon: 'img/favicon.ico',
  organizationName: 'WALDO', // Usually your GitHub org/user name.
  projectName: 'vision.waldo.docs', // Usually your repo name.
  titleDelimiter: ' ⋅ ',
  baseUrlIssueBanner: false,

  presets: [
    [
      'classic',
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/facebook/docusaurus/edit/main/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/main/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    ({
      image: 'img/logo-dark.png',
      announcementBar: {
        id: 'announcement',
        content:
          'WALDO is still in development. <a target="_blank" href="https://bit.ly/3mqDTV0"> Learn more by joining the discord </a>',
        backgroundColor: '#F44',
        textColor: '#FFF',
        isCloseable: false,
      },
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: false,
        respectPrefersColorScheme: false,
        switchConfig: {
          darkIcon: '🌙',
          darkIconStyle: {
            marginLeft: '2px',
          },
          // Unicode icons such as '\u2600' will work
          // Unicode with 5 chars require brackets: '\u{1F602}'
          lightIcon: '☀️',
          lightIconStyle: {
            marginLeft: '1px',
          },
        },
      },
      navbar: {
        title: 'WALDO',
        hideOnScroll: true,
        logo: {
          alt: 'WALDO Logo',
          src: 'img/waldo-logo.svg',
          srcDark: 'img/waldo-logo.svg',
          href:'/'
        },
        items: [
          {
            type: 'doc',
            docId: 'Getting-Started/intro',
            position: 'right',
            label: 'Docs',
          },
          {to: '/blog', label: 'Blog', position: 'right'},
          {
            href: 'https://github.com/waldo-vision/',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Tutorial',
                to: '/docs/Getting-Started/intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/docusaurus',
              },
              {
                label: 'Discord',
                href: 'https://discordapp.com/invite/docusaurus',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/docusaurus',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/facebook/docusaurus',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
