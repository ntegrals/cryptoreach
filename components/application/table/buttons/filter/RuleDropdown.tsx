import { Menu, Transition } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import { Fragment } from 'react';
import { RxChevronDown } from 'react-icons/rx';

// const rules = [
//   'ilike',
//   'not.ilike'
//   // 'ilike',
//   // 'not.ilike'
//   // 'starts with',
//   // 'ends with',
//   // 'is',
//   // 'is not',
//   // 'empty',
//   // 'not empty'
// ];

const matchRule = (rule: string) => {
  switch (rule) {
    case 'eq':
      return 'iss';
    case 'neq':
      return 'iss not';
    case 'ilike':
      return 'is';
    case 'not.ilike':
      return 'is not';
    case 'cs':
      return 'contains';
    case 'not.cs':
      return 'not contains';
    default:
      return 'ilike';
  }
};

// choose a different rule set based on the type of column
// e.g. an array should have a different set of rules than a string
export const matchRuleSet = (type: string) => {
  type = type.toLowerCase();

  switch (type) {
    case 'text':
      return ['ilike', 'not.ilike'];
    case 'bio':
      return ['ilike', 'not.ilike'];
    case 'email':
      return ['ilike', 'not.ilike'];
    case 'number':
      return ['eq', 'neq', 'gt', 'gte', 'lt', 'lte'];
    case 'export':
      return ['eq', 'neq', 'gt', 'gte', 'lt', 'lte'];
    case 'date':
      return ['eq', 'neq', 'gt', 'gte', 'lt', 'lte'];
    case 'arrayBlue':
      return ['cs', 'not.cs'];
    case 'arrayGreen':
      return ['cs', 'not.cs'];
    default:
      return ['cs', 'not.cs'];
  }
};

export default function ColDropdownFilter(props: any) {
  console.log(props.item);
  return (
    <Menu as="div" className="relative inline-block text-left">
      <Menu.Button className="w-full">
        <div className="flex items-center w-full justify-center gap-x-1.5 rounded-[9px] bg-white px-3 py-1 text-sm font-medium text-black shadow-[0px_0px_2px_#E0E0E0,0px_1px_4px_-2px_rgba(24,39,75,0.02),0px_4px_4px_-2px_rgba(24,39,75,0.06)] hover:bg-gray-50">
          {matchRule(props.item.rule)}
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

            {matchRuleSet(props.item.type).map((rule) => (
              <button
                onClick={() => {
                  const updatedFilter = props.filter.map((item: any) => {
                    if (item.id === props.filter[props.index].id) {
                      return {
                        ...item,
                        rule: rule
                      };
                    } else {
                      return item;
                    }
                  });

                  props.setFilter(updatedFilter);
                }}
                className="w-full flex items-center text-sm gap-1 p-2 hover:bg-[#F5F5F6] duration-150 ease-in-out"
              >
                {matchRule(rule)}
              </button>
            ))}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
