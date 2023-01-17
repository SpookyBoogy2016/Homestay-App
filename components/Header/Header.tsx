import React from "react";
import Image from "next/legacy/image";
import {
  MagnifyingGlassIcon,
  GlobeAltIcon,
  Bars3Icon,
  UserCircleIcon,
} from "@heroicons/react/20/solid";

function Header() {
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
    </header>
  );
}

export default Header;
