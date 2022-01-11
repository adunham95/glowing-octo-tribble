import React from 'react';
import { MDXProvider } from '@mdx-js/react';
import MdxTest from '../Utilities/MDXTest';
import Layout from './Layout';
import Code from '../Post Components/Code';

const shortcodes = {
  pre: Code,
  MdxTest,
};

const MdxLayout = ({ children }) => {
  return (
    <Layout>
      <MDXProvider components={shortcodes}>{children}</MDXProvider>
    </Layout>
  );
};

export default MdxLayout;
