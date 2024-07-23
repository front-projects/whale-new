import Lottery from "./Lottery";

export default function BackgroundLottery() {
  return (
    <>
      <div
        style={{ width: "calc(100% - 60px)" }}
        className="absolute left-[60px] h-full"
      >
        <Lottery bg />
      </div>
      <div
        style={{ width: "calc(100% - 60px)" }}
        className="absolute left-[40px] h-full"
      >
        <Lottery bg />
      </div>
      <div
        style={{ width: "calc(100% - 60px)" }}
        className="absolute left-[20px] h-full"
      >
        <Lottery bg />
      </div>
    </>
  );
}
