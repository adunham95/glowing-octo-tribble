import React from 'react';
import { graphql } from 'gatsby';
import MdxLayout from '../components/layout/MDX_Layout';
import PostTitle from '../components/Post Components/PostTitle/PostTitle';
import Pill, { EPillType } from '../components/Post Components/Pill';
import { MDXRenderer } from 'gatsby-plugin-mdx';
const MDXPostTemplate = ({ data, pageContext, location }) => {
  const post = data.mdx;
  return (
    <MdxLayout>
      <PostTitle title={post.frontmatter.title} />
      <div>
        <Pill pillType={EPillType.INFO} text="Test" />
      </div>
      <MDXRenderer>{post.body}</MDXRenderer>
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
