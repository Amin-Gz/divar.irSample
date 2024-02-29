// import React from 'react'
import { FaSearch } from "react-icons/fa";
import { GrLocation } from "react-icons/gr";

function MpHeader() {
  return (
    <header className="fixed top-0 right-0 w-full h-[64px] px-4 border-b flex items-center justify-center">
      {/* mobile */}
      <nav className="bg-[#efefef90] my-3 w-full h-[40px] rounded-sm flex md:hidden">
        <form action="" className="w-full relative ">
          <input
            type="text"
            className="bg-transparent w-full h-full pr-4 pl-[32px] outline-none"
            placeholder="جستجو در همه آگهی ها"
          />
          <FaSearch className="absolute top-[12px] left-[12px] fill-[rgba(0,30,50,0.35)]" />
        </form>
        <div className="flex items-center ">
          <hr className="h-[1.5rem] w-[1px] bg-[rgba(0,30,50,0.35)] mx-1"></hr>
          <p className="mx-2 text-divarfont">تهران</p>
          <GrLocation className="stroke-[rgba(0,30,50,0.35)] scale-110 ml-2" />
        </div>
      </nav>
      {/* tablet */}
      <nav></nav>
    </header>
  );
}

export default MpHeader;
