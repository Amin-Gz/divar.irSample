import SocialPages from "../molecules/SocialPages";
import SubMenuFooter from "../molecules/SubMenuFooter";

function Footer() {
  return (
    <div className="  mt-16 md:mt-32 w-full flex flex-col md:flex-row items-center justify-between">
      <div className="flex flex-col md:flex-row items-center gap-2">
        <img
          src="./src/assets/pics/divarLogo.svg"
          alt=""
          className="w-[32px] h-[32px] grayscale"
        />
        <SubMenuFooter class="text-[10px] *:border-l *:px-2" />
      </div>
      <SocialPages className="w-[160px] gap-[16px]" />
    </div>
  );
}

export default Footer;
