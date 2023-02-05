import React, { useState } from "react";
import Image from "next/legacy/image";
import {
  MagnifyingGlassIcon,
  GlobeAltIcon,
  Bars3Icon,
  UserCircleIcon,
  UsersIcon,
} from "@heroicons/react/20/solid";
import { DateRangePicker } from "react-date-range";
import { addDays } from "date-fns";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css";
import { DateRangePickerProps } from "react-date-range";

// TODO: Figure out why this interface isn't working
// type Selection = {
//   selection: { endDate: Date; startDate: Date; key: string };
// };

function Header() {
  const [searchInput, setSearchInput] = useState("");
  const [guestNum, setGuestNum] = useState(1);
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 2),
      key: "selection",
    },
  ]);

  console.log("Tino log test ---> WHAT ", date);

  return (
    <header className="sticky z-50 top-0 grid grid-cols-3 bg-white shadow-md p-5 md:px-10">
      {/* Left - Logo */}
      <div className="relative flex items-center h-14 cursor-pointer my-auto ">
        <Image
          alt="Logo Image"
          src="/images/blacklogo.png"
          layout="fill"
          objectFit="contain"
          objectPosition="left"
        />
      </div>
      {/* Center - Search */}
      <div className="flex items-center md:border-2 md:shadow-md py-2 px-5 rounded-xl">
        <input
          value={searchInput}
          onChange={(e: any) => {
            setSearchInput(e.target.value);
          }}
          type="text"
          placeholder="Start your Search"
          className="flex-grow bg-transparent outline-none text-gray-500 text-sm placeholder-gray-400"
        />
        <MagnifyingGlassIcon className="hidden md:inline-flex md:mx-2 h-9 bg-red-400 text-white rounded-full p-1 cursor-pointer" />
      </div>
      {/* Right */}
      <div className="flex items-center space-x-4 justify-end text-gray-500">
        <p className="hidden md:inline cursor-pointer">Become a Host</p>
        <GlobeAltIcon className="h-6 cursor-pointer" />
        <div className="flex space-x-2 border-2 p-2  rounded-lg">
          <Bars3Icon className="h-6" />
          <UserCircleIcon className="h-6" />
        </div>
      </div>

      {searchInput && (
        <div className="flex flex-col col-span-3 mx-auto mt-3">
          <DateRangePicker
            ranges={date}
            minDate={new Date()}
            // TODO: DateRangePIckerProps doesn't have item.selection... need to check
            onChange={(item: DateRangePickerProps | any) =>
              setDate([item.selection])
            }
            rangeColors={["#FD5B61"]}
          />
          <div className="flex border-b items-center">
            <h2 className="text-2xl flex-grow font-semibold">
              Number of Guests
            </h2>
            <UsersIcon className="h-5" />
            <input
              type="number"
              value={guestNum}
              min={1}
              onChange={(e: any) => setGuestNum(e.target.value)}
              className="w-12 pl-2 text-lg outline-none text-red-400"
            />
          </div>
          <div>
            <button></button>
            <button></button>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
