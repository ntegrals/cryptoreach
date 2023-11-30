import {
  getSession,
  getSubscription,
  getActiveProductsWithPrices
} from '@/app/supabase-server';
import Pricing from '@/components/application/pricing/PricingSection';
import PricingSection from '@/components/application/pricing/PricingSection';
import PricingTitle from '@/components/application/pricing/PricingTitle';
import PricingFAQ from '@/components/landing/pricing/PricingFAQ';
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
      <PricingTitle />
      <PricingSection
        session={session}
        user={session?.user}
        products={products}
        subscription={subscription}
      />
      <PricingFAQ />
    </div>
  );
}
