// import { useState } from "react";

import { useEffect, useLayoutEffect } from "react";
import Balance from "../components/Lottery/Balance";
import HowToEarn from "../components/Lottery/HowToEarn";
import Main from "../components/Lottery/Main";
import gsap from "gsap";

export default function Lottery() {
  useLayoutEffect(() => {
    const howAnim = gsap.to(".how-to-earn", {
      translateY: 0,
      opacity: 1,
      duration: 0.4,
    });
    const balanceAnim = gsap.to(".balance", {
      translateY: 0,
      opacity: 1,
      duration: 0.4,
    });
    const mainAnim = gsap.to(".main-menu", { translateX: 0, duration: 0.5 });
    return () => {
      howAnim.kill();
      balanceAnim.kill();
      mainAnim.kill();
      // timeline.kill();
    };
  }, []);

  return (
    <div className="w-full h-full px-[18px] flex flex-col gap-4 pb-4 max-h-670:gap-1">
      <HowToEarn />
      <Main />
      <Balance />
    </div>
  );
}
