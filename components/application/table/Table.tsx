'use client';

import TableFilter from './TableFilter';
import TableSection from './TableSection';
import TableTitle from './TableTitle';
import { getTableRowsClient } from '@/utils/supabase-client';
import React, { useEffect, useState } from 'react';

export default function Table(props: any) {
  const [rows, setRows] = useState<any>([]);
  const [count, setCount] = useState<any>(0);
  const [from, setFrom] = useState<any>(0);
  const [to, setTo] = useState<any>(0);

  const [selectedRows, setSelectedRows] = useState<any>([]);
  const [selectAll, setSelectAll] = useState(false);

  const [connectionRule, setConnectionRule] = useState<any>('and');
  const [filter, setFilter] = useState<any>([]);

  const [sort, setSort] = useState<any>({
    set: false,
    col: '',
    asc: true
  });

  const [sliderTitle, setSliderTitle] = useState<any>('');
  const [sliderOpen, setSliderOpen] = useState(false);

  const [page, setPage] = useState<any>(0);

  useEffect(() => {
    const getInitialRows = async () => {
      //@ts-ignore
      const [count, rows, from, to] = await getTableRowsClient(
        props.tableName,
        page,
        //25
        10,
        filter,
        sort
      );

      setRows(rows);
      setCount(count);
      setFrom(from);
      setTo(to);
    };

    getInitialRows();
  }, [page]);

  return (
    <div>
      <div>
        <TableTitle title={props.title} />
        <TableFilter
          title={props.title}
          tableName={props.tableName}
          tableSchema={props.tableSchema}
          userDetails={props.userDetails}
          selectedRows={selectedRows}
          count={count}
          setCount={setCount}
          connectionRule={connectionRule}
          setConnectionRule={setConnectionRule}
          filter={filter}
          setFilter={setFilter}
          sort={sort}
          setSort={setSort}
          setRows={setRows}
          page={page}
        />
        <TableSection
          title={props.title}
          sliderOpen={sliderOpen}
          setSliderOpen={setSliderOpen}
          sliderTitle={sliderTitle}
          setSliderTitle={setSliderTitle}
          tableSchema={props.tableSchema}
          userDetails={props.userDetails}
          from={from}
          to={to}
          count={count}
          rows={rows}
          page={page}
          setPage={setPage}
          selectedRows={selectedRows}
          setSelectedRows={setSelectedRows}
          selectAll={selectAll}
          setSelectAll={setSelectAll}
        />
      </div>
    </div>
  );
}
