import { formatNumber, prepareRows } from '@/utils/helpers';
import {
  getTableRowsClientAll,
  getTableRowsSelectionClient
} from '@/utils/supabase-client';
import axios from 'axios';
import { nanoid } from 'nanoid';
import React, { useState, useRef, useEffect } from 'react';
import { CSVLink } from 'react-csv';
import toast from 'react-hot-toast';
import { RxDownload } from 'react-icons/rx';

export default function ExportButton(props: any) {
  const [rowData, setRowData] = useState<any>([]);
  const csvLink = useRef(); // setup the ref that we'll use for the hidden CsvLink click once we've updated the data

  useEffect(() => {
    if (rowData.length > 0) {
      //@ts-ignore
      csvLink.current.link.click();
    }
  }, [rowData]);

  const getRowData = async () => {
    //@ts-ignore
    const [rows] = await getTableRowsClientAll(
      props.tableName,
      props.filters,
      props.sort
    );

    let cleanedRows;

    // clean rows before exporting
    // remove the id column from each object of the array
    // cleanedRows = rows.map((row: any) => {
    //   const { id, ...rest } = row;
    //   return rest;
    // });
    cleanedRows = prepareRows(rows);

    //

    const response = await axios.post('/api/update-user-credits', {
      userId: props.userDetails.id,
      creditAmount: cleanedRows.length
    });

    setRowData(cleanedRows);
  };

  const getRowDataSelection = async () => {
    if (props.selectedRows.length === 0) {
      throw new Error('No rows selected');
    }
    //@ts-ignore
    const [count, rows] = await getTableRowsSelectionClient(
      props.tableName,
      props.selectedRows
    );

    // if the first row object contains a key with the 'name'
    let cleanedRows;

    // cleanedRows = rows.map((row: any) => {
    //   const { id, ...rest } = row;
    //   return rest;
    // });
    cleanedRows = prepareRows(rows);

    const response = await axios.post('/api/update-user-credits', {
      userId: props.userDetails.id,
      creditAmount: props.selectedRows.length
    });

    setRowData(cleanedRows);
  };

  return (
    <div className="relative inline-block text-left">
      <div>
        <button
          onClick={() => {
            if (props.buttonType === 'all') {
              if (props.selectionCount > props.userDetails?.available_credits) {
                toast.error(
                  `You don't have enough credits to export ${props.selectionCount} users.`
                );
                return;
              }

              toast.promise(
                getRowData(),
                {
                  loading: 'Loading data...',
                  success: <b>Done</b>,
                  error: <b>Failed</b>
                },
                {
                  style: {
                    height: '32px'
                  }
                }
              );
            } else {
              if (props.selectionCount > 150) {
                toast.error(
                  `You can only export up to 150 users this way. Please use filters and Export All, to get around this limit.`
                );
                return;
              }
              if (props.selectionCount > props.userDetails?.available_credits) {
                toast.error(
                  `You don't have enough credits to export ${props.selectionCount} users.`
                );
                return;
              }

              toast.promise(
                getRowDataSelection(),
                {
                  loading: 'Loading data...',
                  success: <b>Done</b>,
                  error: <b>Failed</b>
                },
                {
                  style: {
                    height: '32px'
                  }
                }
              );
            }
          }}
          className="flex w-full items-center justify-center gap-x-1.5 rounded-[9px] bg-white px-3 py-1 text-sm font-medium text-black shadow-[0px_0px_2px_#E0E0E0,0px_1px_4px_-2px_rgba(24,39,75,0.02),0px_4px_4px_-2px_rgba(24,39,75,0.06)] hover:bg-gray-50 duration-150 ease-in-out"
        >
          <RxDownload className="w-[14px] h-[14px]" />
          Export {props.buttonType === 'all' ? 'All' : 'Selection'}
          <div className="inline-flex justify-center items-center rounded-[6px] bg-[#E6EEFC] px-1 text-[#266df0] border border-[#BBCFFB] text-[11px]">
            {formatNumber(props.selectionCount)}
          </div>
        </button>
        <CSVLink
          data={rowData}
          filename={`cryptoreach-export-${nanoid(3)}.csv`}
          className="hidden"
          //@ts-ignore
          ref={csvLink}
          target="_blank"
        />
      </div>
    </div>
  );
}
