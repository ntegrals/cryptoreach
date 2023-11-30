import React from 'react';
import { RxExternalLink, RxInfoCircled } from 'react-icons/rx';

const matchTitle = (title: string) => {
  switch (title) {
    case 'organizations':
      return 'You can find and filter all organizations here';
    case 'people':
      return 'You can find and filter all web3 users here';
    case 'categories':
      return 'You can find and filter all categories here';
  }
};

export default function TableTitle(props: any) {
  return (
    <div className="w-full h-12 border-b border-gray-200 flex items-center justify-between px-4">
      <div className="flex items-center gap-1">
        <div className="leading-5 text-base font-semibold">{props.title}</div>
        <div className="flex gap-2 items-center">
          <RxInfoCircled className="w-[14px] h-[14px] peer block" />
          <p className="text-xs font-medium hidden peer-hover:block duration-300 ease-in-out">
            {matchTitle(String(props.title).toLowerCase())}
          </p>
        </div>
      </div>
      <a
        href="https://forms.gle/hAxUkgwE28bnqiaw9"
        target="_blank"
        className="flex justify-center items-center gap-x-1.5 rounded-[9px] bg-white px-3 py-1 text-sm font-medium text-black shadow-[0px_0px_2px_#E0E0E0,0px_1px_4px_-2px_rgba(24,39,75,0.02),0px_4px_4px_-2px_rgba(24,39,75,0.06)] hover:bg-gray-50 cursor-pointer"
      >
        <RxExternalLink className="w-[14px] h-[14px]" />
        Request data
      </a>
    </div>
  );
}
