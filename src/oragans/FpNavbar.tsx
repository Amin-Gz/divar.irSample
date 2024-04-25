import { Link } from "react-router-dom";

function FpNavbar() {
  return (
    <ul className="flex justify-around w-full border-b p-3">
      <li className="text-[12px] text-divarFont">
        <Link to="/new-product">ثبت آگهی</Link>
      </li>
      <li className="text-[12px] text-divarFont">
        <Link to="#">درباره دیوار</Link>
      </li>
      <li className="text-[12px] text-divarFont">
        <Link to="#">دریافت برنامه</Link>
      </li>
      <li className="text-[12px] text-divarFont">
        <Link to="#">اتاق خبر</Link>
      </li>
      <li className="text-[12px] text-divarFont">
        <Link to="#">پشتیبانی</Link>
      </li>
    </ul>
  );
}

export default FpNavbar;
