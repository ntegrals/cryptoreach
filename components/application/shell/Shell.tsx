'use client';

import AddListModal from '../lists/AddListModal';
import CreditOverview from './CreditOverview';
import SignOutShellButton from './SignOutShellButton';
import { Dialog, Transition } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { Fragment, useState } from 'react';
import {
  RxArchive,
  RxBackpack,
  RxCheckbox,
  RxCube,
  RxEnvelopeClosed,
  RxGear,
  RxLayers,
  RxMagicWand,
  RxPerson,
  RxShadowInner
} from 'react-icons/rx';

const navigation = [
  { name: 'Users', href: '/people', icon: RxPerson, current: true },
  {
    name: 'Organizations',
    href: '/organizations',
    icon: RxBackpack,
    current: false
  },
  {
    name: 'Categories',
    href: '/categories',
    icon: RxCube,
    current: false
  }
  // {
  //   name: 'Saved Contacts',
  //   href: '/saved',
  //   icon: RxLayers,
  //   current: false
  // }
  // {
  //   name: 'Topics',
  //   href: '/repositories',
  //   icon: RxCube,
  //   current: false
  // },
  // {
  //   name: 'Industries',
  //   href: '/industries',
  //   icon: RxLayers,
  //   current: false
  // }
];

const secondNav = [
  { name: 'Mailboxes', href: '/mailboxes', icon: RxArchive, current: false },
  {
    name: 'Campaigns',
    href: '/campaigns',
    icon: RxEnvelopeClosed,
    current: true
  }
];

const thirdNav = [
  { name: 'Solidity Devs', href: '/plans', icon: '📌', current: true },
  { name: 'NFT Fans', href: '/settings', icon: '⚙️', current: false }
  // { name: 'Microsoft Employees', href: '/settings', icon: '💻', current: false }
];

const bottomNav = [
  { name: 'Upgrade', href: '/plans', icon: RxMagicWand, current: true },
  { name: 'Settings', href: '/settings', icon: RxGear, current: false }
];
const teams = [
  { id: 1, name: 'Heroicons', href: '#', initial: 'H', current: false },
  { id: 2, name: 'Tailwind Labs', href: '#', initial: 'T', current: false },
  { id: 3, name: 'Workcation', href: '#', initial: 'W', current: false }
];

function classNames(...classes: any) {
  return classes.filter(Boolean).join(' ');
}

export default function Shell({ children, credits }: any) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [listModalOpen, setListModalOpen] = useState(false);

  return (
    <>
      {/* <AddListModal
        listModalOpen={listModalOpen}
        setListModalOpen={setListModalOpen}
      /> */}
      <div>
        {/* Static sidebar for desktop */}
        <div className="fixed inset-y-0 lg:z-50 flex w-[170px] lg:w-[275px] lg:flex-col border-r border-gray-200">
          <div className="flex grow flex-col gap-y-[10px] overflow-y-auto bg-[#FBFBFB]">
            {/* <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-[#FBFBFB]"> */}
            <div className="w-full h-12 border-b border-gray-200 flex items-center justify-between px-6">
              <a href="/" className="flex items-center gap-1">
                <RxShadowInner className="w-[16px] h-[16px]" />
                <h3 className="font-semibold">cryptoreach</h3>
              </a>
            </div>

            <nav className="flex flex-1 flex-col px-6">
              {/* <ActionButton /> */}

              <ul role="list" className="flex flex-1 flex-col gap-y-4">
                <li>
                  <ul role="list" className="-mx-2 ">
                    <button className="text-xs text-[#75777c] px-1 cursor-default">
                      Data
                    </button>

                    {navigation.map((item) => (
                      <li key={item.name} className="">
                        <a
                          href={item.href}
                          className={classNames(
                            item.current
                              ? 'text-[#222529] hover:bg-[#EEEFF1] duration-150 ease-in-out'
                              : 'text-[#222529] hover:bg-[#EEEFF1] duration-150 ease-in-out',
                            'group flex items-center gap-x-1.5 rounded-md p-1 my-1 px-1 text-sm leading-5 font-medium'
                          )}
                        >
                          <item.icon
                            className="h-[16px] w-[16px] shrink-0"
                            aria-hidden="true"
                          />
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </li>
                {/* <li>
                  <ul role="list" className="-mx-2 ">
                    <div className="flex justify-between items-center">
                      <div className="text-xs text-[#75777c] px-1 cursor-default">
                        Campaigns
                      </div>
                      <button
                        onClick={() => setListModalOpen(true)}
                        className="text-xs text-[#75777c] px-1 hover:bg-[#F1F1F1] rounded p-1"
                      >
                        <RxPlus className="" />
                      </button>
                    </div>
                    {secondNav.map((item) => (
                      <li key={item.name} className="">
                        <a
                          href={item.href}
                          className={classNames(
                            item.current
                              ? 'text-[#222529] hover:bg-[#EEEFF1] duration-150 ease-in-out'
                              : 'text-[#222529] hover:bg-[#EEEFF1] duration-150 ease-in-out',
                            'group flex items-center gap-x-1.5 rounded-md p-1 my-1 px-1 text-sm leading-5 font-medium'
                          )}
                        >
                          <item.icon
                            className="h-[16px] w-[16px] shrink-0"
                            aria-hidden="true"
                          />
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </li>
                <li>
                  <ul role="list" className="-mx-2 ">
                    <div className="flex justify-between items-center">
                      <div className="text-xs text-[#75777c] px-1 cursor-default">
                        Lists
                      </div>
                      <button
                        onClick={() => setListModalOpen(true)}
                        className="text-xs text-[#75777c] px-1 hover:bg-[#F1F1F1] rounded p-1"
                      >
                        <RxPlus className="" />
                      </button>
                    </div>
                    {thirdNav.map((item) => (
                      <li key={item.name} className="">
                        <a
                          href={item.href}
                          className={classNames(
                            item.current
                              ? 'text-[#222529] hover:bg-[#EEEFF1] duration-150 ease-in-out'
                              : 'text-[#222529] hover:bg-[#EEEFF1] duration-150 ease-in-out',
                            'group flex items-center gap-x-1.5 rounded-md p-1 my-1 px-1 text-sm leading-5 font-medium'
                          )}
                        >
                          <span className="text-xs">{item.icon}</span>
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </li> */}

                <li className="mt-auto mb-4">
                  <ul role="list" className="-mx-2 ">
                    <CreditOverview credits={credits} />
                    <div className="border-b border-gray-200"></div>
                    {bottomNav.map((item) => (
                      <li key={item.name} className="">
                        <a
                          href={item.href}
                          className={classNames(
                            item.current
                              ? 'text-[#222529] hover:bg-[#EEEFF1] duration-150 ease-in-out'
                              : 'text-[#222529] hover:bg-[#EEEFF1] duration-150 ease-in-out',
                            'group flex items-center gap-x-1.5 rounded-md p-1 my-1 px-1 text-sm leading-5 font-medium'
                          )}
                        >
                          <item.icon
                            className="h-[16px] w-[16px] shrink-0"
                            aria-hidden="true"
                          />
                          {item.name}
                        </a>
                      </li>
                    ))}
                    {/* Sign out button */}
                    <li>
                      <SignOutShellButton />
                    </li>
                  </ul>
                </li>
              </ul>
            </nav>
          </div>
        </div>

        <main className="pl-[170px] lg:pl-[275px]">{children}</main>
      </div>
    </>
  );
}
