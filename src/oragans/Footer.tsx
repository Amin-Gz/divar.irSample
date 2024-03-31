import SocialPages from "../molecule/SocialPages";

function Footer() {
  return (
    <div className="  mt-16 md:mt-32 w-full flex flex-col md:flex-row items-center justify-between">
      <div className="flex flex-col md:flex-row items-center gap-2">
        <img
          src="./src/assets/pics/divarLogo.svg"
          alt=""
          className="w-[32px] h-[32px] grayscale"
        />
        <ul className="flex  text-divarFont text-[10px] *:border-l *:px-2">
          <li className="hover:text-divarFontHover">
            <a href="#">دربارهٔ دیوار</a>
          </li>
          <li className="hover:text-divarFontHover">
            <a href="#">پشتیبانی و قوانین</a>
          </li>
          <li className="hover:text-divarFontHover">
            <a href="#">اتاق خبر</a>
          </li>
          <li className="hover:text-divarFontHover">
            <a href="#">کسب‌وکارها</a>
          </li>
          <li className="border-none hover:text-divarFontHover">
            <a href="#">دریافت برنامه</a>
          </li>
        </ul>
      </div>
      <SocialPages className="w-[160px] gap-[16px]" />
    </div>
  );
}

export default Footer;
