import React from 'react'
import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import {Link} from 'react-router-dom'
function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }
const DropdownButton = () => {
  return (
    <>
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="inline-flex w-40 justify-center gap-x-1.5 rounded-md  px-3 py-2  font-semibold text-black shadow-sm ring-4 ring-inset ring-red-500 hover:bg-red-500 bg-red-400 mt-12 text-xl animate-bounce ">
            Menu
          <ChevronDownIcon className="w-5 h-5 ml-4 -mr-1 text-black" aria-hidden="true" />
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
        <Menu.Items className="absolute right-0 z-20 mt-4 text-center origin-top-right bg-red-600 rounded-md shadow-lg w-44 ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            <Menu.Item>
              {({ active }) => (
                <Link to="/"
                  className={classNames(
                    active ? 'bg-red-400 text-black' : 'text-gray-900',
                    'block px-4 py-2 text-lg font-semibold'
                  )}
                >
                  Let's meet!
                </Link>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <Link
                  to="/Experience"
                  className={classNames(
                    active ? 'bg-red-400 text-black' : 'text-gray-900',
                    'block px-4 py-2 text-lg font-semibold'
                  )}
                >
                 My Experience
                </Link>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <Link
                  to="/Projects"
                  className={classNames(
                    active ? 'bg-red-400 text-black' : 'text-gray-900',
                    'block px-4 py-2 text-lg font-semibold'
                  )}
                >
                 Works
                </Link>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <Link
                  to="/Contact"
                  className={classNames(
                    active ? 'bg-red-400 text-black' : 'text-gray-900',
                    'block px-4 py-2 text-lg font-semibold'
                  )}
                >
                 Let's work together
                </Link>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  </>
  )
}

export default DropdownButton;