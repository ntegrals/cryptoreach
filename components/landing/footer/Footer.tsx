import Link from 'next/link';
import React from 'react';
import { RxShadow } from 'react-icons/rx';

export default function Footer() {
  return (
    <>
      <footer className="relative flex flex-col bg-[#FAF9F7]">
        <div className="absolute inset-0 flex items-end overflow-hidden">
          {/* <video
            src="/footer.mp4"
            // autoPlay=""
            // playsInline=""
            className="-mb-10 w-[170%] max-w-[170%] -translate-x-[140px] md:w-full md:-translate-x-0"
          /> */}
        </div>
        <div className="relative mx-auto flex max-w-[480px] flex-col items-center px-6 py-6 md:py-20">
          <p className="pb-4 text-center text-3xl font-semibold md:text-[40px]">
            Get started for free
          </p>
          <p className="pb-8 text-center text-base font-medium text-[#333331] md:text-[17px]">
            Get access to over 200k+ web3 user and dev leads and start growing
            your business. No credit card required.
          </p>
          <Link
            href="/signin"
            className="flex h-[48px] w-[240px] items-center justify-center space-x-2 rounded-full bg-[#1A1A19] font-semibold text-white transition-all hover:opacity-80"
          >
            {/* <svg
              width={16}
              height={16}
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M2.99834 2.84736C3.49342 3.24959 3.67915 3.2189 4.60886 3.15687L13.3735 2.63059C13.5594 2.63059 13.4048 2.44515 13.3428 2.41433L11.8872 1.36203C11.6083 1.14549 11.2367 0.897509 10.5245 0.959544L2.03769 1.57854C1.72818 1.60923 1.66636 1.76399 1.78962 1.88803L2.99834 2.84736ZM3.52455 4.88996V14.1119C3.52455 14.6075 3.77222 14.7929 4.32965 14.7623L13.962 14.2049C14.5197 14.1742 14.5818 13.8333 14.5818 13.4307V4.27067C14.5818 3.86872 14.4272 3.65196 14.0858 3.6829L4.01992 4.27067C3.64843 4.3019 3.52452 4.48772 3.52452 4.88996H3.52455ZM13.0336 5.38463C13.0953 5.66343 13.0336 5.94198 12.7542 5.97332L12.2901 6.06579V12.874C11.8872 13.0906 11.5156 13.2144 11.206 13.2144C10.7102 13.2144 10.5861 13.0595 10.2147 12.5956L7.17895 7.82982V12.4409L8.1396 12.6576C8.1396 12.6576 8.1396 13.2144 7.36455 13.2144L5.22795 13.3383C5.16588 13.2144 5.22795 12.9052 5.44468 12.8433L6.00224 12.6887V6.59204L5.2281 6.53C5.16601 6.25121 5.32064 5.84922 5.75457 5.81803L8.04665 5.66352L11.206 10.4914V6.22052L10.4005 6.12808C10.3386 5.78725 10.5861 5.53977 10.8958 5.50908L13.0336 5.38463ZM1.32513 0.743034L10.1528 0.0929389C11.2368 -3.46452e-05 11.5157 0.0622504 12.1971 0.55718L15.015 2.53775C15.4799 2.87833 15.6349 2.97105 15.6349 3.34232V14.2049C15.6349 14.8857 15.3869 15.2883 14.5199 15.3499L4.26831 15.9689C3.61743 16 3.30766 15.9072 2.9668 15.4737L0.891667 12.7813C0.519867 12.2857 0.365234 11.9149 0.365234 11.4812V1.82577C0.365234 1.26906 0.61331 0.804661 1.32513 0.743034Z"
                fill="currentColor"
              />
            </svg> */}
            <RxShadow className="w-4 h-4" />
            <span>Log in to get started </span>
          </Link>
        </div>
        <div className="bg-red mx-auto mt-auto flex w-full max-w-7xl flex-col px-6 pb-8 pt-[140px] md:flex-row md:pb-10 md:pt-0">
          <div className="flex flex-row justify-center w-full md:space-x-8 md:space-y-0">
            <a
              className="text-[13px] font-medium text-[#333331] opacity-50 transition-opacity hover:opacity-30"
              href="/privacy"
            >
              Privacy Policy
            </a>
            <a
              className="text-[13px] font-medium text-[#333331] opacity-50 transition-opacity hover:opacity-30"
              href="/terms"
            >
              Terms and Conditions
            </a>
          </div>
          {/* <div className="mt-2 flex items-end justify-center md:ml-auto md:mt-0">
            <a
              href="https://reboot.studio/"
              target="_blank"
              rel="noreferrer"
              className="text-[13px] font-medium text-[#333331] opacity-50 transition-opacity hover:opacity-30"
            >
              a reboot product
            </a>
          </div> */}
        </div>
      </footer>
    </>
  );
}
