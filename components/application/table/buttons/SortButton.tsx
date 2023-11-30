'use client';

import ColDropdown from './sort/ColDropdown';
import DirectionDropdown from './sort/DirectionDropdown';
import { Menu, Transition } from '@headlessui/react';
import { Fragment, useState } from 'react';
import {
  RxCross1,
  RxHeight,
  RxPerson,
  RxQuestionMarkCircled
} from 'react-icons/rx';

function classNames(...classes: any) {
  return classes.filter(Boolean).join(' ');
}

export default function SortButton(props: any) {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="flex w-full justify-center items-center gap-x-1.5 rounded-[9px] bg-white px-3 py-1 text-sm font-medium text-black shadow-[0px_0px_2px_#E0E0E0,0px_1px_4px_-2px_rgba(24,39,75,0.02),0px_4px_4px_-2px_rgba(24,39,75,0.06)] hover:bg-gray-50">
          <RxHeight className="w-[14px] h-[14px]" />
          Sort
          {props.sort.set ? (
            <div className="inline-flex justify-center items-center rounded-[6px] bg-[#E6EEFC] px-1 text-[#266df0] border border-[#BBCFFB] text-[11px]">
              1
            </div>
          ) : null}
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute left-0 z-10 mt-2 w-[520px] origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5">
          <div className="flex flex-col p-2 gap-2">
            <div className="text-xs text-[#5c5e63]">Sort options</div>
            {props.sort.set === false ? (
              <div className="text-[13px] leading-5 text-[#75777c]">
                Empty - Choose an attribute to sort by
              </div>
            ) : (
              // Sort Selection

              <div className="flex items-center gap-1">
                <ColDropdown
                  tableSchema={props.tableSchema}
                  sort={props.sort}
                  setSort={props.setSort}
                />
                <DirectionDropdown sort={props.sort} setSort={props.setSort} />
                <RxCross1
                  onClick={() => {
                    props.setSort({
                      set: false,
                      col: '',
                      asc: true
                    });
                  }}
                  className="w-[14px] h-[14px] text-[#75777c] ml-4 cursor-pointer"
                />
              </div>
            )}

            <div className="text-sm text-[#75777c] px-3 py-1 border-y border-gray-200 -mx-2">
              <button
                onClick={() => {
                  props.setSort((prevState: any) => ({
                    ...prevState,
                    col: props.tableSchema[0].db_name,
                    set: true,
                    title: props.tableSchema[0].title,
                    icon: props.tableSchema[0].icon
                  }));
                }}
                className="cursor-pointer hover:bg-gray-100 duration-150 ease-in-out px-1 py-0.5 rounded-md"
              >
                + Add Sort
              </button>
            </div>
            <div className="flex items-center gap-1 text-sm text-[#75777c]">
              <RxQuestionMarkCircled className="w-[14px] h-[14px]" />
              Learn about sorting
            </div>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
