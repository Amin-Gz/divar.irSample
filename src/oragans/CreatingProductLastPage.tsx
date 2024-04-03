import { useRecoilState } from "recoil";
import "./../assets/css/CreatingProductLastPage.css";
import { rCategoriNames } from "../recoil/states.atom";
import DropDown from "../molecules/DropDown";
function CreatingProductLastPage() {
  const [title] = useRecoilState(rCategoriNames);
  return (
    <div className="flex flex-col" id="CPLP">
      <h2 className=" my-4">ثبت آگهی</h2>
      <div className=" h-60 md:h-32 w-full border border-divarFont rounded-md overflow-visible overflow-x-visible mt-4 flex flex-col md:flex-row items-center gap-4">
        <p className="text-[18px] md:text-[20px] font-medium my-4 md:pr-2 md:inline">
          {title}
        </p>
        <div className="flex flex-col md:inline-block items-center overflow-visible w-fit">
          <div className=" md:grid-cols-2 md:grid-rows-1">
            <button className=" bg-divarFontRed text-white h-[40px] w-[134px] px-4 flex items-center rounded-sm mx-auto font-medium shadow-md shadow-divarFontRed md:float-left ">
              تغییر دسته‌بندی
            </button>
            <img
              src={`./src/assets/pics/${title}.png`}
              alt=""
              className="md:col-span-1 w-[208px] md:w-[240px] mx-auto"
            />
          </div>
        </div>
      </div>
      <form action="" className=" mt-8">
        <label htmlFor="" className=" mb-2 w-full">
          شهر
        </label>
        <DropDown />
      </form>
      <h3>موقعیت مکانی آگهی</h3>
      {/* for map */}
      <img src="./src/assets/pics/map.png" alt="" />
      <h3>عکس آگهی</h3>
      <p>افزودنِ عکس بازدید آگهی شما را تا سه برابر افزایش می‌دهد.</p>
      <div></div>
      <p>تعداد عکس‌های انتخاب شده نباید بیشتر از ۱۰ باشد.</p>
      {/* for gheymat mahal and vaziate kala */}
      <h3>قیمت</h3>
      <DropDown />
      <h3>محل</h3>
      <DropDown />
      <h3>وضیت</h3>
      <DropDown />
      <h3>اطلاعات حساب کاربری</h3>
      <p>
        آگهی شما با شمارهٔ ۰۹۰۳۸۶۵۱۵۴۶ در دیوار ثبت می‌شود. تماس‌ها و چت‌های این
        آگهی هم با همین شماره است. بعد از ثبت آگهی، شماره قابل تغییر‌ نیست.
      </p>
      <p>توجه: پس از ثبت آگهی، به پیامک‌های پرداخت وجه بی‌اعتنا باشید.</p>
      <h3>چت دیوار</h3>
      <p>با پیام‌رسان «چت دیوار»، درون دیوار با کاربران ارتباط برقرار کنید.</p>
      <p className="text-black mt-4">
        <input type="checkbox" name="" id="" className=" ml-3" />
        چت دیوار فعال شود
      </p>
      <h3>تماس تلفنی</h3>
      <DropDown />
      <p>
        با انتخاب «فعال»، شمارهٔ شما به کاربران نمایش داده می‌شود و کاربران به
        همان شماره زنگ می‌زنند.
      </p>
      <p>
        با انتخاب «غیر فعال»، هیچ کاربری نمی‌تواند شمارهٔ شما را ببیند و به شما
        زنگ بزند.
      </p>
      <form action="">
        <input type="text" />
      </form>
      <h3>عنوان آگهی</h3>
      <p>در عنوان آگهی به موارد مهم و چشمگیر اشاره کنید.</p>
      <input
        type="text"
        className="w-full outline-none border rounded-md h-10 my-3 leading-9"
      />
      <h3>توضیحات آگهی</h3>
      <p>
        جزئیات و نکات جالب توجه آگهی خود را کامل و دقیق بنویسید. نوشتن شمارهٔ
        تماس در متن آگهی مجاز نیست. حتماً به ساعات پاسخگویی خود اشاره کنید.
      </p>
      <textarea
        name=""
        id=""
        className="w-full outline-none border rounded-md h-28 py-2 px-4 my-3 leading-9"
      ></textarea>
      <div>
        <div className="absolute md:static bottom-0 w-full p-4 " dir="ltr">
          <button
            className="h-[40px]  w-full md:w-[96px] rounded-md bg-divarFontRed text-white text-[16px]"
            // onClick={submitHandler}
          >
            ارسال آگهی
          </button>
          <button
            className="h-[40px]  w-full md:w-[96px] rounded-md border-divarFontHover text-divarFontHover border text-[16px] md:ml-5 ml-0 mt-2 md:mt-0 active:shadow-inner shadow-md "
            // onClick={signupHandler}
          >
            انصراف
          </button>
        </div>
      </div>
    </div>
  );
}

export default CreatingProductLastPage;
