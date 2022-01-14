import React from 'react';

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div className="flex justify-between p-1 text-sm bg-brand-dark-400 text-brand-light-500 h-[30px]">
      <div>&copy; Copyright {year}</div>
      <div>Adrian Dunham</div>
    </div>
  );
};

export default Footer;
