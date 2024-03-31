import { FaTwitter } from "react-icons/fa";
import { PiInstagramLogoFill } from "react-icons/pi";
import { FaLinkedin } from "react-icons/fa";
import { SiAparat } from "react-icons/si";
function SocialPages(style: { className: any }) {
  return (
    <div
      className={`flex ${style.className} justify-around p-5 *:scale-110 *:fill-divarFont  `}
    >
      <FaTwitter className="  hover:cursor-pointer hover:fill-divarFontHover" />
      <PiInstagramLogoFill className="-  hover:cursor-pointer hover:fill-divarFontHover" />
      <FaLinkedin className="-  hover:cursor-pointer hover:fill-divarFontHover" />
      <SiAparat className="-  hover:cursor-pointer hover:fill-divarFontHover" />
    </div>
  );
}

export default SocialPages;
