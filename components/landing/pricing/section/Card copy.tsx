import Image from 'next/image';
import React from 'react';

export default function Card() {
  return (
    <div className="flex flex-col shadow-xl rounded-lg bg-white h-[400px] w-[280px]">
      <div className="flex flex-col items-start gap-8 p-6 ">
        <div>
          <h3 className="font-semibold text-2xl">Free</h3>
          <p className="text-gray-500">Perfect for small side projects</p>
        </div>
        <div>
          <h1 className="font-semibold text-5xl">$0</h1>
          <p className="font-medium text-gray-500">per month</p>
        </div>
        <div>
          <div className="flex gap-1">
            {/* icon */}
            <p>3k+ components</p>
          </div>
          <div className="flex gap-1">
            {/* icon */}
            <p>Highly customisable</p>
          </div>
          <div className="flex gap-1">
            {/* icon */}
            <p>Lifetime updates</p>
          </div>
        </div>
      </div>
      <div className="bg-gray-50 h-screen rounded-b-lg p-6 flex justify-center items-center">
        <button className="bg-blue-900 text-white rounded-lg font-medium text-lg px-6 py-1 hover:scale-[1.03] ease-in-out duration-200">
          Start 30 day free trial
        </button>
      </div>
    </div>
  );
}
