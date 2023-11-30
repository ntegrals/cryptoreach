'use client';

import s from './Navbar.module.css';
import { useSupabase } from '@/app/supabase-provider';
import { useRouter } from 'next/navigation';
import { RxExit } from 'react-icons/rx';

export default function SignOutShellButton() {
  const router = useRouter();
  const { supabase } = useSupabase();
  return (
    <div
      className="w-full cursor-pointer text-[#222529] hover:bg-[#EEEFF1] duration-150 ease-in-out group flex items-center gap-x-1.5 rounded-md p-1 my-1 px-1 text-sm leading-5 font-medium"
      onClick={async () => {
        await supabase.auth.signOut();
        router.push('/signin');
      }}
    >
      <RxExit className="h-[16px] w-[16px] shrink-0" />
      Sign Out
    </div>
  );
}
