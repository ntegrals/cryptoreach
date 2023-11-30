import Image from 'next/image';
import React from 'react';
import {
  RxArchive,
  RxBadge,
  RxBarChart,
  RxClock,
  RxGlobe,
  RxLaptop,
  RxTimer
} from 'react-icons/rx';

export default function Feature3() {
  return (
    <div>
      <section className="m-auto grid items-center max-w-7xl grid-cols-1 pt-12 md:grid-cols-[1.35fr_0.65fr] md:pt-[140px] pb-20 md:pb-[200px]">
        <div className="relative  m-auto w-full px-6 ">
          <div className="max-w-[540px]">
            <h5 className="mb-4 text-[15px] font-semibold text-[#FF7E56]">
              Filtering
            </h5>
            <h2 className="mb-4 text-4xl font-semibold leading-10 md:text-[2.5rem] md:leading-[3rem]">
              Target leads that already use similar crypto products.
            </h2>
            <p className="mb-16 font-medium text-[#333331]">
              We help you connect with the users who matter most. Our filtering
              options allow you to pinpoint crypto users already using similar
              products.
            </p>
          </div>
          <div className="mt-16 grid max-w-[820px] grid-cols-1 gap-10 md:grid-cols-2">
            <div className="flex max-w-[356px] items-start space-x-4">
              <div className="h-8 w-8 min-w-[32px] md:h-10 md:w-10 md:min-w-[40px] bg-[#FEEEE9] rounded-lg flex justify-center items-center">
                <RxArchive className="w-7 h-7 text-[#FF7E56] stroke-[0.3px]" />
              </div>

              <div className="flex flex-col">
                <h5 className="mb-1 text-[17px] font-semibold text-[#333331]">
                  Interest-Based Search
                </h5>
                <p className="font-medium text-[#333331]">
                  Find users and developers with the specific interests that
                  matter most to your business.
                </p>
              </div>
            </div>
            <div className="flex max-w-[356px] items-start space-x-4 ">
              <div className="h-8 w-8 min-w-[32px] md:h-10 md:w-10 md:min-w-[40px] bg-[#FEEEE9] rounded-lg flex justify-center items-center">
                <RxClock className="w-7 h-7 text-[#FF7E56] stroke-[0.3px]" />
              </div>
              <div className="flex flex-col">
                <h5 className="mb-1 text-[17px] font-semibold text-[#333331]">
                  Category Search
                </h5>
                <p className="font-medium text-[#333331]">
                  Target leads already familiar with product categories most
                  interesting to you.
                </p>
              </div>
            </div>
            <div className="flex max-w-[356px] items-start space-x-4 ">
              <div className="h-8 w-8 min-w-[32px] md:h-10 md:w-10 md:min-w-[40px] bg-[#FEEEE9] rounded-lg flex justify-center items-center">
                <RxGlobe className="w-7 h-7 text-[#FF7E56] stroke-[0.3px]" />
              </div>
              <div className="flex flex-col">
                <h5 className="mb-1 text-[17px] font-semibold text-[#333331]">
                  Location Search
                </h5>
                <p className="font-medium text-[#333331]">
                  Target leads in a specific location.
                </p>
              </div>
            </div>
            <div className="flex max-w-[356px] items-start space-x-4">
              <div className="h-8 w-8 min-w-[32px] md:h-10 md:w-10 md:min-w-[40px] bg-[#FEEEE9] rounded-lg flex justify-center items-center">
                <RxLaptop className="w-7 h-7 text-[#FF7E56] stroke-[0.3px]" />
              </div>
              <div className="flex flex-col">
                <h5 className="mb-1 text-[17px] font-semibold text-[#333331]">
                  Activity Search
                  <span
                    className="ml-2 rounded-full px-2 py-1 text-[13px] font-bold uppercase"
                    style={{ background: '#FDEEE9', color: '#FF7E56' }}
                  >
                    soon
                  </span>
                </h5>
                <p className="font-medium text-[#333331]">
                  Target active crypto users and increase conversion.
                </p>
              </div>
            </div>
          </div>
        </div>
        <Image
          className="hidden sm:block"
          src={'/computerwoman.png'}
          width={400}
          height={500}
          alt=""
        />
        {/* <div className="order-1 mt-10 aspect-square w-[80%] self-center justify-self-center sm:order-last sm:mt-0 sm:w-full sm:self-end ">
          <div className="" style={{ width: '100%', height: '100%' }}>
            <canvas
              style={{ verticalAlign: 'top', width: 416, height: 416 }}
              width={832}
              height={832}
            />
          </div>
        </div> */}
      </section>
    </div>
  );
}
