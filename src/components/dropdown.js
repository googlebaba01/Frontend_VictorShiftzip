import {
  Menu,
  MenuButton,
  MenuItems,
  MenuItem,
  Transition,
} from "@headlessui/react";
import { FaChevronDown } from "react-icons/fa";

export default function Dropdown({ caption, options, onSelect }) {
  return (
    <div className="w-full">
      <Menu>
        {({ open }) => (
          <>
            <MenuButton className="inline-flex items-center gap-2 rounded-md h-8 bg-[#18181883] py-1.5 px-3 text-md font-semibold text-white shadow-white/10 focus:outline-none data-[hover]:bg-gray-700 data-[open]:bg-gray-700 data-[focus]:outline-1 data-[focus]:outline-white w-full justify-between">
              <div>{caption}</div>
              <FaChevronDown
                className={` w-3.5 h-3.5 ${
                  open && "rotate-180"
                } transition-transform duration-300`}
              />
            </MenuButton>
            <Transition
              as="div"
              enter="transition ease-out duration-75"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
              className="absolute z-10 w-[195px] p-1 mt-2 text-white origin-top-right border rounded-xl border-white/5 bg-[#12121288] text-md focus:outline-none"
            >
              <MenuItems>
                {options.map((option) => (
                  <MenuItem key={option}>
                    <div
                      onClick={() => onSelect(option)}
                      className="block px-3 py-2 data-[focus]:bg-[#121212] rounded-md cursor-pointer"
                    >
                      {option}
                    </div>
                  </MenuItem>
                ))}
              </MenuItems>
            </Transition>
          </>
        )}
      </Menu>
    </div>
  );
}
