'use client';

import { postData } from '@/utils/helpers';
import { Session } from '@supabase/supabase-js';
import { useRouter } from 'next/navigation';

interface Props {
  session: Session;
}

export default function ManageSubscription({ session }: Props) {
  const router = useRouter();
  const redirectToCustomerPortal = async () => {
    try {
      const { url } = await postData({
        url: '/api/create-portal-link'
      });
      router.push(url);
    } catch (error) {
      if (error) return alert((error as Error).message);
    }
  };

  return (
    <button
      className="text-xs text-[#5c5e6350] underline cursor-pointer mt-1.5"
      // disabled={!session}
      onClick={redirectToCustomerPortal}
    >
      Manage Subscription
    </button>
  );
}
