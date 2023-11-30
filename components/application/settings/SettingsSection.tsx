'use client';

import ManageSubscription from '@/app/account/ManageSubscription';
import { getInfoFromPriceId } from '@/utils/helpers';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import React from 'react';

export default function SettingsSection(props: any) {
  const router = useRouter();
  const deleteUser = async () => {
    try {
      const response = await axios.post('/api/delete-user');
      if (response.status === 200) {
        console.log('User deleted successfully');

        router.push('https://google.com');

        // Redirect to google
      }
    } catch (error) {
      console.log(
        //@ts-ignore
        `Failed to delete user: ${error.response.data.error.message}`
      );
    }
  };

  return (
    <div className="flex flex-col items-center gap-4">
      {/* Profile Section */}
      <div className="flex items-center mt-8 mb-8">
        <div>
          <div className="flex justify-center items-center">
            <div className="w-16 h-16 text-4xl bg-[#0a85d1] text-white rounded-full flex justify-center items-center">
              {props.name
                ? String(props.name.slice(0, 1)).toUpperCase()
                : String(props.email.slice(0, 1)).toUpperCase()}
            </div>
          </div>
        </div>
        <div className="ml-4">
          <div className="text-lg font-semibold">
            {props.name ? props.name : props.email}
          </div>
          <div className="text-sm text-gray-400">
            {props.subscription
              ? getInfoFromPriceId(props.subscription.price_id)
                  ?.plan.split('-')[0]
                  .trim()
              : String('Free Plan - 100 Credits').split('-')[0].trim()}
          </div>
        </div>
      </div>
      {/* Name */}
      <div className="flex flex-col items-start gap-4">
        <div>
          <div className="flex gap-4">
            <div className="flex flex-col justify-center">
              <label className="text-xs text-[#5c5e63]">Full Name</label>
              <input className="border border-gray-300 rounded-md text-sm h-8 px-2"></input>
              {/* <label className="text-xs text-[#5c5e6350] underline cursor-pointer mt-1.5">
                Save
              </label> */}
            </div>
            {/* Primary Email Address */}
            <div className="hidden sm:flex sm:flex-col sm:justify-center">
              <label className="text-xs text-[#5c5e63]">
                Primary Email Address
              </label>
              <input
                placeholder={props.email}
                className="border border-gray-300 rounded-md text-sm h-8 px-2 placeholder:text-black"
              ></input>
              {/* <label className="text-xs text-[#5c5e6350] underline cursor-pointer mt-1.5">
                Save
              </label> */}
            </div>
            {/* <div className="flex flex-col justify-center">
              <label className="text-xs text-[#5c5e63]">Last Name</label>
              <input className="border border-gray-300 rounded-md text-sm h-8 px-2"></input>
            </div> */}
          </div>
        </div>
        <div className="sm:hidden flex flex-col justify-center">
          <label className="text-xs text-[#5c5e63]">
            Primary Email Address
          </label>
          <input
            placeholder={props.email}
            className="border border-gray-300 rounded-md text-sm h-8 px-2 placeholder:text-black"
          ></input>
        </div>

        {/* Subscription */}
        <div className="flex gap-4">
          <div className="flex flex-col justify-center">
            <label className="text-xs text-[#5c5e63]">Subscription Plan</label>
            <div className="border border-gray-300 rounded-md text-sm h-8 px-2 inline-flex items-center cursor-default">
              {props.subscription
                ? getInfoFromPriceId(props.subscription.price_id)?.plan
                : 'Free Plan - 100 Credits'}
            </div>
            {/* <button className="text-xs text-[#5c5e6350] underline cursor-pointer mt-1.5">
              Change Plan
            </button> */}
            <div className="flex justify-start">
              <ManageSubscription session={props.session} />
            </div>
          </div>
        </div>

        <button
          onClick={deleteUser}
          className="text-xs text-[#b43737] underline cursor-pointer mt-1.5"
        >
          Delete Account
        </button>
      </div>
    </div>
  );
}
