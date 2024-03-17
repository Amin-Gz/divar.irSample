import { useState } from "react";
// import appAxios from "../components/server";

function LogIn() {
  const [phone, setPhone] = useState("");
  const [show, setShow] = useState(false);
  const [hidden, setHidden] = useState(true);
  const [changeBorder, setChangeBorder] = useState("border-borderColor border");

  function usernameHandler(e: any) {
    let _phone: string = e.target.value;
    _phone.length === 10 && _phone.at(0) === "9"
      ? (setPhone(_phone), setHidden(true))
      : setHidden(false);
  }
  function submitHandler() {
    if (!show) {
      phone === "" || !hidden
        ? setChangeBorder("border-red-500 border-2")
        : (setShow(true), setChangeBorder("border-borderColor border"));
    } else {
    }
  }
  return (
    <section className="w-screen h-screen bg-[#0000007a] flex items-center justify-center absolute top-0 left-0">
      <div className="w-screen h-screen md:w-[488px] md:h-auto  md:shadow-xl md:rounded-md bg-white text-divarFont text-[14px] leading-loose relative">
        <h3 className="text-[18px] font-medium p-4 relative text-black">
          ورود به حساب کاربری
          <button className="text-divarFont  absolute left-[14px] top-[14px] block w-10 h-10 focus:bg-[#00000010]  rounded-full font-sans">
            X
          </button>
        </h3>
        <hr />
        {/* phoneNumber */}
        <div className="p-4 " hidden={show}>
          <p className="my-[30px]  font-medium text-black text-[16px]">
            شمارهٔ موبایل خود را وارد کنید
          </p>
          <p>قبل از ثبت آگهی، لطفاً وارد حساب خود شوید.</p>
          <p>کد تأیید به این شماره پیامک می‌شود.</p>
          <form
            action="#"
            className={` w-full flex p-1 rounded-md focus-within:border-2 focus-within:border-divar my-[14px]  ${changeBorder}`}
            dir="ltr"
          >
            <label
              htmlFor="phone"
              className="px-2 bg-borderColor rounded-full text-[14px]"
            >
              +۹۸
            </label>
            <input
              type="number"
              name="phone"
              id="phone"
              className="w-full outline-none pl-2 text-black placeholder-style"
              placeholder="شمارهٔ موبایل"
              onChange={usernameHandler}
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
          <p className="text-divar" hidden={hidden}>
            شماره وارد شده صحیح نمی باشد
          </p>
        </div>
        {/* password */}
        <div className="p-4" hidden={!show}>
          <p className="my-[30px]  font-medium text-black text-[16px]">
            رمز عبور را وارد کنید
          </p>
          <p> کد مربوط به شمارۀ «{phone}» را وارد کنید.</p>
          <form
            action="#"
            className={` w-full flex p-1 rounded-md focus-within:border-2 focus-within:border-divar my-[14px] ${changeBorder}`}
            dir="ltr"
          >
            <input
              type="password"
              name="phone"
              id="phone"
              className="w-full outline-none pr-2 text-black placeholder-stylel"
              placeholder="رمز عبور"
              onChange={usernameHandler}
            />
          </form>
          <div className=" w-full relative mt-5 mb-2">
            <p className="inline z-10 text-red-600">رمز عبور نامعتبر</p>
            <button
              className="w-[96px] py-1 rounded-full bg-borderColor text-[12px] absolute left-0 "
              onClick={() => {
                setShow(false);
              }}
            >
              تغییر شمارهٔ موبایل
            </button>
          </div>
        </div>
        {/* btn */}
        <div
          className="absolute md:static bottom-0 w-full p-4 border-t"
          dir="ltr"
        >
          <button
            className="h-[40px]  w-full md:w-[96px] rounded-md bg-divarFontRed text-white text-[16px]"
            onClick={submitHandler}
          >
            تایید
          </button>
        </div>
      </div>
    </section>
  );
}

export default LogIn;
