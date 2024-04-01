import SocialPages from "../molecules/SocialPages";
import Enamad from "../molecules/Enamad";

function FpFooter() {
  return (
    <div className="flex flex-col items-center w-full ">
      <Enamad />
      <SocialPages className="w-[240px] gap-[30px]" />
    </div>
  );
}

export default FpFooter;
