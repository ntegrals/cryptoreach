import {
  getSession,
  getSubscription,
  getActiveProductsWithPrices
} from '@/app/supabase-server';
import SettingsSection from '@/components/application/settings/SettingsSection';
import SettingsTitle from '@/components/application/settings/SettingsTitle';
import { redirect } from 'next/navigation';
import React from 'react';

export default async function page() {
  const [session, products, subscription] = await Promise.all([
    getSession(),
    getActiveProductsWithPrices(),
    getSubscription()
  ]);

  if (!session) {
    return redirect('/signin');
  }

  return (
    <div>
      <SettingsTitle />
      <SettingsSection
        name={session?.user?.user_metadata?.full_name}
        email={session?.user?.email}
        subscription={subscription}
      />
    </div>
  );
}
