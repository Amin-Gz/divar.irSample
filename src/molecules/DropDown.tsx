import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

function DropDown() {
  const [bool, setbool] = useState(true);
  const [style, setstyle] = useState("");

  function buttonHandler() {
    setbool(!bool);
    style === "rotate-180" ? setstyle("") : setstyle("rotate-180");
  }

  return (
    <div className="relative w-full ">
      <button
        type="button"
        className="px-6 py-2.5 text-divarFontHover text-sm font-semibold border outline-none w-full rounded-sm group "
        onClick={() => {
          buttonHandler();
        }}
      >
        انتخاب کنید
        <IoIosArrowDown className={`${style} scale-125 inline mr-4`} />
      </button>
      <ul
        className="absolute shadow-lg bg-white py-2 px-2 z-[1000] min-w-full w-max rounded max-h-96 overflow-auto"
        hidden={bool}
      >
        <li className="mb-2">
          <input
            placeholder="Text input"
            className="px-4 py-2.5 w-full rounded text-gray-500 text-sm font-semibold border-none outline-blue-600 bg-gray-50"
          />
        </li>
        <li className="py-2.5 px-4 hover:bg-blue-50 text-black text-sm cursor-pointer">
          نو
        </li>
        <li className="py-2.5 px-4 hover:bg-blue-50 text-black text-sm cursor-pointer">
          در حد نو
        </li>
        <li className="py-2.5 px-4 hover:bg-blue-50 text-black text-sm cursor-pointer">
          کار کرده
        </li>
        <li className="py-2.5 px-4 hover:bg-blue-50 text-black text-sm cursor-pointer">
          نیاز به تعمیر
        </li>
      </ul>
    </div>
  );
}

export default DropDown;
