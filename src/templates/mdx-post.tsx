import React from 'react';
import { graphql } from 'gatsby';
import MdxLayout from '../components/layout/MDX_Layout';
import PostTitle from '../components/Post Components/PostTitle/PostTitle';
const MDXPostTemplate = ({ data, pageContext, location }) => {
  const post = data.mdx;
  return (
    <MdxLayout>
      <PostTitle title={post.frontmatter.title} />
      {post.body}
    </MdxLayout>
  );
};

export default MDXPostTemplate;

export const pageQuery = graphql`
  query PostBySlug($slug: String = "$slug") {
    site {
      siteMetadata {
        title
      }
    }
    mdx(fields: { slug: { eq: $slug } }) {
      body
      fields {
        slug
      }
      id
      frontmatter {
        title
      }
    }
  }
`;
