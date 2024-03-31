// import React from "react";

import SocialPages from "../molecule/SocialPages";
import Enamad from "../molecule/Enamad";

function FpFooter() {
  return (
    <div className="flex flex-col items-center w-full ">
      <Enamad />
      <SocialPages className="w-[240px] gap-[30px]" />
    </div>
  );
}

export default FpFooter;
