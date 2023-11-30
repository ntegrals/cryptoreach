import { getSession, getUserDetails } from '@/app/supabase-server';
import Shell from '@/components/application/shell/Shell';
import Script from 'next/script';
import { PropsWithChildren } from 'react';

export const dynamic = 'force-dynamic';

export default async function Layout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children
}: PropsWithChildren) {
  const [userDetails] = await Promise.all([getUserDetails()]);

  return (
    <div>
      <Script
        id="crisp-chat-int"
        type="text/javascript"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
window.$crisp=[];window.CRISP_WEBSITE_ID="INSERTYOURIDHERE";
(function(){d=document;s=d.createElement("script");s.src="https://client.crisp.chat/l.js";
s.async=1;d.getElementsByTagName("head")[0].appendChild(s);})();`
        }}
      />
      {/* @ts-ignore */}
      <Shell credits={userDetails?.available_credits}>{children}</Shell>
    </div>
  );
}
