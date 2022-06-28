import { Fragment, useState } from 'react'

import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, ChevronDownIcon } from '@heroicons/react/solid'

const Filter = ({ categories, setRegion }) => {
  const [selected, setSelected] = useState(categories[0])

  return (
    <Listbox
      value={selected}
      onChange={(value) => {
        setSelected(value)
        setRegion(value === 'Filter by Region' ? '' : value)
      }}
    >
      <div className='relative'>
        <Listbox.Button className='relative w-full cursor-default rounded-lg bg-light-element dark:bg-dark-element py-4 pl-8 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-300 sm:text-sm'>
          <span className='block truncate'>{selected}</span>
          <span className='pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2'>
            <ChevronDownIcon className='h-5 w-5' aria-hidden='true' />
          </span>
        </Listbox.Button>
        <Transition
          as={Fragment}
          leave='transition ease-in duration-100'
          leaveFrom='opacity-100'
          leaveTo='opacity-0'
        >
          <Listbox.Options className='absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-light-element dark:bg-dark-element py-1 text-base shadow-lg focus:outline-none sm:text-sm z-50'>
            {categories.map((region, regionIdx) => (
              <Listbox.Option
                key={regionIdx}
                className={({ active }) =>
                  `relative cursor-default select-none py-2 pl-8 pr-4 ${
                    active
                      ? 'bg-gray-200 dark:bg-dark-bg'
                      : 'text-light-input dark:text-dark-text'
                  }`
                }
                value={region}
              >
                {({ selected }) => (
                  <>
                    <span
                      className={`block truncate ${
                        selected ? 'font-medium' : 'font-normal'
                      }`}
                    >
                      {region}
                    </span>
                    {selected ? (
                      <span className='absolute inset-y-0 left-0 flex items-center pl-3 text-light-input dark:text-dark-text'>
                        <CheckIcon className='h-5 w-5' aria-hidden='true' />
                      </span>
                    ) : null}
                  </>
                )}
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </Transition>
      </div>
    </Listbox>
  )
}

export default Filter
