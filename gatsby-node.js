const path = require(`path`);
const { createFilePath } = require('gatsby-source-filesystem');

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  //   fmImagesToRelative(node);

  if (node.internal.type === `Mdx`) {
    const value = createFilePath({ node, getNode });
    createNodeField({
      name: `slug`,
      node,
      value: `${value}`,
    });
  }
};

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const postTypes = {
    blog: path.resolve(`./src/templates/mdx-post.tsx`),
  };

  const result = await graphql(
    `
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
    `
  );

  if (result.errors) {
    throw result.errors;
  }

  // Create blog posts pages.
  const posts = result.data.allMdx.edges;

  posts.forEach((post, index) => {
    const previous = index === posts.length - 1 ? null : posts[index + 1].node;
    const next = index === 0 ? null : posts[index - 1].node;
    //   const hasSeries = post.node.frontmatter.series !== null

    // console.log('hasSeries', hasSeries);

    // console.log('hasSeries', post.node.frontmatter.series);
    // let hasSeries = false;
    // if(typeof post.node.frontmatter.series !== "undefined"){
    //   hasSeries = !post.node.frontmatter.series === null;
    // }

    createPage({
      path: post.node.fields.slug,
      component: postTypes.blog,
      context: {
        slug: post.node.fields.slug,
        previous,
        next,
      },
    });
  });
};
