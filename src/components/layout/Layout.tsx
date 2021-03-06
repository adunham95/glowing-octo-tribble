import React from 'react';
import SEO from '../Post Components/SEO';
import Banner, { EBannerStyleType } from '../Utilities/Banner/Banner';
import { DarkMode } from '../Utilities/DarkMode';
import Footer from '../Utilities/Footer';
import Header from '../Utilities/Header/Header';
import SkipToLink from '../Utilities/SkipToLink';

interface IProps {
  children: React.ReactChild;
  useHeader?: boolean;
  contentID?: string;
}

const bannerData = {
  id: '',
  link: '',
  linkText: '',
  copy: 'Banner Data',
  bannerType: EBannerStyleType.CUSTOM,
  customStyles: {
    background: 'bg-fuchsia-600',
    iconColor: 'bg-fuchsia-800',
    text: 'text-white',
    button: 'text-fuchsia-600 bg-white hover:bg-fuchsia-50',
    close: 'hover:bg-fuchsia-500 focus:ring-white',
  },
};

const Layout = ({ children, useHeader = true, contentID = '' }: IProps) => {
  return (
    <div className="">
      <SEO />
      {contentID !== '' && <SkipToLink href={`#${contentID}`} />}
      <Banner {...bannerData} />
      <DarkMode />
      {useHeader && <Header />}
      <div className="page-container min-h-[calc(100vh-60px-30px)] mx-auto px-2">
        {children}
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
