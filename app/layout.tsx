import SupabaseProvider from './supabase-provider';
import Footer from '@/components/ui/Footer';
import Navbar from '@/components/ui/Navbar';
import Script from 'next/script';
import { PropsWithChildren } from 'react';
import { Toaster } from 'react-hot-toast';
import 'styles/main.css';

const meta = {
  title: 'Cryptoreach - Web3 outreach made easy',
  description:
    'Cryptoreach is a platform that helps you reach web3 users at scale.',
  cardImage: '/test4.png',
  robots: 'follow, index',
  favicon: '/favicon.ico',
  url: 'https://cryptoreach.xyz',
  type: 'website'
};

export const metadata = {
  title: meta.title,
  description: meta.description,
  cardImage: meta.cardImage,
  robots: meta.robots,
  favicon: meta.favicon,
  url: meta.url,
  type: meta.type,
  openGraph: {
    url: meta.url,
    title: meta.title,
    description: meta.description,
    cardImage: meta.cardImage,
    type: meta.type,
    site_name: meta.title
  },
  twitter: {
    card: 'summary_large_image',
    site: '@vercel',
    title: meta.title,
    description: meta.description,
    cardImage: meta.cardImage
  }
};

export const dynamic = 'force-dynamic';

export default function RootLayout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children
}: PropsWithChildren) {
  return (
    <html lang="en">
      <body className="bg-white text-[#232529] loading font-inter">
        <Script
          id="crisp-chat-int"
          type="text/javascript"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
window.$crisp=[];window.CRISP_WEBSITE_ID="d3be2307-3dad-44b5-8696-b18f3073a5bf";
(function(){d=document;s=d.createElement("script");s.src="https://client.crisp.chat/l.js";
s.async=1;d.getElementsByTagName("head")[0].appendChild(s);})();`
          }}
        />
        <div>
          <Toaster position="top-right" />
        </div>
        <SupabaseProvider>
          {/* <Navbar /> */}
          <main
            id="skip"
            className="min-h-[calc(100dvh-4rem)] md:min-h[calc(100dvh-5rem)]"
          >
            {children}
          </main>
          {/* <Footer /> */}
        </SupabaseProvider>
      </body>
    </html>
  );
}
