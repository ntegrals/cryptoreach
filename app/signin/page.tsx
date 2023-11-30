import AuthUI from './AuthUI';
import { getSession } from '@/app/supabase-server';
import Logo from '@/components/icons/Logo';
import Image from 'next/image';
import { redirect } from 'next/navigation';
import { RxShadowInner } from 'react-icons/rx';

export default async function SignIn() {
  const session = await getSession();

  if (session) {
    return redirect('/people');
  }

  return (
    <div className="flex justify-center items-center h-screen height-screen-helper">
      <div className="flex flex-col justify-between max-w-lg p-3 m-auto w-80 ">
        <div className="flex justify-center pb-12 ">
          {/* <Logo width="64px" height="64px" /> */}
          {/* <Image src="/logo.png" width={64} height={64} alt="" /> */}
          {/* <RxShadowInner className="text-4xl" /> */}
        </div>
        <div className="border px-8 py-6 rounded-[9px] bg-[#F6F5F4]">
          <div className="mb-6 flex flex-col gap-6">
            <div className="flex items-center gap-3 justify-center">
              <div className="flex items-center gap-1">
                <RxShadowInner className="w-[16px] h-[16px]" />
                <h3 className="font-semibold">cryptoreach</h3>
              </div>
            </div>
            {/* <p className="text-scale-1100 text-auth-widget-test">
              Sign in today for Supa stuff
            </p> */}
          </div>
          <AuthUI />
        </div>
      </div>
    </div>
  );
}
