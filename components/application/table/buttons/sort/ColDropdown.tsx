import { Menu, Transition } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import { Fragment } from 'react';
import {
  RxArchive,
  RxArrowDown,
  RxArrowUp,
  RxChevronDown,
  RxEnvelopeClosed,
  RxGithubLogo,
  RxMixerHorizontal,
  RxTwitterLogo
} from 'react-icons/rx';

const matchIcon = (col: string) => {
  switch (col) {
    case 'name':
      return <RxArchive className="w-[14px] h-[14px]" />;
    case 'gh_name':
      return <RxGithubLogo className="w-[14px] h-[14px]" />;
    case 'email':
      return <RxEnvelopeClosed className="w-[14px] h-[14px]" />;
    case 'socials':
      return <RxTwitterLogo className="w-[14px] h-[14px]" />;
    default:
      return <RxArchive className="w-[14px] h-[14px]" />;
  }
};

const matchName = (col: string) => {
  switch (col) {
    case 'name':
      return 'Name';
    case 'gh_name':
      return 'Username';
    case 'email':
      return 'Email';
    case 'socials':
      return 'Socials';
    default:
      return 'Name';
  }
};

const columns = ['name', 'gh_name', 'email'];

export default function ColDropdown(props: any) {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <Menu.Button className="w-full">
        <button className="flex w-full items-center justify-center gap-x-1.5 rounded-[9px] bg-white px-3 py-1 text-sm font-medium text-black shadow-[0px_0px_2px_#E0E0E0,0px_1px_4px_-2px_rgba(24,39,75,0.02),0px_4px_4px_-2px_rgba(24,39,75,0.06)] hover:bg-gray-50">
          {props.sort.icon}
          {props.sort.title}
          <RxChevronDown className="w-[14px] h-[14px]" />
        </button>
      </Menu.Button>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute left-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5">
          <div className="py-1">
            {/* Map over coloums */}

            {props.tableSchema.map((col: any) => (
              <button
                onClick={() => {
                  props.setSort((prevState: any) => ({
                    ...prevState,
                    col: col.db_name,
                    title: col.title,
                    icon: col.icon
                  }));
                }}
                className="w-full flex items-center text-sm gap-1 p-2 hover:bg-[#F5F5F6] duration-150 ease-in-out"
              >
                {col.icon}
                {col.title}
              </button>
            ))}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
