import React from 'react';
import { graphql } from 'gatsby';
import MdxLayout from '../components/layout/MDX_Layout';
import { MDXRenderer } from 'gatsby-plugin-mdx';

const MDXPostTemplate = ({ data, pageContext, location }) => {
  const body = data.mdx.body;
  return <MdxLayout>{body}</MdxLayout>;
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
