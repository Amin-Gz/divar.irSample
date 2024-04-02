import { FaSearch } from "react-icons/fa";
import Categories from "../molecules/Categories";

function CreateProduct(style: any) {
  const ulStyle = " grid-cols-1 gap-0";
  const pStyle = " hidden";
  const aStyle = "flex-row text-lg py-2 leading-8 border-b";
  const iconStyle = "";
  const iconStyle2 = "absolute left-0";
  const imgStyle = "hidden";
  return (
    <div
      className="h-full w-full md:w-[488px] md:px-2 px-4 pt-8 "
      hidden={style.hidden}
    >
      <h2 className="text-lg">ثبت آگهی</h2>
      <p className="text-sm mt-1 mb-4 text-divarFontHover">انتخاب دسته‌بندی</p>
      <form action="" className="relative hidden md:block">
        <input
          type="text"
          placeholder="جستجوی در دسته ها"
          className="  px-1 py-[5px]  pr-[30px] mb-4 rounded-md outline-none w-full border hover:border-divarFont focus:border-divar font-[100] inline-block relative"
        />
        <FaSearch className="absolute top-[10px] right-[10px] fill-[rgba(0,30,50,0.35)]" />
      </form>
      <Categories
        ulStyle={ulStyle}
        pStyle={pStyle}
        aStyle={aStyle}
        iconStyle={iconStyle}
        iconStyle2={iconStyle2}
        imgStyle={imgStyle}
      />
    </div>
  );
}

export default CreateProduct;
