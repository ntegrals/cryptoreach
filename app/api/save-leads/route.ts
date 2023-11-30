import { saveLeads } from '@/app/supabase-server';

export async function POST(req: Request) {
  if (req.method === 'POST') {
    try {
      const { leads, userId } = await req.json();

      const { insertData, insertError } = await saveLeads(userId, leads);

      if (insertError) {
        throw insertError;
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
