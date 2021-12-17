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
  organizationName: 'waldo-vision', // Usually your GitHub org/user name.
  projectName: 'docs.waldo.vision', // Usually your repo name.
  titleDelimiter: ' ⋅ ',
  baseUrlIssueBanner: false,

  presets: [
    [
      'classic',
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/waldo-vision/docs.waldo.vision/edit/master/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/waldo-vision/docs.waldo.vision/edit/master',
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
                label: 'Getting Started',
                to: '/docs/Getting-Started/intro',
              },
              {
                label: 'Contributing',
                to: '/docs/Getting-Started/contributing',
              }
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Discord',
                href: 'https://bit.ly/3mqDTV0',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/waldo-vision',
              },
              {
                label: 'YouTube',
                href: 'https://www.youtube.com/user/PappaZeee',
              }
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
                href: 'https://github.com/waldo-vision/',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} WALDO Vision under MIT License.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
