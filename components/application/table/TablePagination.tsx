import { useRouter } from 'next/navigation';
import {
  RxArrowBottomLeft,
  RxArrowLeft,
  RxArrowRight,
  RxMixerHorizontal
} from 'react-icons/rx';

export default function TablePagination(props: any) {
  const router = useRouter();

  const handlePage = async (page: number, type: string) => {
    if (type === 'next') {
      page = page + 1;
    } else if (type === 'previous') {
      if (page === 0) {
        return;
      }
      page = page - 1;
    }

    props.setPage(page);
  };

  return (
    <nav
      className="flex items-center justify-between py-3"
      aria-label="Pagination"
    >
      <div className="hidden sm:block">
        <p className="text-sm text-gray-700">
          Showing <span className="font-medium">{props.from + 1}</span> to{' '}
          <span className="font-medium">{props.to + 1}</span> of{' '}
          <span className="font-medium">
            {new Intl.NumberFormat().format(props.count)}
          </span>{' '}
          results
        </p>
      </div>
      <div className="flex gap-1 flex-1 justify-between sm:justify-end">
        <div
          onClick={() => handlePage(props.page, 'previous')}
          className="inline-flex justify-center items-center cursor-pointer gap-x-1.5 rounded-[9px] bg-white px-3 py-1 text-sm font-medium text-black shadow-[0px_0px_2px_#E0E0E0,0px_1px_4px_-2px_rgba(24,39,75,0.02),0px_4px_4px_-2px_rgba(24,39,75,0.06)] hover:bg-gray-50"
        >
          <RxArrowLeft className="w-[14px] h-[14px]" />
          Previous
        </div>

        <div
          onClick={() => handlePage(props.page, 'next')}
          className="inline-flex justify-center items-center cursor-pointer gap-x-1.5 rounded-[9px] bg-white px-3 py-1 text-sm font-medium text-black shadow-[0px_0px_2px_#E0E0E0,0px_1px_4px_-2px_rgba(24,39,75,0.02),0px_4px_4px_-2px_rgba(24,39,75,0.06)] hover:bg-gray-50"
        >
          Next
          <RxArrowRight className="w-[14px] h-[14px]" />
        </div>
      </div>
    </nav>
  );
}
