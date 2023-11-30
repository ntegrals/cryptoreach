'use client';

import ColDropdownFilter from './filter/ColDropdown';
import RuleDropdown from './filter/RuleDropdown';
import { getTableRowsClient } from '@/utils/supabase-client';
import { Menu, Transition } from '@headlessui/react';
import { nanoid } from 'nanoid';
import { Fragment } from 'react';
import {
  RxCross1,
  RxMixerHorizontal,
  RxPerson,
  RxQuestionMarkCircled,
  RxReload
} from 'react-icons/rx';

export default function FilterButton(props: any) {
  const handleApply = async () => {
    //@ts-ignore
    const [count, rows, from, to] = await getTableRowsClient(
      props.tableName,
      props.page,
      10,
      props.filter,
      props.sort
    );
    props.setRows(rows);
  };

  return (
    <Menu as="div" className="relative inline-block text-left ">
      <div>
        <Menu.Button className="inline-flex w-full justify-center items-center gap-x-1.5 rounded-[9px] bg-white px-3 py-1 text-sm font-medium text-black shadow-[0px_0px_2px_#E0E0E0,0px_1px_4px_-2px_rgba(24,39,75,0.02),0px_4px_4px_-2px_rgba(24,39,75,0.06)] hover:bg-gray-50">
          <RxMixerHorizontal className="w-[14px] h-[14px]" />
          Filter
          {props.filter.length > 0 ? (
            <div className="inline-flex justify-center items-center rounded-[6px] bg-[#E6EEFC] px-1 text-[#266df0] border border-[#BBCFFB] text-[11px]">
              {props.filter.length}
            </div>
          ) : null}
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute left-0 z-10 mt-2 w-[520px] origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5">
          <div className="flex flex-col p-2 gap-2">
            {props.filter.length === 0 ? (
              <div className="text-[13px] leading-5 text-[#75777c]">
                Empty - Choose an attribute to filter by
              </div>
            ) : (
              // Filter Selection
              <div className="flex flex-col gap-2">
                {props.filter.map((item: any, index: any) => (
                  <div className="flex items-center gap-2 justify-end">
                    {index === 0 ? (
                      <div className="text-xs text-[#5c5e63] ">Where</div>
                    ) : null}

                    {index === 1 ? (
                      <div
                        onClick={() => {
                          if (props.connectionRule === 'and') {
                            props.setConnectionRule('or');
                          } else {
                            props.setConnectionRule('and');
                          }
                        }}
                        className="cursor-pointer flex items-center justify-center gap-x-1.5 rounded-[9px] bg-white px-3 py-1 text-sm font-medium text-black shadow-[0px_0px_2px_#E0E0E0,0px_1px_4px_-2px_rgba(24,39,75,0.02),0px_4px_4px_-2px_rgba(24,39,75,0.06)] hover:bg-gray-50"
                      >
                        <RxReload className="w-[14px] h-[14px]" />
                        {props.connectionRule}
                      </div>
                    ) : null}
                    {index >= 2 ? (
                      <div className="text-xs text-[#5c5e63] ">
                        {props.connectionRule}
                      </div>
                    ) : null}
                    <ColDropdownFilter
                      tableSchema={props.tableSchema}
                      item={item}
                      index={index}
                      filter={props.filter}
                      setFilter={props.setFilter}
                    />
                    <RuleDropdown
                      key={props.filter}
                      item={item}
                      index={index}
                      filter={props.filter}
                      setFilter={props.setFilter}
                    />
                    <input
                      onKeyDown={(e) => {
                        if (e.code === 'Space') {
                          e.stopPropagation();
                        } else if (e.key === 'Enter') {
                          handleApply();
                        }
                      }}
                      type="text"
                      value={item.value}
                      onChange={(e) => {
                        const updatedFilter = props.filter.map((item: any) => {
                          if (item.id === props.filter[index].id) {
                            return {
                              ...item,
                              value: e.target.value
                            };
                          } else {
                            return item;
                          }
                        });

                        props.setFilter(updatedFilter);
                      }}
                      className="border border-gray-300 rounded-md text-sm h-8 px-2 w-1/4 "
                    />
                    <RxCross1
                      onClick={() => {
                        // remove item from filter
                        const newFilter = props.filter.filter(
                          (item: any) => item.id !== props.filter[index].id
                        );

                        props.setFilter(newFilter);
                      }}
                      className="w-[14px] h-[14px] text-[#75777c] ml-4 cursor-pointer"
                    />
                  </div>
                ))}
              </div>
            )}

            <div className="text-sm text-[#75777c] px-3 py-1 border-y border-gray-200 -mx-2">
              <button
                onClick={() => {
                  props.setFilter((prevState: any) => [
                    ...prevState,
                    {
                      id: nanoid(8),
                      col: props.tableSchema[0].db_name,
                      // rule: 'ilike',
                      rule:
                        props.tableSchema[0].type === 'text' ? 'ilike' : 'cs',
                      value: '',
                      type: props.tableSchema[0].type,
                      title: props.tableSchema[0].title,
                      icon: props.tableSchema[0].icon
                    }
                  ]);
                }}
                className="cursor-pointer hover:bg-gray-100 duration-150 ease-in-out px-1 py-0.5 rounded-md"
              >
                + Add Filter
              </button>
            </div>
            <div className="flex items-center gap-1 text-sm text-[#75777c]">
              <RxQuestionMarkCircled className="w-[14px] h-[14px]" />
              Learn about filtering
            </div>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
