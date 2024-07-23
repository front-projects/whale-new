import { useEffect } from "react";
import Lottery from "./Lottery";
import gsap from "gsap";

export default function BackgroundLottery() {
  // useEffect(() => {
  //   // const timeline = gsap.timeline({ defaults: { duration: 0.3 } });
  //   const anim = gsap.to(".card-for-bg", {
  //     translateX: 0,
  //     stagger: { amount: 0.3, from: "back" },
  //     delay: 0.3,
  //   });
  //   return () => anim.kill();
  // }, []);

  return (
    <>
      <div
        style={{ width: "calc(100% - 60px)" }}
        className="absolute left-[60px] h-full -translate-x-[60px] card-for-bg"
      >
        <Lottery bg />
      </div>
      <div
        style={{ width: "calc(100% - 60px)" }}
        className="absolute left-[40px] h-full -translate-x-[40px] card-for-bg"
      >
        <Lottery bg />
      </div>
      <div
        style={{ width: "calc(100% - 60px)" }}
        className="absolute left-[20px] h-full -translate-x-[20px] card-for-bg"
      >
        <Lottery bg />
      </div>
    </>
  );
}
