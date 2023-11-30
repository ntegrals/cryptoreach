import Image from 'next/image';
import React from 'react';
import { RxBadge, RxDownload } from 'react-icons/rx';

export default function Feature4() {
  return (
    <div>
      <section className="m-auto grid max-w-7xl grid-cols-1 pt-12 md:grid-cols-[1.35fr_0.65fr] md:pt-[140px] pb-20 md:pb-[200px]">
        <div className="relative  m-auto w-full px-6 ">
          <div className="max-w-[540px]">
            <h5 className="mb-4 text-[15px] font-semibold text-[#0098F1]">
              Organizations
            </h5>
            <h2 className="mb-4 text-4xl font-semibold leading-10 md:text-[2.5rem] md:leading-[3rem]">
              Reach the users of your competitors
            </h2>
            <p className="mb-16 font-medium text-[#333331]">
              Gain a competitive edge by tapping into your rivals' user base.
              Our platform allows you to reach out to users engaging with
              competitors, helping you identify potential leads.
            </p>
          </div>
          <div className="mt-16 grid max-w-[820px] grid-cols-1 gap-10 md:grid-cols-2">
            <div className="flex max-w-[356px] items-start space-x-4">
              <div className="h-8 w-8 min-w-[32px] md:h-10 md:w-10 md:min-w-[40px] bg-[#E5F4FE] rounded-lg flex justify-center items-center">
                <RxBadge className="w-7 h-7 text-[#0098F1] stroke-[0.3px]" />
              </div>

              <div className="flex flex-col">
                <h5 className="mb-1 text-[17px] font-semibold text-[#333331]">
                  Competitor Analysis
                </h5>
                <p className="font-medium text-[#333331]">
                  Identify top competitors in your niche to focus your outreach.
                </p>
              </div>
            </div>
            <div className="flex max-w-[356px] items-start space-x-4 ">
              <div className="h-8 w-8 min-w-[32px] md:h-10 md:w-10 md:min-w-[40px] bg-[#E5F4FE] rounded-lg flex justify-center items-center">
                <RxDownload className="w-7 h-7 text-[#0098F1] stroke-[0.3px]" />
              </div>
              <div className="flex flex-col">
                <h5 className="mb-1 text-[17px] font-semibold text-[#333331]">
                  Email Exporting
                </h5>
                <p className="font-medium text-[#333331]">
                  Export competitor user emails in one click.
                </p>
              </div>
            </div>

            <div className="flex max-w-[356px] items-start space-x-4">
              <svg
                className="h-8 w-8 min-w-[32px] md:h-10 md:w-10 md:min-w-[40px]"
                width="100%"
                height="100%"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width={40} height={40} rx={8} fill="#E5F5FE" />
                <path
                  d="M29.3327 14.3738C29.3327 13.3774 28.7001 12.491 27.7579 12.1671L21.1371 9.89127C20.3998 9.63781 19.5989 9.63781 18.8616 9.89127L12.2408 12.1671C11.2986 12.491 10.666 13.3774 10.666 14.3738V19.8979C10.666 25.6991 15.3327 28.1668 19.9993 30.6844C24.666 28.1668 29.3327 25.6991 29.3327 19.8979V14.3738Z"
                  stroke="#0098F1"
                  strokeWidth="2.33333"
                  strokeLinecap="square"
                  strokeLinejoin="round"
                />
              </svg>
              <div className="flex flex-col">
                <h5 className="mb-1 text-[17px] font-semibold text-[#333331]">
                  Save Time and Money
                </h5>
                <p className="font-medium text-[#333331]">
                  Stop ineffective growth strategies with targeted outreach
                </p>
              </div>
            </div>
            <div className="flex max-w-[356px] items-start space-x-4 ">
              <svg
                className="h-8 w-8 min-w-[32px] md:h-10 md:w-10 md:min-w-[40px]"
                width="100%"
                height="100%"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width={40} height={40} rx={8} fill="#E5F5FE" />
                <path
                  d="M15.041 17.3749H24.9577C26.8907 17.3749 28.4577 18.9419 28.4577 20.8749V27.2916C28.4577 29.2246 26.8907 30.7916 24.9577 30.7916H15.041C13.108 30.7916 11.541 29.2246 11.541 27.2916V20.8749C11.541 18.9419 13.108 17.3749 15.041 17.3749ZM15.041 17.3749V14.1666C15.041 11.4282 17.2609 9.20825 19.9993 9.20825C22.4407 9.20825 24.47 10.9727 24.8815 13.2959M19.9993 22.3333V25.8333"
                  stroke="#0098F1"
                  strokeWidth="2.33"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <div className="flex flex-col">
                <h5 className="mb-1 text-[17px] font-semibold text-[#333331]">
                  Potential Lead Identification
                </h5>
                <p className="font-medium text-[#333331]">
                  Use our analytics to categorize potential leads and
                  collaborators.
                </p>
              </div>
            </div>
          </div>
        </div>
        <Image
          className="hidden sm:block"
          src={'/sendingguy.png'}
          width={300}
          height={500}
          // width={348}
          // height={589}
          alt=""
        />
      </section>
    </div>
  );
}
