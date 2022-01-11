const { createFilePath } = require('gatsby-source-filesystem');

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;
  console.log(node.internal.type);

  //   fmImagesToRelative(node);

  if (node.internal.type === `Mdx`) {
    console.log(node.fields); // console.log(node);
    const value = createFilePath({ node, getNode });
    console.log(value);
    createNodeField({
      name: `slug`,
      node,
      value: `${value}`,
    });
  }
};
