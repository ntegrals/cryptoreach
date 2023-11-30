import { getSession } from '@/app/supabase-server';
import Feature1 from '@/components/landing/feature1/Feature1';
import Feature2 from '@/components/landing/feature2/Feature2';
import Feature3 from '@/components/landing/feature3/Feature3';
import Feature4 from '@/components/landing/feature4/Feature4';
import FeatureMulti from '@/components/landing/featureMulti/FeatureMulti';
import Footer from '@/components/landing/footer/Footer';
import Hero from '@/components/landing/hero/Hero';
import NavBar from '@/components/landing/navigation/NavBar';
import { redirect } from 'next/navigation';
import React from 'react';

export default async function page() {
  const session = await getSession();

  if (session) {
    return redirect('/people');
  }

  return (
    <div className="min-h-[calc(100dvh-4rem)] md:min-h[calc(100dvh-5rem)]">
      <div className="overflow-x-hidden bg-white font-sans text-corporateMain">
        <NavBar />
        <Hero />
        <Feature1 />
        <Feature3 />
        <Feature4 />
        {/* <Feature2 /> */}
        {/* <FeatureMulti /> */}
        <Footer />
      </div>
    </div>
  );
}
