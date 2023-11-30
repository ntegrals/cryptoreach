import Feature1 from '@/components/landing/feature1/Feature1';
import Feature2 from '@/components/landing/feature2/Feature2';
import Feature3 from '@/components/landing/feature3/Feature3';
import Feature4 from '@/components/landing/feature4/Feature4';
import FeatureMulti from '@/components/landing/featureMulti/FeatureMulti';
import Footer from '@/components/landing/footer/Footer';
import Hero from '@/components/landing/hero/Hero';
import NavBar from '@/components/landing/navigation/NavBar';
import Head from 'next/head';
import Script from 'next/script';
import React from 'react';

export default function page() {
  return (
    <div className="min-h-[calc(100dvh-4rem)] md:min-h[calc(100dvh-5rem)]">
      <Head>
        <script
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: `
              window.$crisp=[];
              window.CRISP_WEBSITE_ID="d3be2307-3dad-44b5-8696-b18f3073a5bf";
              (function(){
                var d=document;
                var s=d.createElement("script");
                s.src="https://client.crisp.chat/l.js";
                s.async=1;
                d.getElementsByTagName("head")[0].appendChild(s);
              })();
            `
          }}
        />
      </Head>

      <div className="overflow-x-hidden bg-white font-sans text-corporateMain">
        <NavBar />
        <Hero />
        <Feature1 />
        <Feature2 />
        <Feature3 />
        <Feature4 />
        {/* <FeatureMulti /> */}
        <Footer />
      </div>
    </div>
  );
}
