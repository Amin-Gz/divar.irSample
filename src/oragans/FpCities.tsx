// import React from "react";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

function FpCities() {
  return (
    <div className="max-w-[566px] w-screen p-4 md:p-0">
      <p className="md:block hidden text-divarFont text-center text-[14px] font-normal leading-loose mb-[32px] mt-[30px]">
        دﯾﻮار، ﭘﺎﯾﮕﺎه ﺧﺮﯾﺪ و ﻓﺮوش ﺑﯽ‌واﺳﻄﻪ‌! {<br />} اﮔﻪ دﻧﺒﺎل ﭼﯿﺰی ﻫﺴﺘﯽ، ﺷﻬﺮت
        رو اﻧﺘﺨﺎب ﮐﻦ و ﺗﻮ دﺳﺘﻪ‌ﺑﻨﺪی‌ﻫﺎ ﺑﻪ دﻧﺒﺎﻟﺶ ﺑﮕﺮد. اﮔﺮ ﻫﻢ ﻣﯽ‌ﺧﻮای ﭼﯿﺰی
        ﺑﻔﺮوﺷﯽ، ﭼﻨﺪ ﺗﺎ ﻋﮑﺲ ﺧﻮب ازش ﺑﮕﯿﺮ و آﮔﻬﯿﺖ رو ﺑﭽﺴﺒﻮن ﺑﻪ دﯾﻮار.
      </p>
      <form action="" className="relative">
        <input
          type="text"
          placeholder="جستجوی شهر"
          className="  px-1 py-[5px] rounded-md outline-none w-full border hover:border-divarFont focus:border-divar font-[100] inline-block relative pr-[30px]"
        />
        <FaSearch className="absolute top-[10px] right-[10px] fill-[rgba(0,30,50,0.35)]" />
      </form>
      <h2 className="text-center md:text-start pt-[32px] pb-[14px] font-medium">
        شهرهای پربازدید
      </h2>
      <ul className="grid grid-cols-3 grid-rows-4  md:grid-cols-5 md:grid-rows-2  place-items-center h-[332px] md:h-[166px] md:mb-0 mb-[30px]  ">
        <li className=" font-medium text-[14px] text-divarFont">
          <Link to="/main" className="hover:cursor-pointer hover:text-black">
            تهران
          </Link>
        </li>
        <li className=" font-medium text-[14px] text-divarFont">
          <Link to="/main" className="hover:cursor-pointer hover:text-black">
            مشهد
          </Link>
        </li>
        <li className=" font-medium text-[14px] text-divarFont">
          <Link to="/main" className="hover:cursor-pointer hover:text-black">
            کرج
          </Link>
        </li>
        <li className=" font-medium text-[14px] text-divarFont">
          <Link to="/main" className="hover:cursor-pointer hover:text-black">
            شیراز
          </Link>
        </li>
        <li className=" font-medium text-[14px] text-divarFont">
          <Link to="/main" className="hover:cursor-pointer hover:text-black">
            اصفهان
          </Link>
        </li>
        <li className=" font-medium text-[14px] text-divarFont">
          <Link to="/main" className="hover:cursor-pointer hover:text-black">
            اهواز
          </Link>
        </li>
        <li className=" font-medium text-[14px] text-divarFont">
          <Link to="/main" className="hover:cursor-pointer hover:text-black">
            تبریز
          </Link>
        </li>
        <li className=" font-medium text-[14px] text-divarFont">
          <Link to="/main" className="hover:cursor-pointer hover:text-black">
            کرمانشاه
          </Link>
        </li>
        <li className=" font-medium text-[14px] text-divarFont">
          <Link to="/main" className="hover:cursor-pointer hover:text-black">
            قم
          </Link>
        </li>
        <li className="col-span-3 md:col-span-1 font-medium text-[14px] text-divarFont">
          <Link to="/main" className="hover:cursor-pointer hover:text-black">
            رشت
          </Link>
        </li>
      </ul>
      <span className="w-full h-[1px] block bg-borderColor mt-[62px] md:mt-2 mb-[14px]"></span>
    </div>
  );
}

export default FpCities;
