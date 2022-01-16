import { MenuIcon, XIcon } from '@heroicons/react/outline';
import { Link } from 'gatsby';
import React, { useState } from 'react';
import IconBrand from '../SVG/Brand/icon-brand';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Google', href: 'https://google.com', external: true },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export interface ILink {
  name: string;
  href: string;
  external?: boolean;
}

interface IProps {
  navLinks?: Array<ILink>;
  pageName?: string;
}

const Header = ({
  navLinks = navigation,
  pageName = "Adrian's Blog",
}: IProps) => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-brand-light-500 sticky top-0 z-50 shadow-lg dark:bg-brand-dark-500">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 h-[60px]">
        <div className="relative flex items-center justify-between h-16">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* Mobile menu button*/}
            <button
              className="inline-flex items-center justify-center p-2 rounded-md text-brand-dark-400 hover:text-brand-light-500 hover:bg-brand-dark-300 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-brand-light-500"
              onClick={() => setOpen(!open)}
            >
              <span className="sr-only">Open main menu</span>
              {open ? (
                <XIcon className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <MenuIcon className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
          <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start h-full mb-2">
            <div className="flex-shrink-0 flex items-center">
              <span className="sm:pr-1" aria-label={pageName}>
                <Link to="/">
                  <IconBrand />
                </Link>
              </span>
              {/* <span className="text-brand-dark-500 dark:text-brand-light-500 hidden sm:block">
                {pageName}
              </span> */}
            </div>
            <div className="hidden sm:block sm:ml-6">
              <div className="flex space-x-4 h-full">
                {navLinks.map((item) =>
                  item?.external ? (
                    <a
                      key={item.name}
                      href={item.href}
                      className={classNames(
                        'border-transparent',
                        'flex items-center relative text-brand-dark-500 dark:text-brand-light-500 border-b-2 hover:border-brand-400'
                      )}
                      aria-current={undefined}
                    >
                      <span className="px-3 py-2 rounded-md text-sm font-medium">
                        {item.name}
                      </span>
                    </a>
                  ) : (
                    <Link
                      key={item.name}
                      to={item.href}
                      className="flex items-center relative text-brand-dark-500 dark:text-brand-light-500 border-b-2 hover:border-brand-400 border-transparent"
                      activeClassName="border-blue-400"
                    >
                      <span className="px-3 py-2 rounded-md text-sm font-medium">
                        {item.name}
                      </span>
                    </Link>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className={`sm:hidden fixed w-full bg-brand-light-500 dark:bg-brand-dark-500 z-[45] ${
          open ? 'top-[60px]' : 'top-[-100%]'
        }`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 shadow-lg">
          {navLinks.map((item) =>
            item?.external ? (
              <a
                key={item.name}
                href={item.href}
                className={classNames(
                  'text-brand-dark-500 dark:text-gray-300',
                  'block px-3 py-2 rounded-md text-base font-medium'
                )}
                aria-current={undefined}
              >
                {item.name}
              </a>
            ) : (
              <Link
                key={item.name}
                to={item.href}
                className="flex items-center relative text-brand-dark-500 dark:text-brand-light-500 border-b-2 hover:border-brand-400 border-transparent"
                activeClassName="bg-gray-900 text-brand-light-500"
              >
                <span className="px-3 py-2 rounded-md text-sm font-medium">
                  {item.name}
                </span>
              </Link>
            )
          )}
        </div>
      </div>
    </nav>
  );
};

export default Header;
