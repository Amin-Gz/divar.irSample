import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import appAxios from "../components/server";
import { useRecoilState } from "recoil";
import {
  rChangeBorder,
  rHidden,
  rPassword,
  rPhone,
  rShow,
  rShowPassword,
  rSignup,
  rWrongPass,
} from "../recoil/states.atom";
// todo finish handling close btn
function LogIn() {
  const [phone, setPhone] = useRecoilState(rPhone);
  const [password, setpassword] = useRecoilState(rPassword);
  const [show, setShow] = useRecoilState(rShow);
  const [hidden, setHidden] = useRecoilState(rHidden);
  const [signup, setSignup] = useRecoilState(rSignup);
  const [wrongPass, setwrongPass] = useRecoilState(rWrongPass);
  const [showPassword, setshowPassword] = useRecoilState(rShowPassword);
  const [changeBorder, setChangeBorder] = useRecoilState(rChangeBorder);
  function usernameHandler(e: any) {
    let _phone: string = e.target.value;
    _phone.length === 10 && _phone.at(0) === "9"
      ? (setPhone(_phone), setHidden(true))
      : setHidden(false);
  }

  function signupHandler() {
    setSignup(false);
    setShow(false);
  }
  function submitHandler() {
    if (!show && signup) {
      phone === "" || !hidden
        ? setChangeBorder("border-red-500 border-2")
        : (setShow(true), setChangeBorder("border-borderColor border"));
    } else if (!show && !signup) {
      console.log(password);
      console.log(phone);
      appAxios
        .post("/signup")
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      password === undefined
        ? (setwrongPass(true), console.log("object"))
        : appAxios
            .post("/login", {
              phone: phone,
              password: password,
            })
            .then((response) => {
              console.log(response);
              const token = response.data.accessToken;
              localStorage.setItem("token", token);
            })
            .catch((error) => console.error(error));
    }
  }
  return (
    <section className="w-screen h-screen bg-[#0000007a] flex items-center justify-center absolute top-0 left-0">
      <div className="w-screen h-screen md:w-[488px] md:h-auto  md:shadow-xl md:rounded-md bg-white text-divarFont text-[14px] leading-loose relative">
        <h3 className="text-[18px] font-medium p-4 relative text-black select-none">
          ورود به حساب کاربری
          <a
            href="/"
            className="text-divarFont  absolute left-[14px] top-[14px] block w-10 h-10 focus:bg-[#00000010]  rounded-full font-sans text-center"
          >
            X
          </a>
        </h3>
        <hr />
        <div className="" hidden={!signup}>
          {/* phoneNumber */}
          <div className="p-4 select-none" hidden={show}>
            <p className="my-[30px]  font-medium text-black text-[16px] ">
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
          <div className="p-4 select-none" hidden={!show}>
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
                name="password"
                id="password"
                className="w-full outline-none pr-2 text-black placeholder-stylel"
                placeholder="رمز عبور"
                onChange={(e: any) => {
                  setpassword(e.target.value);
                }}
              />
            </form>
            <div className=" w-full relative mt-5 mb-2 h-7">
              <span hidden={!wrongPass}>
                <p className="inline  text-red-600">رمز عبور نامعتبر</p>
              </span>
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
        </div>
        {/* signup */}
        <div className="p-4 select-none" hidden={signup}>
          <p className="my-[30px]  font-medium text-black text-[16px]">
            شمارهٔ موبایل و رمز عبور را وارد کنید
          </p>

          <form action="#" className={`  flex flex-col my-[14px] `} dir="ltr">
            <div
              className={` w-full flex p-1 rounded-md focus-within:border-2 focus-within:border-divar my-[14px] ${changeBorder}`}
            >
              <label
                htmlFor="phone"
                className="px-2 bg-borderColor rounded-full text-[14px]"
              >
                +۹۸
              </label>
              <input
                type="number"
                name="phoneSubmit"
                id="phoneSubmit"
                className="w-full outline-none pl-2 text-black placeholder-style"
                placeholder="شمارهٔ موبایل"
                onChange={usernameHandler}
              />
            </div>
            <div
              className={`w-full  p-1 relative rounded-md focus-within:border-2 focus-within:border-divar my-[14px] ${changeBorder}`}
            >
              <input
                type="password"
                name="passwordSubmit"
                id="passwordSubmit"
                className="w-full outline-none pr-2 text-black placeholder-stylel"
                placeholder="رمز عبور"
                onChange={(e: any) => {
                  setpassword(e.target.value);
                }}
              />

              <IoMdEyeOff
                className={`absolute right-2 top-3 scale-150 z-10 bg-white hover:cursor-pointer ${showPassword}`}
                onClick={(e) => {
                  e.target.parentElement.previousSibling.type = "text";
                  setshowPassword("hidden");
                }}
              />
              <IoMdEye
                className={`absolute right-2 top-3 scale-150 hover:cursor-pointer `}
                onClick={(e) => {
                  console.log(e);
                  e.target.parentElement.previousElementSibling.previousSibling.type =
                    "password";
                  setshowPassword(" ");
                }}
              />
            </div>
          </form>
          <div className=" w-full mt-5 mb-2 flex justify-between">
            <div className="inline-block">
              <p className="text-divar " hidden={hidden}>
                شماره وارد شده صحیح نمی باشد
              </p>
            </div>
            <button
              className="w-[96px] py-1 rounded-full bg-borderColor text-[12px] active:shadow-inner"
              onClick={() => {
                setSignup(true);
              }}
            >
              بازگشت
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
          <button
            className="h-[40px]  w-full md:w-[96px] rounded-md border-divarFontRed text-divarFontRed border text-[16px] md:ml-5 ml-0 mt-2 md:mt-0 active:shadow-inner shadow-md "
            onClick={signupHandler}
            hidden={!signup}
          >
            ثبت نام
          </button>
        </div>
      </div>
    </section>
  );
}

export default LogIn;
