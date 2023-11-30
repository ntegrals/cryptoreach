import CreditSelectionButton from '../CreditSelectionButton';
import { Database } from '@/types_db';
import { postData } from '@/utils/helpers';
import { getStripe } from '@/utils/stripe-client';
import { Session, User } from '@supabase/supabase-js';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import {
  RxCaretSort,
  RxChatBubble,
  RxCheck,
  RxComponent1,
  RxShadow,
  RxShadowInner,
  RxShadowOuter
} from 'react-icons/rx';

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

export default function Card(props: any) {
  const router = useRouter();
  const [priceIdLoading, setPriceIdLoading] = useState<string>();

  const handleCheckout = async (price: Price) => {
    setPriceIdLoading(price.id);
    if (!props.user) {
      return router.push('/signin');
    }
    if (price.product_id === props.subscription?.prices?.products?.id) {
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

  return (
    <div className="flex flex-col rounded-md bg-[#F6F5F4] w-[240px] border-x border-y border-gray-200">
      <div className="flex flex-col items-start gap-4">
        <div className="bg-white pt-4 px-4 w-full pb-4 border-b border-gray-200 rounded-t rounded-l rounded-r">
          <div className="">
            {props.data.title === 'Starter' ? (
              <div className="font-semibold text-xl flex gap-2 items-center">
                <RxShadowInner className="w-[18px] h-[18px]" />
                <p className="text-[#0a85d1]">{props.data.title}</p>
              </div>
            ) : null}
            {props.data.title === 'Explorer' ? (
              <div className="font-semibold text-xl flex gap-2 items-center">
                <RxShadowOuter className="w-[18px] h-[18px]" />
                <p className="text-[#ea4e43]">{props.data.title}</p>
              </div>
            ) : null}
            {props.data.title === 'Pro' ? (
              <div className="font-semibold text-xl flex gap-2 items-center">
                <RxShadow className="w-[18px] h-[18px]" />
                <p className="text-[#9d34da]">{props.data.title}</p>
              </div>
            ) : null}
          </div>
          <p className="text-[15px]">{props.data.subTitle}</p>
        </div>

        <div className="px-4">
          <h1 className="font-semibold text-2xl">
            {props.billingInterval === 'month'
              ? props.data['month'].plans[props.plan].pricePublic
              : props.data['year'].plans[props.plan].pricePublic}
          </h1>
          <p className="text-gray-500">
            {props.billingInterval === 'month'
              ? props.data['month'].plans[props.plan].interval
              : props.data['year'].plans[props.plan].interval}
          </p>
        </div>

        <div className="w-full">
          <CreditSelectionButton
            plan={props.plan}
            setPlan={props.setPlan}
            billingInterval={props.billingInterval}
            data={props.data}
          />
        </div>

        <div className="px-4">
          {props.data.features.map((feature: any) => (
            <div className="flex gap-1 items-center">
              <RxCheck className="text-blue-600" />
              <p className="text-sm">{feature}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="h-full rounded-b-xl p-4 flex justify-center items-center">
        <button
          className="flex items-center justify-center w-full rounded bg-white  px-3 py-1.5 text-sm font-medium text-[#232529] shadow-[0px_0px_2px_#E0E0E0,0px_1px_4px_-2px_rgba(24,39,75,0.02),0px_4px_4px_-2px_rgba(24,39,75,0.06)]
           hover:bg-gray-50 gap-1.5 cursor-pointer"
          // disabled={!props.session}

          onClick={() => {
            handleCheckout(
              props.billingInterval === 'month'
                ? props.data['month'].plans[props.plan].price
                : props.data['year'].plans[props.plan].price
            );
          }}
        >
          <RxComponent1 className="w-[14px] h-[14px]" />
          {props.data.title === props.subscription?.prices?.products?.name
            ? 'Manage'
            : props.data.cta}
        </button>
      </div>
    </div>
  );
}
