'use client';

import { useSupabase } from '@/app/supabase-provider';
import { getURL } from '@/utils/helpers';
import { Auth } from '@supabase/auth-ui-react';
import { ThemeSupa } from '@supabase/auth-ui-shared';

export default function AuthUI() {
  const { supabase } = useSupabase();
  return (
    <div className="flex flex-col space-y-4">
      <Auth
        supabaseClient={supabase}
        providers={['google']}
        redirectTo={`${getURL()}/auth/callback`}
        // magicLink={true}
        appearance={{
          theme: ThemeSupa,
          variables: {
            default: {
              colors: {
                brand: '#232529',
                brandAccent: '#F6F5F4'
              }
            }
          },
          style: {
            button: {
              background: 'white',
              color: '#2d2d2d',
              borderRadius: '8px',
              border: '1px solid #e2e2e2',
              fontSize: '14px',
              fontWeight: '600'
            },
            input: {
              background: 'white',
              color: 'black',
              borderRadius: '8px',
              border: '1px solid #e2e2e2',
              fontSize: '14px'
            }
          }
        }}
      />
    </div>
  );
}
