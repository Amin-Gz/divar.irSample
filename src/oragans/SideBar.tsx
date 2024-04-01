import { BsPeopleFill } from "react-icons/bs";
import { CiMobile2 } from "react-icons/ci";
import { FaBriefcase, FaCar, FaDice, FaTools } from "react-icons/fa";
import { FaBrush } from "react-icons/fa6";
import { LuLamp } from "react-icons/lu";
import { MdKeyboardArrowDown, MdOutlineRealEstateAgent } from "react-icons/md";
import { TiWatch } from "react-icons/ti";
import SubMenuFooter from "../molecules/SubMenuFooter";
import SocialPages from "../molecules/SocialPages";
import Enamad from "../molecules/Enamad";
function SideBar() {
  function expand(e: any) {
    console.log(e);
    e.target.classList.replace("h-[58px]", "h-[116px]");
    console.log(e.target.classList);
  }
  return (
    <div className="felx flex-col w-full md:w-[380px] items-center justify-between overflow-scroll p-5">
      <ul className="grid grid-cols-4 md:grid-cols-1 gap-6 md:gap-[14px] text-[14px] mb-4">
        <p className="hidden md:inline-block">دسته ها</p>
        <li>
          <a
            href="#"
            className="text-center md:text-start  w-fit md:w-full flex flex-col items-center md:flex-row text-divarFontHover hover:text-black"
          >
            <MdOutlineRealEstateAgent className="stroke-[rgba(0,30,50,0.35)] scale-110 ml-2 hidden md:block " />
            <img
              src="./src/assets/pics/real-estate.png"
              alt="house"
              className="md:hidden w-16"
            />
            املاک
          </a>
        </li>
        <li>
          <a
            href="#"
            className="text-center md:text-start w-fit md:w-full flex flex-col items-center md:flex-row text-divarFontHover hover:text-black"
          >
            <FaCar className="stroke-[rgba(0,30,50,0.35)] scale-110 ml-2 hidden md:block " />
            <img
              src="./src/assets/pics/vehicles.png"
              alt="house"
              className="md:hidden w-16"
            />
            وسایل نقلیه
          </a>
        </li>
        <li>
          <a
            href="#"
            className="text-center md:text-start w-fit md:w-full flex flex-col items-center md:flex-row text-divarFontHover hover:text-black"
          >
            <CiMobile2 className="stroke-[rgba(0,30,50,0.35)] scale-110 ml-2 hidden md:block " />
            <img
              src="./src/assets/pics/electronic-devices.png"
              alt="house"
              className="md:hidden w-16"
            />
            کالای دیجیتال
          </a>
        </li>
        <li>
          <a
            href="#"
            className="text-center md:text-start  w-fit md:w-full flex flex-col items-center md:flex-row text-divarFontHover hover:text-black"
          >
            <LuLamp className="fill-[rgba(0,30,50,0.35)] scale-110 ml-2 hidden md:block " />
            <img
              src="./src/assets/pics/home-kitchen.png"
              alt="house"
              className="md:hidden w-16"
            />
            خانه و آشپزخانه
          </a>
        </li>
        <li>
          <a
            href="#"
            className="text-center md:text-start  w-fit md:w-full flex flex-col items-center md:flex-row text-divarFontHover hover:text-black"
          >
            <FaBrush className="stroke-[rgba(0,30,50,0.35)] scale-110 ml-2 hidden md:block " />
            <img
              src="./src/assets/pics/services.png"
              alt="house"
              className="md:hidden w-16"
            />
            خدمات
          </a>
        </li>
        <li>
          <a
            href="#"
            className="text-center md:text-start w-fit md:w-full flex flex-col items-center md:flex-row text-divarFontHover hover:text-black"
          >
            <TiWatch className="stroke-[rgba(0,30,50,0.35)] scale-110 ml-2 hidden md:block " />
            <img
              src="./src/assets/pics/personal.png"
              alt="house"
              className="md:hidden w-16"
            />
            وسایل شخصی
          </a>
        </li>
        <li>
          <a
            href="#"
            className="text-center md:text-start  w-fit md:w-full flex flex-col items-center md:flex-row text-divarFontHover hover:text-black"
          >
            <FaDice className="stroke-[rgba(0,30,50,0.35)] scale-110 ml-2 hidden md:block " />
            <img
              src="./src/assets/pics/leisure-hobbies.png"
              alt="house"
              className="md:hidden w-16"
            />
            سرگرمی و فراغت
          </a>
        </li>
        <li>
          <a
            href="#"
            className="text-center md:text-start   w-fit md:w-full flex flex-col items-center md:flex-row text-divarFontHover hover:text-black"
          >
            <BsPeopleFill className="stroke-[rgba(0,30,50,0.35)] scale-110 ml-2 hidden md:block " />
            <img
              src="./src/assets/pics/community.png"
              alt="house"
              className="md:hidden w-16"
            />
            اجتماعی
          </a>
        </li>
        <li>
          <a
            href="#"
            className="text-center md:text-start  w-fit md:w-full flex flex-col items-center md:flex-row text-divarFontHover hover:text-black"
          >
            <FaTools className="stroke-[rgba(0,30,50,0.35)] scale-110 ml-2 hidden md:block " />
            <img
              src="./src/assets/pics/tools-materials-equipment.png"
              alt="house"
              className="md:hidden w-16"
            />
            تجهیزات و صنعتی
          </a>
        </li>
        <li>
          <a
            href="#"
            className="text-center md:text-start  w-fit md:w-full flex flex-col items-center md:flex-row text-divarFontHover hover:text-black"
          >
            <FaBriefcase className="stroke-[rgba(0,30,50,0.35)] scale-110 ml-2 hidden md:block " />
            <img
              src="./src/assets/pics/jobs.png"
              alt="house"
              className="md:hidden w-16"
            />
            استخدام و کاریابی
          </a>
        </li>
      </ul>
      <button
        className="hidden md:block gap-2 py-2 h-[58px] border-y overflow-hidden w-full"
        onClick={(e) => {
          expand(e);
        }}
      >
        <p className="text-sm h-10 flex items-center ">
          <MdKeyboardArrowDown />
          محل
        </p>
        <input type="text" className="border outline-none h-6 mt-2" />
      </button>
      <button
        className="hidden md:block gap-2 py-2 h-[58px] border-y overflow-hidden w-full"
        onClick={(e) => {
          expand(e);
        }}
      >
        <p className="text-sm h-10 flex items-center ">
          <MdKeyboardArrowDown />
          قیمت
        </p>
        <input type="text" className="border outline-none h-6 mt-2" />
      </button>

      <button
        className="hidden md:block gap-2 py-2 h-[58px] border-y overflow-hidden w-full"
        onClick={(e) => {
          expand(e);
        }}
      >
        <p className="text-sm h-10 flex items-center ">
          <MdKeyboardArrowDown />
          وضعیت آگهی
        </p>
        <input type="text" className="border outline-none h-6 mt-2" />
      </button>
      <SubMenuFooter class="text-[12px] gap-4 leading-6 mt-4" />
      <SocialPages className="w-full gap-4" />
      <Enamad />
    </div>
  );
}

export default SideBar;
