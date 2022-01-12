import React from 'react';
import { MDXProvider } from '@mdx-js/react';
import MdxTest from '../Utilities/MDXTest';
import Layout from './Layout';
import Code from '../Post Components/Code';
import { MDXRenderer } from 'gatsby-plugin-mdx';

const shortcodes = {
  pre: Code,
  MdxTest,
};

const MdxLayout = ({ children }) => {
  return (
    <Layout contentID="content">
      <MDXProvider components={shortcodes}>
        <main id="content" className="prose">
          <MDXRenderer>{children}</MDXRenderer>
        </main>
      </MDXProvider>
    </Layout>
  );
};

export default MdxLayout;
