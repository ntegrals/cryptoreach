'use client';

import FilterButton from './buttons/FilterButton';
import RunButton from './buttons/RunButton';
import SortButton from './buttons/SortButton';
import ExportButton from './buttons/export/ExportButton';
import React from 'react';

export default function TableFilter(props: any) {
  return (
    <div className="w-full h-14 border-b border-gray-200 flex items-center justify-between px-4">
      <div className="flex items-center gap-2">
        <FilterButton
          tableName={props.tableName}
          sort={props.sort}
          setRows={props.setRows}
          tableSchema={props.tableSchema}
          connectionRule={props.connectionRule}
          setConnectionRule={props.setConnectionRule}
          filter={props.filter}
          setFilter={props.setFilter}
          page={props.page}
        />
        <SortButton
          tableSchema={props.tableSchema}
          sort={props.sort}
          setSort={props.setSort}
        />
        <RunButton
          tableName={props.tableName}
          connectionRule={props.connectionRule}
          filter={props.filter}
          sort={props.sort}
          setSort={props.setSort}
          setRows={props.setRows}
          setCount={props.setCount}
          page={props.page}
        />
      </div>
      <div className="flex gap-1">
        <ExportButton
          title={props.title}
          tableName={props.tableName}
          userDetails={props.userDetails}
          buttonType={'selection'}
          page={0}
          size={25} // selectionCount
          filters={props.filter}
          sort={props.sort}
          selectionCount={props.selectedRows.length}
          selectedRows={props.selectedRows}
        />
        <ExportButton
          title={props.title}
          tableName={props.tableName}
          userDetails={props.userDetails}
          buttonType={'all'}
          page={0}
          size={25} // selectionCount
          filters={props.filter}
          sort={props.sort}
          selectionCount={props.count}
          selectedRows={props.selectedRows}
        />
      </div>
    </div>
  );
}
