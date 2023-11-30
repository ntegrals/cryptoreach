import { Menu, Transition } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import { Fragment } from 'react';
import {
  RxArchive,
  RxCaretSort,
  RxDownload,
  RxHeight,
  RxMixerHorizontal
} from 'react-icons/rx';

function classNames(...classes: any) {
  return classes.filter(Boolean).join(' ');
}

export default function CreditSelectionButton(props: any) {
  // const

  return (
    <Menu as="div" className="">
      <div className="h-full w-full rounded-b-xl flex justify-start items-center px-4">
        <Menu.Button
          className="flex items-center w-full justify-center rounded bg-white  px-3 py-1.5 text-sm font-medium text-[#232529] shadow-[0px_0px_2px_#E0E0E0,0px_1px_4px_-2px_rgba(24,39,75,0.02),0px_4px_4px_-2px_rgba(24,39,75,0.06)]
           hover:bg-gray-50 gap-1.5 cursor-pointer"
        >
          {/* {props.data.} */}
          {props.data[props.billingInterval].plans[props.plan].planTitle}
          <RxCaretSort className="w-[14px] h-[14px]" />
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
        <Menu.Items className="absolute ml-4 z-10 mt-2 w-52 rounded-md  shadow-lg ring-1 ring-black ring-opacity-5">
          <div className="py-1 bg-white rounded border border-gray-200">
            {/* map through the plans */}

            {Object.values(props.data[props.billingInterval].plans).map(
              (plan: any) => (
                <Menu.Item>
                  <div
                    key={plan.planId}
                    onClick={() => props.setPlan(plan.planId)}
                    className="flex gap-1 justify-center items-center cursor-pointer bg-white hover:bg-gray-50"
                  >
                    <div className="cursor-pointe px-3 py-1.5 text-sm font-medium text-[#232529]">
                      {plan.planTitle}
                    </div>
                    <RxCaretSort className="w-[14px] h-[14px] text-transparent" />
                  </div>
                </Menu.Item>
              )
            )}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
