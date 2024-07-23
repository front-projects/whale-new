// import { useState } from "react";

import Balance from "../components/Lottery/Balance";
import HowToEarn from "../components/Lottery/HowToEarn";
import Main from "../components/Lottery/Main";

export default function Lottery() {
  // const [isExploding, setIsExploding] = useState(false);
  return (
    // <div>
    //   <button onClick={() => setIsExploding(true)}>Click</button>
    //   {isExploding && <ConfettiExplosion />}
    // </div>
    <div className="w-full h-full px-[18px] flex flex-col gap-4 pb-4 max-h-670:gap-1">
      <HowToEarn />
      <Main />
      <Balance />
    </div>
  );
}
