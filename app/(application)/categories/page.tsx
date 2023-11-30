import { getSession, getUserDetails } from '@/app/supabase-server';
import Table from '@/components/application/table/Table';
import { getTableRowsAdmin } from '@/utils/supabase-table';
import { redirect } from 'next/navigation';
import React from 'react';
import {
  RxDownload,
  RxEyeOpen,
  RxGithubLogo,
  RxIdCard,
  RxPerson,
  RxShuffle,
  RxStar
} from 'react-icons/rx';

// define table cols here

const tableName = 'categories';
const title = 'Categories';

const tableSchema = [
  {
    db_name: 'name',
    title: 'Name',
    type: 'text',
    icon: <RxPerson className="w-[14px] h-[14px]" />
  },
  {
    db_name: 'user_count',
    title: 'Users',
    type: 'export',
    icon: <RxStar className="w-[14px] h-[14px]" />
  }
  // {
  //   db_name: 'watching',
  //   title: 'Watchers',
  //   type: 'export',
  //   icon: <RxEyeOpen className="w-[14px] h-[14px]" />
  // },
  // {
  //   db_name: 'forks',
  //   title: 'Forkers',
  //   type: 'export',
  //   icon: <RxShuffle className="w-[14px] h-[14px]" />
  // }
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
