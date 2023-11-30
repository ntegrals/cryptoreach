import { matchRuleSet } from './RuleDropdown';
import { Menu, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import { RxChevronDown } from 'react-icons/rx';

export default function ColDropdownFilter(props: any) {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <Menu.Button className="w-full">
        <div className="flex items-center w-full justify-center gap-x-1.5 rounded-[9px] bg-white px-3 py-1 text-sm font-medium text-black shadow-[0px_0px_2px_#E0E0E0,0px_1px_4px_-2px_rgba(24,39,75,0.02),0px_4px_4px_-2px_rgba(24,39,75,0.06)] hover:bg-gray-50">
          {props.item.icon}
          {props.item.title}
          <RxChevronDown className="w-[14px] h-[14px]" />
        </div>
      </Menu.Button>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute left-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5">
          <div className="py-1">
            {/* Map over coloums */}

            {/* Remove all items in the table schema where the type contains array */}
            {/* Needs to be removed before final prod */}
            {props.tableSchema
              // .filter((col: any) => !col.type.includes('array'))
              .map((col: any) => (
                <button
                  onClick={() => {
                    const updatedFilter = props.filter.map((item: any) => {
                      if (item.id === props.filter[props.index].id) {
                        return {
                          ...item,
                          col: col.db_name,
                          title: col.title,
                          icon: col.icon,
                          type: col.type,
                          rule: matchRuleSet(col.type)[0]
                        };
                      } else {
                        return item;
                      }
                    });
                    props.setFilter(updatedFilter);
                  }}
                  className="w-full flex items-center text-sm font-medium text-black gap-x-1.5 px-3 py-2 hover:bg-[#F5F5F6] duration-150 ease-in-out"
                >
                  {col.icon}
                  {col.title}
                </button>
              ))}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
