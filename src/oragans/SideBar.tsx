import { MdKeyboardArrowDown } from "react-icons/md";
import SubMenuFooter from "../molecules/SubMenuFooter";
import SocialPages from "../molecules/SocialPages";
import Enamad from "../molecules/Enamad";
import Categories from "../molecules/Categories";
function SideBar() {
  const ulStyle = " grid-cols-4 md:grid-cols-1 gap-6 md:gap-[14px]";
  const pStyle = " hidden md:inline-block";
  const aStyle = " text-center md:text-start  flex-col md:flex-row";
  const iconStyle = "hidden md:block ";
  const iconStyle2 = "hidden";
  const imgStyle = "md:hidden";
  function expand(e: any) {
    console.log(e);
    e.target.classList.replace("h-[58px]", "h-[116px]");
    console.log(e.target.classList);
  }
  return (
    <div className="felx flex-col w-full md:w-[380px] items-center justify-between overflow-scroll p-5">
      <Categories
        ulStyle={ulStyle}
        pStyle={pStyle}
        aStyle={aStyle}
        iconStyle={iconStyle}
        iconStyle2={iconStyle2}
        imgStyle={imgStyle}
      />
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
      <div className="hidden md:block">
        <SubMenuFooter class="text-[12px] gap-4 leading-6 mt-4" />
        <SocialPages className="w-full gap-4" />
        <Enamad />
      </div>
    </div>
  );
}

export default SideBar;
