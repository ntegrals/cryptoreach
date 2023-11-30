import React from 'react';
import { LiaCoinsSolid } from 'react-icons/lia';

export default function CreditOverview(props: any) {
  return (
    <div>
      <div>
        <div className="w-full flex flex-col items-start gap-1 cursor-default text-[#222529]group gap-x-1.5 rounded-md p-2 px-1 text-sm leading-5 font-medium">
          {/* <RxStar className="h-[16px] w-[16px] shrink-0" /> */}
          <div>Remaining Credits:</div>
          <div className="flex items-center gap-1">
            <LiaCoinsSolid className="h-[16px] w-[16px] shrink-0" />
            {new Intl.NumberFormat().format(props.credits)}
          </div>
        </div>
      </div>
    </div>
  );
}
