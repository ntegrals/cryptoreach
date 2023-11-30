'use client';

import { getTableRowsClient } from '@/utils/supabase-client';
import { useSearchParams } from 'next/navigation';
import { BsPlayFill } from 'react-icons/bs';
import { FaPlay } from 'react-icons/fa';
import { RxMaskOff, RxMaskOn, RxPlay } from 'react-icons/rx';

export default function RunButton(props: any) {
  const handleApply = async () => {
    //@ts-ignore
    const [count, rows, from, to] = await getTableRowsClient(
      props.tableName,
      props.page,
      10,
      props.filter,
      props.sort
    );
    props.setCount(count);
    props.setRows(rows);
  };

  return (
    <div className="relative inline-block text-left">
      <div>
        <button
          onClick={handleApply}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              handleApply();
            }
          }}
          className="flex w-full justify-center items-center gap-x-1.5 rounded-[9px] bg-white px-3 py-1 text-sm font-medium text-black shadow-[0px_0px_2px_#E0E0E0,0px_1px_4px_-2px_rgba(24,39,75,0.02),0px_4px_4px_-2px_rgba(24,39,75,0.06)] hover:bg-gray-50"
        >
          <FaPlay className="w-[14px] h-[14px] p-[3px] bg-[#0AC27B] text-white font-extrabold rounded-sm" />
          Apply
        </button>
      </div>
    </div>
  );
}
