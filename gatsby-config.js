module.exports = {
  siteMetadata: {
    siteUrl: 'https://www.yourdomain.tld',
    title: 'Personal Website',
    twitterUsername: '@adunham95',
    titleTemplate: '%s - Adrian Dunham',
    description:
      'Hogwarts Potions master, Head of Slytherin house and former Death Eater.',
    url: 'https://www.yourdomain.tld',
  },
  plugins: [
    {
      resolve: `gatsby-plugin-typescript`,
      options: {
        isTSX: true, // defaults to false
        jsxPragma: `jsx`, // defaults to "React"
        allExtensions: true, // defaults to false
      },
    },

    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sitemap',
    'gatsby-plugin-postcss',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: `GatsbyJS`,
        short_name: `GatsbyJS`,
        start_url: `/`,
        background_color: `#111111`,
        theme_color: `#3490de`,
        display: `standalone`,
        icons: [
          { src: 'icons/icon-32x32.png', sizes: '32x32', type: 'image/png' },
          { src: 'icons/icon-48x48.png', sizes: '48x48', type: 'image/png' },
          { src: 'icons/icon-72x72.png', sizes: '72x72', type: 'image/png' },
          { src: 'icons/icon-96x96.png', sizes: '96x96', type: 'image/png' },
          {
            src: 'icons/icon-144x144.png',
            sizes: '144x144',
            type: 'image/png',
          },
          {
            src: 'icons/icon-192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: 'icons/icon-256x256.png',
            sizes: '256x256',
            type: 'image/png',
          },
          {
            src: 'icons/icon-384x384.png',
            sizes: '384x384',
            type: 'image/png',
          },
          {
            src: 'icons/icon-512x512.png',
            sizes: '512x512',
            type: 'image/png',
          },
          {
            src: 'icons/filled-full-icon.png',
            sizes: '1200x1200',
            type: 'image/png',
            purpose: 'maskable',
          },
        ],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/data/posts`,
        name: `blog`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: './src/pages/',
      },
      __key: 'pages',
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
        defaultLayouts: {
          default: require.resolve('./src/components/layout/MDX_Layout.tsx'),
        },
      },
    },
    {
      resolve: `gatsby-plugin-my-social-cards`,
      options: {
        query: `
        {
          allMdx {
            edges {
              node {
                fields {
                  slug
                }
                frontmatter {
                  title
                }
              }
            }
          }
        }
          `,
        queryToPages: (result) =>
          result.data.allMdx.edges.map((edge) => {
            const slugWithoutSlashes = edge.node.fields?.slug.replace(
              /\//g,
              '',
            );
            return {
              slug: `/${slugWithoutSlashes}`,
              pageContext: {
                title: edge.node.frontmatter?.title,
              },
            };
          }),
        component: require.resolve(
          './src/components/Utilities/SocialCard/index.tsx'
        ),
        cardLimit: 0, // Useful for debugging.
      },
    },
    {
      resolve: `gatsby-plugin-offline`,
      options: {
        precachePages: [`/about-us/`, `/projects/*`, '/404'],
      },
    },
  ],
};
