'use client';

import TablePagination from './TablePagination';
import ExportButtonInline from './buttons/export/ExportButtonInline';
import axios from 'axios';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import toast from 'react-hot-toast';
import {
  RxCopy,
  RxEnvelopeClosed,
  RxEyeClosed,
  RxEyeOpen
} from 'react-icons/rx';

function classNames(...classes: any) {
  return classes.filter(Boolean).join(' ');
}

function truncateText(text: string, length: number): string {
  return text.length <= length ? text : `${text.slice(0, length)}\u2026`;
}

export default function TableSection(props: any) {
  const [unblurred, setUnblurred] = useState([]);

  const handleRowSelection = (index: any, isSelected: any) => {
    const newSelectedRows: any = [...props.selectedRows];

    if (isSelected) {
      newSelectedRows.push(index);
    } else {
      const rowIndex = newSelectedRows.indexOf(index);
      newSelectedRows.splice(rowIndex, 1);
    }

    props.setSelectedRows(newSelectedRows);
  };

  const handleSelectAll = () => {
    if (props.selectAll) {
      props.setSelectedRows([]);
    } else {
      const allRows: any = props.rows.map((person: any) => person.id);
      props.setSelectedRows(allRows);
    }
    props.setSelectAll(!props.selectAll);
  };

  return (
    <div className="px-8 sm:px-6 lg:px-8 h-10">
      <div className="">
        <div className="-mx-4 -my-2 overflow-x-scroll sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
            <table className="min-w-full divide-y divide-gray-300">
              <thead className="h-10">
                <tr className="divide-x divide-gray-200">
                  {props.tableSchema.map((item: any, index: any) => (
                    <th
                      scope="col"
                      className={classNames(
                        index === 0 ? 'sm:pl-0' : 'px-4',
                        'text-left text-sm font-medium text-gray-900'
                      )}
                    >
                      <div className="w-full h-full flex items-center gap-2">
                        {index === 0 ? (
                          <input
                            type="checkbox"
                            checked={props.selectAll}
                            onChange={handleSelectAll}
                            className=""
                          />
                        ) : null}
                        {item.icon}
                        {item.title}
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-white">
                {props.rows.map((person: any) => (
                  <tr
                    key={person.id}
                    className="divide-x divide-gray-200 h-[35px]"
                  >
                    {/* <TableSlideOver
                      title={person.gh_name}
                      sliderOpen={props.sliderOpen}
                      setSliderOpen={props.setSliderOpen}
                    /> */}
                    {/* <button
                      onClick={() => {
                        console.log(person);
                        props.setSliderTitle(person.id);
                        props.setSliderOpen(true);
                      }}
                    >
                      C
                    </button> */}
                    {props.tableSchema.map((item: any, index: any) => (
                      <td
                        className={classNames(
                          index === 0
                            ? 'sm:pl-0 flex items-center gap-2'
                            : 'px-4',
                          'whitespace-nowrap py-2 text-sm font-medium text-gray-900 min-w-[140px]'
                        )}
                      >
                        {index === 0 ? (
                          <input
                            type="checkbox"
                            checked={props.selectedRows.includes(person.id)}
                            onChange={(e) =>
                              handleRowSelection(person.id, e.target.checked)
                            }
                          />
                        ) : null}

                        {index === 0 ? (
                          <Image
                            className="rounded-md"
                            src={person.img_url}
                            width={16}
                            height={16}
                            alt={person.name}
                          />
                        ) : null}

                        {/* <button>
                          <RxArrowUp />
                        </button> */}

                        {item.type === 'bio' ? (
                          <div className="flex gap-2 items-center">
                            <RxCopy
                              className="w-[14px] h-[14px] hover:cursor-pointer"
                              onClick={async () => {
                                navigator.clipboard.writeText(
                                  person[item.db_name]
                                );
                                toast.success('Copied to clipboard', {
                                  style: {
                                    height: '32px'
                                  }
                                });
                              }}
                            />
                            {person[item.db_name]}
                            {/* {truncateText(person[item.db_name], 50)} */}
                          </div>
                        ) : null}
                        {item.type === 'text' ? person[item.db_name] : null}
                        {item.type === 'export' ? (
                          <div className="flex items-center gap-2">
                            {/* <RxDownload className="w-[14px] h-[14px] hover:cursor-pointer" /> */}
                            <ExportButtonInline
                              userDetails={props.userDetails}
                              buttonType="all"
                              // targetCol={item.db_name}
                              // targetName={person['org_name']}
                              targetCol={
                                props.title === 'Organizations'
                                  ? 'cl_organizations'
                                  : 'categories'
                              }
                              // targetCol={'cl_organizations'}
                              targetName={person['name']}
                              downloadCount={person[item.db_name]}
                            />
                            {new Intl.NumberFormat().format(
                              person[item.db_name]
                            )}
                          </div>
                        ) : null}
                        {item.type === 'email' ? (
                          <div className="flex gap-2 items-center">
                            <div
                              className="hover:cursor-pointer"
                              onClick={async () => {
                                // open mailto link
                                window.open(`mailto:${person[item.db_name]}`);
                                const response = await axios.post(
                                  '/api/update-user-credits',
                                  {
                                    userId: props.userDetails.id,
                                    creditAmount: 1
                                  }
                                );

                                setUnblurred([
                                  // @ts-ignore
                                  ...unblurred,
                                  // @ts-ignore
                                  person[item.db_name]
                                ]);
                              }}
                            >
                              <RxEnvelopeClosed className="w-[14px] h-[14px]" />
                            </div>
                            {/* <Link href={`mailto:${person[item.db_name]}`}>
                              <RxEnvelopeClosed className="w-[14px] h-[14px]" />
                            </Link> */}
                            <RxCopy
                              className="w-[14px] h-[14px] hover:cursor-pointer"
                              onClick={async () => {
                                navigator.clipboard.writeText(
                                  person[item.db_name]
                                );
                                toast.success('Copied to clipboard', {
                                  style: {
                                    height: '32px'
                                  }
                                });
                                const response = await axios.post(
                                  '/api/update-user-credits',
                                  {
                                    userId: props.userDetails.id,
                                    creditAmount: 1
                                  }
                                );

                                setUnblurred([
                                  // @ts-ignore
                                  ...unblurred,
                                  // @ts-ignore
                                  person[item.db_name]
                                ]);
                              }}
                            />

                            <span
                              className={classNames(
                                //@ts-ignore
                                unblurred.includes(person[item.db_name])
                                  ? ''
                                  : 'blur-sm select-none',
                                ''
                              )}
                            >
                              {person[item.db_name]}{' '}
                            </span>
                            {/* <span className="blur-sm select-none">
                              {person[item.db_name]}{' '}
                            </span> */}
                          </div>
                        ) : null}

                        {item.type === 'arrayGreen' ? (
                          <div className="flex gap-1">
                            {person[item.db_name]
                              .slice(0, 4)
                              .map((arrItem: any, index: number) => (
                                <div
                                  key={index}
                                  className="bg-[#e9f7e6] text-[#4b6e47] px-1 py-0.5 mx- rounded "
                                >
                                  {arrItem}
                                </div>
                              ))}
                          </div>
                        ) : null}

                        {item.type === 'arrayBlue' ? (
                          <div className="flex gap-1">
                            {person[item.db_name]
                              .slice(0, 4)
                              .map((arrItem: any, index: number) => (
                                <div
                                  key={index}
                                  className="bg-[#E6F3F7] text-[#475D6E] px-1 py-0.5 mx- rounded "
                                >
                                  {arrItem}
                                </div>
                              ))}
                          </div>
                        ) : null}
                      </td>
                    ))}
                  </tr>
                ))}

                <tr
                  key={'lastcol'}
                  className="divide-x divide-gray-200 h-[35px] border-b border-gray-200"
                >
                  {props.tableSchema.map((item: any, index: number) => (
                    <td className="border-b border-gray-200 whitespace-nowrap px-4 text-sm text-[#232529]"></td>
                  ))}

                  {/* <td className="border-b border-gray-200 whitespace-nowrap flex items-center justify-end gap-1 px-4 py-2 text-sm font-medium text-gray-900 sm:pl-0">
                    <span className="text-[#232529]">{props.rows.length}</span>
                    <span className="text-[#75777c]">count</span>
                  </td> */}
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <TablePagination
          from={props.from}
          to={props.to}
          count={props.count}
          page={props.page}
          setPage={props.setPage}
        />
      </div>
    </div>
  );
}
