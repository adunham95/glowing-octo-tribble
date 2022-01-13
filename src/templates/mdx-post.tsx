import React from 'react';
import { graphql } from 'gatsby';
import MdxLayout from '../components/layout/MDX_Layout';
import PostTitle from '../components/Post Components/PostTitle/PostTitle';
import Pill, { EPillStyle } from '../components/Post Components/Pill';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import SEO from '../components/Post Components/SEO';
const MDXPostTemplate = ({ data, pageContext, location }) => {
  const post = data.mdx;
  console.log(post);
  return (
    <MdxLayout>
      <SEO title={post.frontmatter.title} />
      <PostTitle title={post.frontmatter.title} />
      <div>
        <Pill text="Test" />
        <Pill text="Test" style={EPillStyle.FILLED} />
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
