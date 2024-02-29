import { FaTwitter } from "react-icons/fa";
import { PiInstagramLogoFill } from "react-icons/pi";
import { FaLinkedin } from "react-icons/fa";
import { SiAparat } from "react-icons/si";
function SocialPages() {
  return (
    <div className="flex w-[240px] justify-around p-5 gap-[30px]">
      <FaTwitter className="fill-divarfont scale-110 hover:cursor-pointer hover:fill-black" />
      <PiInstagramLogoFill className="fill-divarfont scale-110 hover:cursor-pointer hover:fill-black" />
      <FaLinkedin className="fill-divarfont scale-110 hover:cursor-pointer hover:fill-black" />
      <SiAparat className="fill-divarfont scale-110 hover:cursor-pointer hover:fill-black" />
    </div>
  );
}

export default SocialPages;
