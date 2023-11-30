import { formatNumber, prepareRows } from '@/utils/helpers';
import {
  getTableRowsClient,
  getTableRowsClientAllInline,
  getTableRowsSelectionClient
} from '@/utils/supabase-client';
import axios from 'axios';
import { nanoid } from 'nanoid';
import React, { useState, useRef, useEffect } from 'react';
import { CSVLink } from 'react-csv';
import toast from 'react-hot-toast';
import { RxDownload } from 'react-icons/rx';

export default function ExportButtonInline(props: any) {
  const [rowData, setRowData] = useState<any>([]);
  const csvLink = useRef(); // setup the ref that we'll use for the hidden CsvLink click once we've updated the data

  useEffect(() => {
    if (rowData.length > 0) {
      //@ts-ignore
      csvLink.current.link.click();
    }
  }, [rowData]);

  const getRowData = async () => {
    console.log('ROWROWROW', props.targetCol, props.targetName);
    //@ts-ignore
    const [count, rows] = await getTableRowsClientAllInline(
      // 'starred',
      props.targetCol,
      props.targetName

      // 'Significant-Gravitas/Auto-GPT'
    );

    let cleanedRows;

    cleanedRows = prepareRows(rows);

    const response = await axios.post('/api/update-user-credits', {
      userId: props.userDetails.id,
      creditAmount: cleanedRows.length
    });

    setRowData(cleanedRows);
  };

  return (
    <div className="relative inline-block text-left">
      <div>
        <button
          onClick={() => {
            if (props.buttonType === 'all') {
              // if not enough credits to export, stop the function
              // how many credits does the user have
              props.userDetails?.available_credits;
              // how many rows are we trying to export
              // props.userDetails?.available_credits

              if (props.downloadCount > props.userDetails?.available_credits) {
                toast.error(
                  `You don't have enough credits to export ${props.downloadCount} users.`
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
            }
          }}
          className="flex w-full items-center justify-center gap-x-1.5 rounded-md bg-white px-1 py-1 text-sm font-medium text-black shadow-[0px_0px_2px_#E0E0E0,0px_1px_4px_-2px_rgba(24,39,75,0.02),0px_4px_4px_-2px_rgba(24,39,75,0.06)] hover:bg-gray-50 duration-150 ease-in-out"
        >
          <RxDownload className="w-[14px] h-[14px]" />
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
