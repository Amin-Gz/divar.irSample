import { BsPeopleFill } from "react-icons/bs";
import { CiMobile2 } from "react-icons/ci";
import { FaBriefcase, FaBrush, FaCar, FaDice, FaTools } from "react-icons/fa";
import { LuLamp } from "react-icons/lu";
import { MdArrowBackIosNew, MdOutlineRealEstateAgent } from "react-icons/md";
import { TiWatch } from "react-icons/ti";
import { useRecoilState } from "recoil";
import { rBool, rCategoriNames } from "../recoil/states.atom";

function Categories(style: any) {
  const [, settitle] = useRecoilState(rCategoriNames);
  const [, setbool] = useRecoilState(rBool);
  function buttonHandler(e: any) {
    console.log(window.location.href);
    window.location.href.search("new-product") != -1 &&
      (settitle(e.target.innerText), setbool(true));
  }
  // window.location.href
  return (
    <ul className={`grid text-[14px] mb-4 ${style.ulStyle}`}>
      <p className={style.pStyle}>دسته ها</p>
      <li>
        <a
          href="#"
          className={`${style.aStyle} flex items-center w-full text-divarFontHover hover:text-[#000000da] relative`}
          onClick={() => {
            buttonHandler(event);
          }}
        >
          <MdOutlineRealEstateAgent
            className={`stroke-[rgba(0,30,50,0.35)] scale-110 ml-2 ${style.iconStyle}`}
          />
          <img
            src="./src/assets/pics/real-estate.png"
            alt="house"
            className={`${style.imgStyle} w-16`}
          />
          املاک
          <MdArrowBackIosNew className={style.iconStyle2} />
        </a>
      </li>
      <li>
        <a
          href="#"
          className={`${style.aStyle} flex items-center w-full text-divarFontHover hover:text-[#000000da] relative`}
          onClick={() => {
            buttonHandler(event);
          }}
        >
          <FaCar
            className={`stroke-[rgba(0,30,50,0.35)] scale-110 ml-2 ${style.iconStyle}`}
          />
          <img
            src="./src/assets/pics/vehicles.png"
            alt="house"
            className={`${style.imgStyle} w-16`}
          />
          وسایل نقلیه
          <MdArrowBackIosNew className={style.iconStyle2} />
        </a>
      </li>
      <li>
        <a
          href="#"
          className={`${style.aStyle} flex items-center w-full text-divarFontHover hover:text-[#000000da] relative`}
          onClick={() => {
            buttonHandler(event);
          }}
        >
          <CiMobile2
            className={`stroke-[rgba(0,30,50,0.35)] scale-110 ml-2 ${style.iconStyle}`}
          />
          <img
            src="./src/assets/pics/electronic-devices.png"
            alt="house"
            className={`${style.imgStyle} w-16`}
          />
          کالای دیجیتال
          <MdArrowBackIosNew className={style.iconStyle2} />
        </a>
      </li>
      <li>
        <a
          href="#"
          className={`${style.aStyle} flex items-center w-full text-divarFontHover hover:text-[#000000da] relative`}
          onClick={() => {
            buttonHandler(event);
          }}
        >
          <LuLamp
            className={`fill-[rgba(0,30,50,0.35)] scale-110 ml-2 ${style.iconStyle}`}
          />
          <img
            src="./src/assets/pics/home-kitchen.png"
            alt="house"
            className={`${style.imgStyle} w-16`}
          />
          خانه و آشپزخانه
          <MdArrowBackIosNew className={style.iconStyle2} />
        </a>
      </li>
      <li>
        <a
          href="#"
          className={`${style.aStyle} flex items-center w-full text-divarFontHover hover:text-[#000000da] relative`}
          onClick={() => {
            buttonHandler(event);
          }}
        >
          <FaBrush
            className={`stroke-[rgba(0,30,50,0.35)] scale-110 ml-2 ${style.iconStyle}`}
          />
          <img
            src="./src/assets/pics/services.png"
            alt="house"
            className={`${style.imgStyle} w-16`}
          />
          خدمات
          <MdArrowBackIosNew className={style.iconStyle2} />
        </a>
      </li>
      <li>
        <a
          href="#"
          className={`${style.aStyle} flex items-center w-full text-divarFontHover hover:text-[#000000da] relative`}
          onClick={() => {
            buttonHandler(event);
          }}
        >
          <TiWatch
            className={`stroke-[rgba(0,30,50,0.35)] scale-110 ml-2 ${style.iconStyle}`}
          />
          <img
            src="./src/assets/pics/personal.png"
            alt="house"
            className={`${style.imgStyle} w-16`}
          />
          وسایل شخصی
          <MdArrowBackIosNew className={style.iconStyle2} />
        </a>
      </li>
      <li>
        <a
          href="#"
          className={`${style.aStyle} flex items-center w-full text-divarFontHover hover:text-[#000000da] relative`}
          onClick={() => {
            buttonHandler(event);
          }}
        >
          <FaDice
            className={`stroke-[rgba(0,30,50,0.35)] scale-110 ml-2 ${style.iconStyle}`}
          />
          <img
            src="./src/assets/pics/leisure-hobbies.png"
            alt="house"
            className={`${style.imgStyle} w-16`}
          />
          سرگرمی و فراغت
          <MdArrowBackIosNew className={style.iconStyle2} />
        </a>
      </li>
      <li>
        <a
          href="#"
          className={`${style.aStyle} flex items-center w-full text-divarFontHover hover:text-[#000000da] relative`}
          onClick={() => {
            buttonHandler(event);
          }}
        >
          <BsPeopleFill
            className={`stroke-[rgba(0,30,50,0.35)] scale-110 ml-2 ${style.iconStyle}`}
          />
          <img
            src="./src/assets/pics/community.png"
            alt="house"
            className={`${style.imgStyle} w-16`}
          />
          اجتماعی
          <MdArrowBackIosNew className={style.iconStyle2} />
        </a>
      </li>
      <li>
        <a
          href="#"
          className={`${style.aStyle} flex items-center w-full text-divarFontHover hover:text-[#000000da] relative`}
          onClick={() => {
            buttonHandler(event);
          }}
        >
          <FaTools
            className={`stroke-[rgba(0,30,50,0.35)] scale-110 ml-2 ${style.iconStyle}`}
          />
          <img
            src="./src/assets/pics/tools-materials-equipment.png"
            alt="house"
            className={`${style.imgStyle} w-16`}
          />
          تجهیزات و صنعتی
          <MdArrowBackIosNew className={style.iconStyle2} />
        </a>
      </li>
      <li>
        <a
          href="#"
          className={`${style.aStyle} flex items-center w-full text-divarFontHover hover:text-[#000000da] relative`}
          onClick={() => {
            buttonHandler(event);
          }}
        >
          <FaBriefcase
            className={`stroke-[rgba(0,30,50,0.35)] scale-110 ml-2 ${style.iconStyle}`}
          />
          <img
            src="./src/assets/pics/jobs.png"
            alt="house"
            className={`${style.imgStyle} w-16`}
          />
          استخدام و کاریابی
          <MdArrowBackIosNew className={style.iconStyle2} />
        </a>
      </li>
    </ul>
  );
}

export default Categories;
