import MpHeader from "../oragans/Header";

function PageNotFound() {
  return (
    <>
      <MpHeader />
      <section className=" w-screen m-0 p-0 flex flex-col justify-start items-center text-divarFont">
        <img
          src="./src/assets/pics/error404.png"
          className="h-[253px] mb-[40px]"
          alt=""
        />
        <h2 className="mb-[25px]  text-[24px] ">این راه به جایی نمی‌رسد!</h2>
        <p className="leading-10">به نظر آدرس را اشتباه وارد کرده‌اید.</p>
        <p>
          برای پیدا کردن مسیر درست می‌توانید سری به
          <a href="/" className="text-divarFontRed">
            {" "}
            صفحهٔ اول دیوار
          </a>{" "}
          بزنید.
        </p>
      </section>
    </>
  );
}

export default PageNotFound;
