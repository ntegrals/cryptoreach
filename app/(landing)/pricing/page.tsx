import NavBar from '@/components/landing/navigation/NavBar';
import PricingFAQ from '@/components/landing/pricing/PricingFAQ';
import PricingSection from '@/components/landing/pricing/PricingSection';
import PricingTitle from '@/components/landing/pricing/PricingTitle';
import React from 'react';

export default function page() {
  return (
    <div>
      <NavBar />
      {/* <PricingTitle /> */}
      <PricingSection />

      <PricingFAQ />
    </div>
  );
}
