import React from 'react';
import { RxInfoCircled } from 'react-icons/rx';

export default function PricingTitle() {
  return (
    <div className="w-full h-12 border-b border-gray-200 flex items-center justify-between px-4">
      <div className="flex items-center gap-1">
        <div className="leading-5 text-base font-semibold">Plans</div>
        <div className="flex gap-2 items-center">
          <RxInfoCircled className="w-[14px] h-[14px] peer block" />
          <p className="text-xs font-medium hidden peer-hover:block duration-300 ease-in-out">
            Compare our plans here
          </p>
        </div>
      </div>
      {/* <div className="flex items-center rounded-full h-6 text-xs font-medium bg-yellow-200 text-white">
        T
      </div> */}
    </div>
  );
}
