import React from 'react';

export default function Feature1() {
  return (
    <div>
      <section className="flex items-center justify-between m-auto mb-10 max-w-7xl px-6 pt-10 sm:mb-[64px] sm:pt-[140px]">
        <div className="max-w-[540px]">
          <h5
            className="mb-4 text-[15px] font-semibold"
            style={{ color: '#44C67F' }}
          >
            Outreach
          </h5>
          <h2 className="mb-4 text-4xl font-semibold leading-10 md:text-[2.5rem] md:leading-[3rem]">
            The world’s most targeted crypto user and developer database. Export
            in seconds.
          </h2>
          <p className="max-w-[30rem] font-medium text-[#333331]">
            With our intuitive platform, finding active users and developers to
            use and build on your product or protocol has never been easier.
          </p>
        </div>
        <img className="hidden sm:block" src="/sending.png" alt="hero" />
      </section>
      <section className="flex flex-col items-center justify-center overflow-hidden ">
        <div className="flex min-w-[200vw] max-w-[200vw] space-x-12 md:min-w-[2236px] md:max-w-[2236px] md:space-x-20">
          <div
            id="PlayBackRatePanelYPSC"
            className="PlayBackRatePanelYPSC"
            style={{
              display: 'none',
              top: 2,
              right: '-44px',
              bottom: 'initial',
              left: 'initial'
            }}
          >
            <button id="SpeedUpYPSC" className="btnYPSC btnYPSC-right">
              &gt;&gt;
            </button>
            <button id="PlayBackRateYPSC" className="btnYPSC">
              1.00
            </button>
            <button id="SpeedDownYPSC" className="btnYPSC btnYPSC-left">
              &lt;&lt;
            </button>
            <button id="SettingYPSC" className="btnYPSC" />
          </div>

          <div
            id="PlayBackRatePanelYPSC"
            className="PlayBackRatePanelYPSC"
            style={{
              display: 'none',
              top: 2,
              right: '-44px',
              bottom: 'initial',
              left: 'initial'
            }}
          >
            <button id="SpeedUpYPSC" className="btnYPSC btnYPSC-right">
              &gt;&gt;
            </button>
            <button id="PlayBackRateYPSC" className="btnYPSC">
              1.00
            </button>
            <button id="SpeedDownYPSC" className="btnYPSC btnYPSC-left">
              &lt;&lt;
            </button>
            <button id="SettingYPSC" className="btnYPSC" />
          </div>
          {/* <div className="h-auto w-screen overflow-hidden rounded-md border border-black/10 bg-white shadow-[0px_94px_38px_rgba(0,0,0,0.01),0px_53px_32px_rgba(0,0,0,0.02),0px_24px_24px_rgba(0,0,0,0.03),0px_6px_13px_rgba(0,0,0,0.04),0px_0px_0px_rgba(0,0,0,0.04)] transition-all duration-1000 sm:rounded-xl md:h-[613.48px] md:w-[1078px] -translate-x-5">
            <video
              src="https://magicbeans.app/notion-invoice.mp4"
              preload="auto"
              playsInline=""
              autoPlay=""
              muted=""
              loop=""
              className="h-full w-full"
            />
            <img
              src="/test4.png"
              alt="hero"
              className="h-full w-full object-cover"
            />
          </div> */}
        </div>
        <div className="m-auto mb-20 mt-16 grid w-full max-w-7xl grid-cols-1 gap-8 px-6 sm:gap-10 md:grid-cols-3">
          <div className="flex max-w-[356px] items-start space-x-4">
            <div className="min-w-[32px] md:min-w-[40px]">
              <svg
                className="h-8 w-8 min-w-[32px] md:h-10 md:w-10 md:min-w-[40px]"
                width="100%"
                height="100%"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  width={40}
                  height={40}
                  rx={8}
                  fill="#44C67F"
                  fillOpacity="0.1"
                />
                <path
                  d="M15.3327 10.6666C15.3327 10.0223 14.8103 9.49996 14.166 9.49996C13.5217 9.49996 12.9993 10.0223 12.9993 10.6666H15.3327ZM12.9993 17.6666C12.9993 18.311 13.5217 18.8333 14.166 18.8333C14.8103 18.8333 15.3327 18.311 15.3327 17.6666H12.9993ZM10.666 13C10.0217 13 9.49935 13.5223 9.49935 14.1666C9.49935 14.811 10.0217 15.3333 10.666 15.3333V13ZM17.666 15.3333C18.3103 15.3333 18.8327 14.811 18.8327 14.1666C18.8327 13.5223 18.3103 13 17.666 13V15.3333ZM29.1322 24.1828C29.5878 23.7272 29.5878 22.9885 29.1322 22.5329C28.6766 22.0772 27.9379 22.0772 27.4823 22.5329L29.1322 24.1828ZM22.5326 27.4826C22.077 27.9382 22.077 28.6769 22.5326 29.1325C22.9882 29.5881 23.7269 29.5881 24.1825 29.1325L22.5326 27.4826ZM24.1825 22.5329C23.7269 22.0772 22.9882 22.0772 22.5326 22.5329C22.077 22.9885 22.077 23.7272 22.5326 24.1828L24.1825 22.5329ZM27.4823 29.1325C27.9379 29.5881 28.6766 29.5881 29.1322 29.1325C29.5878 28.6769 29.5878 27.9382 29.1322 27.4826L27.4823 29.1325ZM25.8327 16.5C24.544 16.5 23.4993 15.4553 23.4993 14.1666H21.166C21.166 16.744 23.2554 18.8333 25.8327 18.8333V16.5ZM28.166 14.1666C28.166 15.4553 27.1213 16.5 25.8327 16.5V18.8333C28.41 18.8333 30.4993 16.744 30.4993 14.1666H28.166ZM25.8327 11.8333C27.1213 11.8333 28.166 12.878 28.166 14.1666H30.4993C30.4993 11.5893 28.41 9.49996 25.8327 9.49996V11.8333ZM25.8327 9.49996C23.2554 9.49996 21.166 11.5893 21.166 14.1666H23.4993C23.4993 12.878 24.544 11.8333 25.8327 11.8333V9.49996ZM12.9993 10.6666V14.1666H15.3327V10.6666H12.9993ZM12.9993 14.1666V17.6666H15.3327V14.1666H12.9993ZM10.666 15.3333H14.166V13H10.666V15.3333ZM14.166 15.3333H17.666V13H14.166V15.3333ZM27.4823 22.5329L25.0074 25.0077L26.6574 26.6576L29.1322 24.1828L27.4823 22.5329ZM25.0074 25.0077L22.5326 27.4826L24.1825 29.1325L26.6574 26.6576L25.0074 25.0077ZM22.5326 24.1828L25.0074 26.6576L26.6574 25.0077L24.1825 22.5329L22.5326 24.1828ZM25.0074 26.6576L27.4823 29.1325L29.1322 27.4826L26.6574 25.0077L25.0074 26.6576ZM12.9993 23.5H15.3327V21.1666H12.9993V23.5ZM16.4993 24.6666V27H18.8327V24.6666H16.4993ZM15.3327 28.1666H12.9993V30.5H15.3327V28.1666ZM11.8327 27V24.6666H9.49935V27H11.8327ZM12.9993 28.1666C12.355 28.1666 11.8327 27.6443 11.8327 27H9.49935C9.49935 28.933 11.0664 30.5 12.9993 30.5V28.1666ZM16.4993 27C16.4993 27.6443 15.977 28.1666 15.3327 28.1666V30.5C17.2657 30.5 18.8327 28.933 18.8327 27H16.4993ZM15.3327 23.5C15.977 23.5 16.4993 24.0223 16.4993 24.6666H18.8327C18.8327 22.7336 17.2657 21.1666 15.3327 21.1666V23.5ZM12.9993 21.1666C11.0664 21.1666 9.49935 22.7336 9.49935 24.6666H11.8327C11.8327 24.0223 12.355 23.5 12.9993 23.5V21.1666Z"
                  fill="#44C67F"
                />
              </svg>
            </div>
            <div className="flex flex-col">
              <h5 className="mb-1 text-[17px] font-semibold text-[#333331]">
                Real-Time Data Access
              </h5>
              <p className="font-medium text-[#333331]">
                Get access to continuously updated crypto user and developer
                profiles.
              </p>
            </div>
          </div>
          <div className="flex max-w-[356px] items-start space-x-4">
            <div className="min-w-[32px] md:min-w-[40px]">
              <svg
                className="h-8 w-8 min-w-[32px] md:h-10 md:w-10 md:min-w-[40px]"
                width="100%"
                height="100%"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width={40} height={40} rx={8} fill="#EAF7F0" />
                <path
                  d="M15.334 30.5C13.401 30.5 11.834 28.933 11.834 27V13C11.834 11.067 13.401 9.5 15.334 9.5H20.2008C20.8197 9.5 21.4132 9.74583 21.8507 10.1834L27.4839 15.8166C27.9215 16.2542 28.1673 16.8477 28.1673 17.4665V27C28.1673 28.933 26.6003 30.5 24.6673 30.5M21.1673 10.0833V14.1667C21.1673 15.4553 22.212 16.5 23.5007 16.5H27.584M20.0007 22.3333V29.3333M20.0007 29.3333L22.9173 26.4167M20.0007 29.3333L17.084 26.4167"
                  stroke="#45C47F"
                  strokeWidth="2.33333"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div className="flex flex-col">
              <h5 className="mb-1 text-[17px] font-semibold text-[#333331]">
                High-Speed Export
              </h5>
              <p className="font-medium text-[#333331]">
                Download large volumes of targeted user and dev leads in
                seconds, not hours.
              </p>
            </div>
          </div>
          <div className="flex max-w-[356px] items-start space-x-4">
            <div className="min-w-[32px] md:min-w-[40px]">
              <svg
                className="h-8 w-8 min-w-[32px] md:h-10 md:w-10 md:min-w-[40px]"
                width="100%"
                height="100%"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width={40} height={40} rx={8} fill="#EAF7F0" />
                <path
                  d="M26.396 24.3659L26.3982 24.368L26.3982 24.368L28.6338 26.6036C29.1698 27.1396 29.1896 28.0685 28.6433 28.6032C28.1058 29.1396 27.1893 29.1557 26.6462 28.6131L26.396 24.3659ZM26.396 24.3659C25.8546 23.8375 24.9403 23.8402 24.3913 24.3766L24.3912 24.3766L24.3871 24.3808C23.8596 24.9211 23.8594 25.837 24.3997 26.3772L24.4001 26.3776L26.6458 28.6127L26.396 24.3659ZM13.5166 15.5257L13.5174 15.5265C14.0531 16.0622 14.9707 16.0824 15.5055 15.537C16.0568 14.9962 16.0561 14.0789 15.5162 13.5388C15.5161 13.5387 15.5161 13.5386 15.516 13.5385L13.2914 11.3034L13.291 11.303C12.7565 10.7685 11.8494 10.7356 11.303 11.2819C10.7656 11.8194 10.7491 12.7365 11.292 13.28C11.2922 13.2802 11.2923 13.2803 11.2925 13.2805L13.5166 15.5257ZM24.3892 13.6123L24.3892 13.6123L24.3871 13.6145C23.8596 14.1548 23.8594 15.0707 24.3997 15.6109C24.9431 16.1543 25.8606 16.1379 26.3982 15.6003L28.6338 13.3648L28.4571 13.1881L28.6338 13.3648C29.1758 12.8229 29.1729 11.9053 28.6232 11.3557C28.0917 10.8243 27.1743 10.8273 26.6352 11.3663L26.6351 11.3663L24.3892 13.6123ZM11.3431 28.6L11.3452 28.6022C11.8827 29.1397 12.7999 29.1561 13.3434 28.613C13.3435 28.6129 13.3436 28.6128 13.3437 28.6127L15.5772 26.3898C15.5774 26.3895 15.5777 26.3892 15.578 26.3889C16.1304 25.8485 16.1299 24.9316 15.6024 24.3913L15.6003 24.3891C15.0629 23.8517 14.1456 23.8353 13.6021 24.3783C13.602 24.3784 13.6019 24.3785 13.6018 24.3787L11.3684 26.6016C11.3681 26.6018 11.3678 26.6021 11.3675 26.6024C10.8151 27.1429 10.8156 28.0597 11.3431 28.6ZM21.4099 9.17048C21.4099 8.40266 20.7737 7.75 20 7.75C19.2263 7.75 18.5901 8.40266 18.5901 9.17048V12.3972C18.5901 13.1559 19.2278 13.8071 20 13.8071C20.7723 13.8071 21.4099 13.1559 21.4099 12.3972V9.17048ZM30.8295 21.3994C31.5974 21.3994 32.25 20.7632 32.25 19.9895C32.25 19.2158 31.5974 18.5796 30.8295 18.5796H27.6134C26.8455 18.5796 26.1929 19.2158 26.1929 19.9895C26.1929 20.7632 26.8455 21.3994 27.6134 21.3994H30.8295ZM9.15993 18.5796C8.38917 18.5796 7.75 19.2187 7.75 19.9895C7.75 20.7602 8.38917 21.3994 9.15993 21.3994H12.3972C13.165 21.3994 13.8177 20.7632 13.8177 19.9895C13.8177 19.2158 13.165 18.5796 12.3972 18.5796H9.15993ZM21.4099 27.5923C21.4099 26.8246 20.7737 26.1718 20 26.1718C19.2263 26.1718 18.5901 26.8246 18.5901 27.5923V30.819C18.5901 31.5777 19.2278 32.229 20 32.229C20.7723 32.229 21.4099 31.5777 21.4099 30.819V27.5923Z"
                  fill="#45C47F"
                  stroke="#45C47F"
                  strokeWidth="0.5"
                />
              </svg>
            </div>
            <div className="flex flex-col">
              <h5 className="mb-1 text-[17px] font-semibold text-[#333331]">
                Versatile Data Formats
                <span
                  className="ml-2 rounded-full px-2 py-1 text-[13px] font-bold uppercase"
                  style={{ background: '#EAF7F0', color: '#44C67F' }}
                >
                  soon
                </span>
              </h5>
              <p className="font-medium text-[#333331]">
                Choose to export your data in various formats like CSV, Excel,
                etc.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
