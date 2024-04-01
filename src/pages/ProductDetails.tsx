import { AiOutlineDislike, AiOutlineLike } from "react-icons/ai";
import BreadCrump from "../molecule/BreadCrump";
import Header from "../oragans/Header";
import { CiBookmark } from "react-icons/ci";
import { IoShareSocialOutline } from "react-icons/io5";
import Footer from "../oragans/Footer";
import { BsExclamationTriangle } from "react-icons/bs";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { TbInfoHexagon } from "react-icons/tb";

function ProductDetails() {
  return (
    <>
      <Header />
      <section className="w-full ">
        <div className="md:max-w-[1024px] mt-[64px] md:min-w-[960px] w-full mx-auto">
          <BreadCrump />
          <div className="flex w-full h-full md:p-0">
            {/* row1 */}
            <div className="h-full w-full md:w-[41.6666666667%] ">
              <div className="block md:hidden">
                <img
                  src="./src/assets/pics/majazi.png"
                  alt=""
                  className="w-full  h-[310px] border mb-4 "
                />
                <p className=" text-xs text-divarFontHover my-4 px-4">
                  <IoIosArrowForward className="inline-block ml-2" />
                  آباژور
                </p>
              </div>
              <div className="px-4 md:px-0">
                <h2 className="text-[24px] ">دوچرخه برند بایسیکل</h2>
                <h3 className="text-divarFontHover pb-4 pt-2">
                  دقایقی پیش در تهران، تهرانپارس شرقی
                </h3>
                <button className=" relative w-full pr-6 border-y py-3 text-start">
                  <BsExclamationTriangle className="absolute right-0 top-4 scale-110 fill-divarFontHover" />
                  زنگ خطرهای قبل از معامله
                  <IoIosArrowBack className="absolute left-0 top-4 fill-divarFontHover" />
                </button>
                <form
                  action=""
                  className=" justify-between my-4 hidden md:flex"
                >
                  <div className="*:min-w-[96px] *:w-[126.6px] *:h-[40px] *:rounded-md *:px-4 *:font-medium  ">
                    <button className="bg-divarFontRed text-white ml-2">
                      اطلاعات تماس
                    </button>
                    <button className="text-divarFont hover:text-divarFontHover border border-divarFontHover hover:bg-slate-100 text-center ">
                      چت
                    </button>
                  </div>
                  <div className="flex items-center gap-5 *:scale-125 ">
                    <button>
                      <CiBookmark />
                    </button>
                    <button>
                      <IoShareSocialOutline />
                    </button>
                  </div>
                </form>
                <table className="w-full ">
                  <tr className="flex justify-between border-b py-2">
                    <td className="text-divarFontHover">وضعیت</td>
                    <td>در حد نو</td>
                  </tr>
                  <tr className="flex justify-between border-b py-2">
                    <td className="text-divarFontHover">مایل به معاوضه</td>
                    <td>نیستم</td>
                  </tr>
                  <tr className="flex justify-between border-b py-2">
                    <td className="text-divarFontHover">قیمت</td>
                    <td>۳٬۱۰۰٬۰۰۰ تومان</td>
                  </tr>
                </table>
                <p className="text-lg mt-6"> توضیحات</p>
                <p>
                  باند مادر سالم سالم ب شرط تست صداوکیفیت یکبارم تعمیر نشده همه
                  لوازم فابریکه
                </p>
                <div className="md:hidden mt-12">
                  <p className="relative w-full">
                    بازخورد شما دربارهٔ این آگهی چیست؟
                    <span className=" absolute left-0 top-1">
                      <button className="inline-block mx-4 first:scale-125 hover:bg-gray-100 rounded-full p-[5px]">
                        <AiOutlineLike />
                      </button>
                      <button className="inline-block mx-4 last:scale-125 hover:bg-gray-100 rounded-full p-[5px]">
                        <AiOutlineDislike />
                      </button>
                    </span>
                  </p>
                  <button className=" relative w-full pr-6 border-b py-3 text-divarFontHover mt-4 text-start">
                    <TbInfoHexagon className="absolute right-0 top-4 scale-110" />
                    گزارش کلاهبرداری و رفتار مشکوک
                    <IoIosArrowBack className="absolute left-0 top-4 fill-divarFontHover" />
                  </button>
                </div>
              </div>
            </div>
            {/* row2 */}
            <div className=" h-full w-1/2 mr-[8.3333333333%] hidden md:block">
              <picture className=" flex flex-wrap px-2">
                <img
                  src="./src/assets/pics/majazi.png"
                  alt=""
                  className="w-full h-[366px]  rounded-md bg-white border mb-4"
                />
                <img src="./src/assets/pics/majazi.png" alt="" />
                <img src="./src/assets/pics/majazi.png" alt="" />
              </picture>
              <textarea
                name=""
                id=""
                placeholder="یادداشت شما ... "
                className="outline-none border border-borderColor rounded-md mt-4 w-full h-[120px] p-2"
              ></textarea>
              <p className=" text-divarFontHover text-xs">
                یادداشت تنها برای شما قابل دیدن است و پس از حذف آگهی، پاک خواهد
                شد.
              </p>
              <img src="./src/assets/pics/map.png" alt="" className=" my-8" />
              <p className="relative w-full">
                بازخورد شما دربارهٔ این آگهی چیست؟
                <span className=" absolute left-0 top-1">
                  <button className="inline-block mx-4 first:scale-125 hover:bg-gray-100 rounded-full p-[5px]">
                    <AiOutlineLike />
                  </button>
                  <button className="inline-block mx-4 last:scale-125 hover:bg-gray-100 rounded-full p-[5px]">
                    <AiOutlineDislike />
                  </button>
                </span>
              </p>
              <button className=" relative w-full pr-6 border-b py-3 text-divarFontHover mt-4 text-start">
                <TbInfoHexagon className="absolute right-0 top-4 scale-110" />
                گزارش کلاهبرداری و رفتار مشکوک
                <IoIosArrowBack className="absolute left-0 top-4 fill-divarFontHover" />
              </button>
            </div>
          </div>
          <Footer />
          {/* footer menu mobile */}
          <div className="w-full h-16 md:hidden"></div>
          <div className=" *:w-[183px] *:h-[40px] *:rounded-md *:px-4 *:font-medium fixed bottom-0 w-full flex justify-around items-start py-3 bg-white z-10 border-t md:hidden">
            <button className="bg-divarFontRed text-white ml-2">
              اطلاعات تماس
            </button>
            <button className="text-divarFont hover:text-divarFontHover border border-divarFontHover hover:bg-slate-100 text-center ">
              چت
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

export default ProductDetails;
