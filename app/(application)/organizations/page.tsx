import { getSession, getUserDetails } from '@/app/supabase-server';
import Table from '@/components/application/table/Table';
import { getTableRowsAdmin } from '@/utils/supabase-table';
import { redirect } from 'next/navigation';
import React from 'react';
import {
  RxGithubLogo,
  RxIdCard,
  RxInput,
  RxPerson,
  RxStar
} from 'react-icons/rx';

// define table cols here

const tableName = 'organizations';
const title = 'Organizations';

const tableSchema = [
  {
    db_name: 'name',
    title: 'Name',
    type: 'text',
    icon: <RxPerson className="w-[14px] h-[14px]" />
  },
  {
    db_name: 'categories',
    title: 'Cateogories',
    type: 'arrayBlue',
    icon: <RxInput className="w-[14px] h-[14px]" />
  },
  {
    db_name: 'user_count',
    title: 'Users',
    type: 'export',
    icon: <RxStar className="w-[14px] h-[14px]" />
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
    <div>
      <Table
        tableName={tableName}
        title={title}
        tableSchema={tableSchema}
        userDetails={userDetails}
      />
    </div>
  );
}
