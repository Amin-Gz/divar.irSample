// import React from 'react'

function LogIn() {
  return (
    <section className="w-screen h-screen bg-[#0000007a] flex items-center justify-center absolute top-0 left-0">
      <div className="w-screen h-screen md:w-[488px] md:h-[458px]  md:shadow-xl md:rounded-md bg-white text-divarFont text-[14px] leading-loose relative">
        <h3 className="text-[18px] font-medium p-4 relative text-black">
          ورود به حساب کاربری
          <button className="text-divarFont  absolute left-[14px] top-[14px] block w-10 h-10 focus:bg-[#00000010]  rounded-full font-sans">
            X
          </button>
        </h3>
        <hr />
        <div className="p-4">
          <p className="my-[30px]  font-medium text-black text-[16px]">
            شمارهٔ موبایل خود را وارد کنید
          </p>
          <p>قبل از ثبت آگهی، لطفاً وارد حساب خود شوید.</p>
          <p>کد تأیید به این شماره پیامک می‌شود.</p>
          <form
            action="#"
            className=" w-full flex p-1 rounded-md border-borderColor border-2 focus-within:border-divar my-[14px]"
            dir="ltr"
          >
            <label
              htmlFor="phone"
              className="px-2 bg-borderColor rounded-full text-[14px]"
            >
              +۹۸
            </label>
            <input
              type="phone"
              name="phone"
              id="phone"
              className="w-full outline-none pl-2 text-black"
              placeholder="شمارهٔ موبایل"
            />
          </form>
          <p className="">
            <a href="" className="text-divarFontRed">
              شرایط استفاده از خدمات
            </a>{" "}
            و{" "}
            <a href="" className="text-divarFontRed">
              {" "}
              حریم خصوصی{" "}
            </a>
            دیوار را می‌پذیرم.
          </p>
        </div>
        <div className="absolute bottom-0 w-full p-4 border-t" dir="ltr">
          <button className="h-[40px]  w-full md:w-[96px] rounded-md bg-divarFontRed text-white text-[16px]">
            تایید
          </button>
        </div>
      </div>
    </section>
  );
}

export default LogIn;
