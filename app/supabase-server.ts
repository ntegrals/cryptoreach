import { Database } from '@/types_db';
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import { cache } from 'react';
import { v4 as uuidv4 } from 'uuid';

export const createServerSupabaseClient = cache(() =>
  createServerComponentClient<Database>({ cookies })
);

export async function getSession() {
  const supabase = createServerSupabaseClient();
  try {
    const {
      data: { session }
    } = await supabase.auth.getSession();
    return session;
  } catch (error) {
    console.error('Error:', error);
    return null;
  }
}

export async function getUserDetails() {
  const supabase = createServerSupabaseClient();
  try {
    const { data: userDetails } = await supabase
      .from('users')
      .select('*')
      .single();
    return userDetails;
  } catch (error) {
    console.error('Error:', error);
    return null;
  }
}

export async function getSubscription() {
  const supabase = createServerSupabaseClient();
  try {
    const { data: subscription } = await supabase
      .from('subscriptions')
      .select('*, prices(*, products(*))')
      .in('status', ['trialing', 'active'])
      .maybeSingle()
      .throwOnError();
    return subscription;
  } catch (error) {
    console.error('Error:', error);
    return null;
  }
}

export const getActiveProductsWithPrices = async () => {
  const supabase = createServerSupabaseClient();
  const { data, error } = await supabase
    .from('products')
    .select('*, prices(*)')
    .eq('active', true)
    .eq('prices.active', true)
    .order('metadata->index')
    .order('unit_amount', { foreignTable: 'prices' });

  if (error) {
    console.log(error.message);
  }
  return data ?? [];
};

export const deductCredits = async (userId: string, amount: number) => {
  const supabase = createServerSupabaseClient();

  // get the credits
  const { data, error } = await supabase
    .from('users')
    .select('available_credits')
    .single();

  //@ts-ignore
  const newBalance = data.available_credits - amount;

  const { data: updatedData, error: updatedError } = await supabase
    .from('users')
    //@ts-ignore
    .update({ available_credits: newBalance })
    .eq('id', userId);

  return { updatedData, updatedError };
};

export const saveLeads = async (userId: string, leads: any) => {
  const supabase = createServerSupabaseClient();

  // construct leads array
  const leadsArray = leads.map((lead: any) => {
    return {
      id: uuidv4(),
      owner_id: userId,
      lead_id: lead.id
    };
  });

  const { data: insertData, error: insertError } = await supabase
    .from('saved')
    //@ts-ignore
    .insert(leadsArray);

  return { insertData, insertError };
};
