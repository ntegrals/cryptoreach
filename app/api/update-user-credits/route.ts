import { deductCredits } from '@/app/supabase-server';

// import { Database } from '@/types_db';
// import { getURL } from '@/utils/helpers';
// import { stripe } from '@/utils/stripe';
// import {
//   createOrRetrieveCustomer,
//   supabaseAdmin
// } from '@/utils/supabase-admin';
// import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs';
// import { cookies } from 'next/headers';

export async function POST(req: Request) {
  if (req.method === 'POST') {
    try {
      const { creditAmount, userId } = await req.json();

      const { updatedData, updatedError } = await deductCredits(
        userId,
        creditAmount
      );

      if (updatedError) {
        throw updatedError;
      }

      return new Response(JSON.stringify({ success: 'Success' }), {
        status: 200
      });
    } catch (err: any) {
      console.log(err);
      return new Response(
        JSON.stringify({ error: { statusCode: 500, message: err.message } }),
        {
          status: 500
        }
      );
    }
  } else {
    return new Response('Method Not Allowed', {
      headers: { Allow: 'POST' },
      status: 405
    });
  }
}
