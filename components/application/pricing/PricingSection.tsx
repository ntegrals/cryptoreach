'use client';

import Card from './section/Card';
import EnterprisePlanCard from './section/EnterprisePlanCard';
import FreePlanCard from './section/FreePlanCard';
import { Database } from '@/types_db';
import { postData } from '@/utils/helpers';
import { getStripe } from '@/utils/stripe-client';
import { Session, User } from '@supabase/supabase-js';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

const data1 = {
  title: 'Free',
  subTitle: 'Perfect for small side projects',
  month: {
    price: '$0',
    interval: 'per month'
  },
  year: {
    price: '$0',
    interval: 'per month'
  },
  features: [
    '200k+ of Web3 Users',
    'Export leads in seconds',
    'Continuously updated'
  ],
  cta: 'Downgrade'
};
const data2 = {
  title: 'Starter',
  subTitle: 'Best for individuals and recruiters',
  month: {
    plans: {
      '2k': {
        planId: '2k',
        planTitle: '2,000 credits/mo.',
        pricePublic: '$79',
        interval: 'per month',
        price: {
          id: 'price_1O5dWmCATBqgl1FsbLsMA3JK',
          product_id: 'prod_OZ5ohIeYs1uaLc',
          active: true,
          description: null,
          unit_amount: 7900,
          currency: 'usd',
          type: 'recurring',
          interval: 'month',
          interval_count: 1,
          trial_period_days: null,
          metadata: {}
        }
      },
      '4k': {
        planId: '4k',
        planTitle: '4,000 credits/mo.',
        pricePublic: '$149',
        interval: 'per month',
        price: {
          id: 'price_1O5daWCATBqgl1Fsv2aP5Mho',
          product_id: 'prod_OZ5oKI8y01apv5',
          active: true,
          description: null,
          unit_amount: 14900,
          currency: 'usd',
          type: 'recurring',
          interval: 'month',
          interval_count: 1,
          trial_period_days: null,
          metadata: {}
        }
      }
    }
  },

  year: {
    plans: {
      '2k': {
        planId: '2k',
        planTitle: '2,000 credits/mo.',
        pricePublic: '$59',
        interval: 'per month',
        price: {
          id: 'price_1O5dXTCATBqgl1Fs9hRCWmrC',
          product_id: 'prod_OZ5ohIeYs1uaLc',
          active: true,
          description: null,
          unit_amount: 70800,
          currency: 'usd',
          type: 'recurring',
          interval: 'year',
          interval_count: 1,
          trial_period_days: null,
          metadata: {}
        }
      },
      '4k': {
        planId: '4k',
        planTitle: '4,000 credits/mo.',
        pricePublic: '$112',
        interval: 'per month',
        price: {
          id: 'price_1O5ddzCATBqgl1FsJKDNXY4A',
          product_id: 'prod_OZ5oKI8y01apv5',
          active: true,
          description: null,
          unit_amount: 134400,
          currency: 'usd',
          type: 'recurring',
          interval: 'year',
          interval_count: 1,
          trial_period_days: null,
          metadata: {}
        }
      }
    }
  },
  features: [
    '200k+ of Web3 Users',
    'Export leads in seconds',
    'Continuously updated'
  ],
  cta: 'Get started now'
};
const data3 = {
  title: 'Explorer',
  subTitle: 'Best for early stage startups and growth agencies',

  month: {
    plans: {
      '10k': {
        planId: '10k',
        planTitle: '10,000 credits/mo.',
        pricePublic: '$349',
        interval: 'per month',
        price: {
          id: 'price_1Nlxd6CATBqgl1FsUdmlXKIQ',
          product_id: 'prod_OZ5oT4aEsNuuxU',
          active: true,
          description: null,
          unit_amount: 7900,
          currency: 'usd',
          type: 'recurring',
          interval: 'month',
          interval_count: 1,
          trial_period_days: null,
          metadata: {}
        }
      },
      '15k': {
        planId: '15k',
        planTitle: '15,000 credits/mo.',
        pricePublic: '$499',
        interval: 'per month',
        price: {
          id: 'price_1NlxdECATBqgl1Fs2NYUumiJ',
          product_id: 'prod_OZ5oWRxbczo70c',
          active: true,
          description: null,
          unit_amount: 7900,
          currency: 'usd',
          type: 'recurring',
          interval: 'month',
          interval_count: 1,
          trial_period_days: null,
          metadata: {}
        }
      }
    }
  },

  year: {
    plans: {
      '10k': {
        planId: '10k',
        planTitle: '10,000 credits/mo.',
        pricePublic: '$262',
        interval: 'per month',
        price: {
          id: 'price_1Nlxd6CATBqgl1FsRHAzz3Xr',
          product_id: 'prod_OZ5oT4aEsNuuxU',
          active: true,
          description: null,
          unit_amount: 82800,
          currency: 'usd',
          type: 'recurring',
          interval: 'year',
          interval_count: 1,
          trial_period_days: null,
          metadata: {}
        }
      },
      '15k': {
        planId: '15k',
        planTitle: '15,000 credits/mo.',
        pricePublic: '$374',
        interval: 'per month',
        price: {
          id: 'price_1NlxdECATBqgl1Fsi81s1Smg',
          product_id: 'prod_OZ5oWRxbczo70c',
          active: true,
          description: null,
          unit_amount: 82800,
          currency: 'usd',
          type: 'recurring',
          interval: 'year',
          interval_count: 1,
          trial_period_days: null,
          metadata: {}
        }
      }
    }
  },

  features: [
    '200k+ of Web3 Users',
    'Export leads in seconds',
    'Continuously updated'
  ],
  cta: 'Get started now',
  priceId: ''
};
const data5 = {
  title: 'Pro',
  subTitle: 'Best for sales teams and growing companies',
  month: {
    plans: {
      '25k': {
        planId: '25k',
        planTitle: '25,000 credits/mo.',
        pricePublic: '$799',
        interval: 'per month',
        price: {
          id: 'price_1NlxdNCATBqgl1Fs79WAVwWC',
          product_id: 'prod_OZ5pdWAUYb38U6',
          active: true,
          description: null,
          unit_amount: 79900,
          currency: 'usd',
          type: 'recurring',
          interval: 'month',
          interval_count: 1,
          trial_period_days: null,
          metadata: {}
        }
      },
      '50k': {
        planId: '50k',
        planTitle: '50,000 credits/mo.',
        pricePublic: '$1299',
        interval: 'per month',
        price: {
          id: 'price_1NlxdTCATBqgl1FssB4WZmjE',
          product_id: 'prod_OZ5pllOJ74AEur',
          active: true,
          description: null,
          unit_amount: 129900,
          currency: 'usd',
          type: 'recurring',
          interval: 'month',
          interval_count: 1,
          trial_period_days: null,
          metadata: {}
        }
      }
    }
  },

  year: {
    plans: {
      '25k': {
        planId: '25k',
        planTitle: '25,000 credits/mo.',
        pricePublic: '$599',
        interval: 'per month',
        price: {
          id: 'price_1NlxdNCATBqgl1FshDA7mkFH',
          product_id: 'prod_OZ5pdWAUYb38U6',
          active: true,
          description: null,
          unit_amount: 718800,
          currency: 'usd',
          type: 'recurring',
          interval: 'year',
          interval_count: 1,
          trial_period_days: null,
          metadata: {}
        }
      },
      '50k': {
        planId: '50k',
        planTitle: '50,000 credits/mo.',
        pricePublic: '$974',
        interval: 'per month',
        price: {
          id: 'price_1NlxdTCATBqgl1FsCJN8T5G3',
          product_id: 'prod_OZ5pllOJ74AEur',
          active: true,
          description: null,
          unit_amount: 1168800,
          currency: 'usd',
          type: 'recurring',
          interval: 'year',
          interval_count: 1,
          trial_period_days: null,
          metadata: {}
        }
      }
    }
  },

  features: [
    '200k+ of Web3 Users',
    'Export leads in seconds',
    'Continuously updated'
  ],
  cta: 'Get started now',
  priceId: ''
};
// const data4 = {
//   title: 'Enterprise',
//   subTitle: 'Perfect for small side projects',
//   month: {
//     price: 'Custom',
//     interval: 'per month'
//   },
//   year: {
//     price: 'Custom',
//     interval: 'per month'
//   },
//   features: [
//     '200k+ of Web3 Users',
//     'Export leads in seconds',
//     'Continuously updated'
//   ],
//   cta: 'Chat to sales'
// };

type Subscription = Database['public']['Tables']['subscriptions']['Row'];
type Product = Database['public']['Tables']['products']['Row'];
type Price = Database['public']['Tables']['prices']['Row'];
interface ProductWithPrices extends Product {
  prices: Price[];
}
interface PriceWithProduct extends Price {
  products: Product | null;
}
interface SubscriptionWithProduct extends Subscription {
  prices: PriceWithProduct | null;
}

interface Props {
  session: Session | null;
  user: User | null | undefined;
  products: ProductWithPrices[];
  subscription: SubscriptionWithProduct | null;
}

type BillingInterval = 'lifetime' | 'year' | 'month';

export default function PricingSection({
  session,
  user,
  products,
  subscription
}: Props) {
  const [billingInterval, setBillingInterval] =
    useState<BillingInterval>('month');

  const router = useRouter();
  const [priceIdLoading, setPriceIdLoading] = useState<string>();

  const handleCheckout = async (price: Price) => {
    setPriceIdLoading(price.id);
    if (!user) {
      return router.push('/signin');
    }
    if (price.product_id === subscription?.prices?.products?.id) {
      return router.push('/');
    }
    try {
      const { sessionId } = await postData({
        url: '/api/create-checkout-session',
        data: { price }
      });

      const stripe = await getStripe();
      stripe?.redirectToCheckout({ sessionId });
    } catch (error) {
      return alert((error as Error)?.message);
    } finally {
      setPriceIdLoading(undefined);
    }
  };

  // plan states
  const [planStarter, setPlanStarter] = useState('2k');
  const [planExplorer, setPlanExplorer] = useState('10k');
  const [planPro, setPlanPro] = useState('25k');

  return (
    <div className="flex flex-col bg-white justify-center items-center">
      {/* Title Section */}

      <div className="font-bold text-4xl text-center px-32 sm:px-0 pt-8">
        Get started with our plans
      </div>
      <div className="flex flex-col gap-4 items-center justify-center pt-8 ">
        <div className="flex justify-center items-center pb-8">
          <div className="bg-white border border-gray-200 rounded">
            <button
              onClick={() => setBillingInterval('month')}
              type="button"
              className={`${
                billingInterval === 'month'
                  ? ' bg-[#F6F5F4] border border-gray-200 shadow-sm text-[#4E4646]'
                  : 'border border-transparent text-[#4E4646]'
              } rounded m-1 py-1 text-sm font-medium px-2`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingInterval('year')}
              type="button"
              className={`${
                billingInterval === 'year'
                  ? ' bg-[#F6F5F4] border border-gray-200 shadow-sm text-[#4E4646]'
                  : ' border border-transparent text-[#4E4646]'
              } rounded m-1 py-1 text-sm font-medium px-2`}
            >
              Yearly
            </button>
          </div>
        </div>
      </div>
      <div className="grid sm:grid-cols-2grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
        {/* <FreePlanCard
          data={data1}
          billingInterval={billingInterval}
          session={session}
          user={user}
          products={products}
          subscription={subscription}
        /> */}
        <Card
          data={data2}
          plan={planStarter}
          setPlan={setPlanStarter}
          billingInterval={billingInterval}
          session={session}
          user={user}
          products={products}
          subscription={subscription}
        />
        <Card
          data={data3}
          plan={planExplorer}
          setPlan={setPlanExplorer}
          billingInterval={billingInterval}
          session={session}
          user={user}
          products={products}
          subscription={subscription}
        />
        <Card
          data={data5}
          plan={planPro}
          setPlan={setPlanPro}
          billingInterval={billingInterval}
          session={session}
          user={user}
          products={products}
          subscription={subscription}
        />
        {/* <EnterprisePlanCard
          data={data4}
          billingInterval={billingInterval}
          session={session}
          user={user}
          products={products}
          subscription={subscription}
        /> */}
      </div>
      <p className="text-sm py-4 text-center">
        1 credit = 1 exported lead | For enterprise solutions contact:{' '}
        <i>sales@getcryptoreach.xyz</i>
      </p>
    </div>
  );
}
