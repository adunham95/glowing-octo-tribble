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
        icon: 'src/images/icon.png',
        name: `GatsbyJS`,
        short_name: `GatsbyJS`,
        start_url: `/`,
        background_color: `#f7f0eb`,
        theme_color: `#a2466c`,
        display: `standalone`,
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
            console.log('node data', edge.node);
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
