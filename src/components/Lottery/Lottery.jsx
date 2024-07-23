import BackgroundCard from "./BackgroundCard";
import CopySection from "./CopySection";
import LockedLottery from "./LockedLottery";
import Progress from "./Progress";

export default function Lottery({ lottery, bg }) {
  if (bg) {
    return <BackgroundCard />;
  }

  return (
    <>
      <div className="w-full h-full relative">
        <Progress />
        {/* TOP */}

        <div className="h-1/2 rounded-[23px] border-2 border-white border-b-[0px] bg-[#0F1511] flex items-center justify-center flex-col pb-8 ">
          <h2 className="history-plus-gradient text-[20px]">{lottery.name}</h2>
          <h4 className="text-[15px]">Your participation is confirmed!</h4>
          <h4 className="history-plus-gradient">
            Today in the lottery:{" "}
            <span className="font-['Gilroy-900']">
              {lottery.prize.toFixed(0)} USD
            </span>
          </h4>
          <h4 className="text-[10px] mt-2 text-center px-4">
            The random bot will select several participants and send prizes to
            the balance automatically.
          </h4>
        </div>
        {/* BOTTOM */}
        <div className="h-1/2 rounded-[23px] border-2 border-white border-t-[0px] bg-[#0F1511] pt-2 z-0 ">
          <img
            src="/right-bg.png"
            alt=""
            className="absolute right-0 bottom-0 h-1/2 z-1"
          />
          <img
            src="/left-bg.png"
            alt=""
            className="absolute left-0 bottom-0 h-1/2 z-1"
          />
          <CopySection />
        </div>
        {lottery.status == "locked" && <LockedLottery lottery={lottery} />}
      </div>
    </>
  );
}
