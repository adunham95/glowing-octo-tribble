import React from 'react';
import Banner, { EBannerStyleType } from '../Utilities/Banner';
import { DarkMode } from '../Utilities/DarkMode';

interface IProps {
  children: React.ReactChild;
  useHeader?: boolean;
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

const Layout = ({ children, useHeader = true }: IProps) => {
  return (
    <div className="">
      <Banner {...bannerData} />
      <DarkMode />
      {useHeader && <nav>NAV</nav>}
      <div className="container mx-auto">{children}</div>
    </div>
  );
};

export default Layout;
