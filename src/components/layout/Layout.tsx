import React from 'react';
import Banner, { EBannerStyleType } from '../Utilities/Banner';
import { DarkMode } from '../Utilities/DarkMode';
import Header from '../Utilities/Header';

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
      {contentID !== '' && <a href={`#${contentID}`}>Skip To Content</a>}
      <Banner {...bannerData} />
      <DarkMode />
      {useHeader && <Header />}
      <div className="container mx-auto px-2">{children}</div>
    </div>
  );
};

export default Layout;
