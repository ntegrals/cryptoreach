import { getSession, getUserDetails } from '@/app/supabase-server';
import Table from '@/components/application/table/Table';
import { getTableRowsAdmin } from '@/utils/supabase-table';
import { redirect } from 'next/navigation';
import React from 'react';
import {
  RxBackpack,
  RxEnvelopeClosed,
  RxGithubLogo,
  RxGlobe,
  RxIdCard,
  RxInput,
  RxLightningBolt,
  RxPerson
} from 'react-icons/rx';

// define table cols here

const tableName = 'people3';
const title = 'Users';

const tableSchema = [
  {
    db_name: 'first_name',
    title: 'First Name',
    type: 'text',
    icon: <RxPerson className="w-[14px] h-[14px]" />
  },
  {
    db_name: 'last_name',
    title: 'Last Name',
    type: 'text',
    icon: <RxPerson className="w-[14px] h-[14px]" />
  },
  {
    db_name: 'username',
    title: 'Username',
    type: 'text',
    icon: <RxGithubLogo className="w-[14px] h-[14px]" />
  },

  {
    db_name: 'email',
    title: 'Email',
    type: 'email',
    icon: <RxEnvelopeClosed className="w-[14px] h-[14px]" />
  },
  {
    db_name: 'cl_organizations',
    title: 'User of Organizations',
    type: 'arrayBlue',
    icon: <RxInput className="w-[14px] h-[14px]" />
  },
  {
    db_name: 'categories',
    title: 'User of Categories',
    type: 'arrayGreen',
    icon: <RxInput className="w-[14px] h-[14px]" />
  },
  {
    db_name: 'location',
    title: 'Location',
    type: 'text',
    icon: <RxGlobe className="w-[14px] h-[14px]" />
  },
  {
    db_name: 'work',
    title: 'Work',
    type: 'text',
    icon: <RxBackpack className="w-[14px] h-[14px]" />
  },
  {
    db_name: 'bio',
    title: 'Bio',
    type: 'bio',
    icon: <RxPerson className="w-[14px] h-[14px]" />
  }
];

export default async function page({ searchParams }: any) {
  const [session, userDetails] = await Promise.all([
    getSession(),
    getUserDetails()
  ]);

  if (!session) {
    return redirect('/signin');
  }

  return (
    <Table
      tableName={tableName}
      title={title}
      tableSchema={tableSchema}
      userDetails={userDetails}
    />
  );
}
