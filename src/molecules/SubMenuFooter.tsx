function SubMenuFooter(style: any) {
  return (
    <ul className={`flex flex-wrap text-divarFont ${style.class} `}>
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
  );
}

export default SubMenuFooter;
