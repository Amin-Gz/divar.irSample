import { BsChatFill } from "react-icons/bs";
import { IoIosAddCircle } from "react-icons/io";
import { IoMenuOutline, IoPerson } from "react-icons/io5";

function MobileMenu() {
  return (
    <>
      <div className="h-[56px] w-full md:hidden"></div>
      <div className="h-[56px] w-full fixed bottom-0 z-10 bg-gray-100 shadow-md md:hidden">
        <ul className="w-full h-full grid grid-rows-1 grid-cols-5">
          <li>
            <a
              href="#"
              className="flex flex-col w-full h-full items-center text-xs justify-center gap-1"
            >
              <img src="./src/assets/pics/divarLogo.svg" alt="" />
              آگهی ها
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex flex-col w-full h-full items-center *:scale-125 text-[20px] justify-center gap-1 *:fill-divarFontHover"
            >
              <IoMenuOutline />
              <p className="text-xs"> دسته ها</p>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex flex-col w-full h-full items-center  text-[20px] justify-center gap-1 *:fill-divarFontHover"
            >
              <IoIosAddCircle />
              <p className="text-xs">ثبت آگهی</p>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex flex-col w-full h-full items-center text-[18px] justify-center gap-1 *:fill-divarFontHover"
            >
              <BsChatFill />
              <p className="text-xs">چت</p>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex flex-col w-full h-full items-center text-[20px] justify-center gap-1 *:fill-divarFontHover"
            >
              <IoPerson />
              <p className="text-xs">دیوار من</p>
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}

export default MobileMenu;
