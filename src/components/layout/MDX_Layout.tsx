import React from 'react';
import { MDXProvider } from '@mdx-js/react';
import MdxTest from '../Utilities/MDXTest';
import Layout from './Layout';
const shortcodes = { MdxTest };

const MdxLayout = ({ children }) => {
  return (
    <Layout>
      <MDXProvider components={shortcodes}>{children}</MDXProvider>
    </Layout>
  );
};

export default MdxLayout;
