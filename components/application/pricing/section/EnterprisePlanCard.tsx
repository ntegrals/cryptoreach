import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { RxChatBubble, RxCheck } from 'react-icons/rx';

export default function EnterprisePlanCard(props: any) {
  return (
    <div className="flex flex-col shadow-xl rounded-md bg-white h-[320px] w-[240px]">
      <div className="flex flex-col items-start gap-6 p-4 ">
        <div>
          <h3 className="font-semibold text-xl">{props.data.title}</h3>
          <p className="text-gray-500 text-sm">{props.data.subTitle}</p>
        </div>
        <div>
          <h1 className="font-semibold text-2xl">
            {props.billingInterval === 'month'
              ? props.data['month'].price
              : props.data['year'].price}
          </h1>
          <p className=" text-gray-500">
            {props.billingInterval === 'month'
              ? props.data['month'].interval
              : props.data['year'].interval}
          </p>
        </div>
        <div>
          {props.data.features.map((feature: any) => (
            <div className="flex gap-1 items-center">
              <RxCheck className="text-blue-600" />
              <p className="text-sm">{feature}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-gray-50 h-full rounded-b-xl p-4 flex justify-center items-center">
        <Link
          href={'https://z13ppaic9so.typeform.com/to/vKPSKcnZ'}
          target="_blank"
          className="bg-blue-900 flex items-center justify-center gap-2 w-full text-white rounded-lg font-medium text-sm px-6 py-1.5 hover:scale-[1.03] ease-in-out duration-200"
        >
          <RxChatBubble />
          Chat to sales
        </Link>
      </div>
    </div>
  );
}
