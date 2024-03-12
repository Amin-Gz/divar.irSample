// import React from 'react'
import { FaSearch } from "react-icons/fa";
import { GrLocation } from "react-icons/gr";
// import "../index.css";

function MpHeader() {
  return (
    <header className="static top-0 right-0 w-full h-[64px] px-4 border-b flex items-center justify-center">
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
          <p className="mx-2 text-divarFont">تهران</p>
          <GrLocation className="stroke-[rgba(0,30,50,0.35)] scale-110 ml-2" />
        </div>
      </nav>
      {/* tablet  and laptop*/}
      <nav className=" w-full h-full hidden md:flex  items-center">
        <a href="/main">
          <img
            src="./src/assets/pics/divarLogo.svg"
            className="w-[48px] h-[48px] "
            alt="Divar_Logo"
          />
        </a>
        <hr className="h-[1.5rem] w-[1px] bg-[rgba(0,30,50,0.15)] mr-4 ml-3"></hr>
        <button className="h-[40px] px-4 flex items-center  hover:bg-[#00000010] rounded-sm group">
          <GrLocation className="stroke-[#707070] hover:text-black scale-110  stroke-2 group-hover:stroke-black" />
          <p className="mr-2 text-divarFont font-medium text-[14px] group-hover:text-black">
            تهران
          </p>
        </button>
        <div className="flex items-center mr-4">
          <button>دسته ها </button>
          <form action="" className="relative max-w-[480px]">
            <input
              type="text"
              placeholder="جستجو در همه آگهی ها"
              className="  px-1 py-[5px] rounded-sm outline-none w-full border hover:border-divarFont focus:border-divar font-[100] inline-block relative pr-[30px]"
            />
            <FaSearch className="absolute top-[10px] right-[10px] fill-[rgba(0,30,50,0.35)]" />
          </form>
          <div>
            <button></button>
            <button></button>
            <button></button>
            <button></button>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default MpHeader;
