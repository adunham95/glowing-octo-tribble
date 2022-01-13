import { MenuIcon, XIcon } from '@heroicons/react/outline';
import React, { useState } from 'react';

const navigation = [
  { name: 'Dashboard', href: '#', current: true },
  { name: 'Team', href: '#', current: false },
  { name: 'Projects', href: '#', current: false },
  { name: 'Calendar', href: '#', current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export interface ILink {
  name: string;
  href: string;
  current: boolean;
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
    <nav className="bg-white sticky top-0 z-50 shadow-lg dark:bg-black">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 h-[60px]">
        <div className="relative flex items-center justify-between h-16">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* Mobile menu button*/}
            <button
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
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
              <span className="text-black dark:text-white">{pageName}</span>
            </div>
            <div className="hidden sm:block sm:ml-6">
              <div className="flex space-x-4 h-full">
                {navLinks.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className={classNames(
                      item.current ? 'border-blue-400' : 'border-transparent',
                      'flex items-center relative text-black dark:text-white border-b-2 hover:border-blue-400'
                    )}
                    aria-current={item.current ? 'page' : undefined}
                  >
                    <span className="px-3 py-2 rounded-md text-sm font-medium">
                      {item.name}
                    </span>
                    {/* {item.current && (
                      <span className="absolute bottom-1 h-[2px] bg-blue-400 w-full"></span>
                    )} */}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className={`sm:hidden fixed w-full bg-white dark:bg-black z-[45] ${
          open ? 'top-[60px]' : 'top-[-100%]'
        }`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 shadow-lg">
          {navLinks.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className={classNames(
                item.current
                  ? 'bg-gray-900 text-white'
                  : 'text-black dark:text-gray-300',
                'block px-3 py-2 rounded-md text-base font-medium'
              )}
              aria-current={item.current ? 'page' : undefined}
            >
              {item.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Header;
