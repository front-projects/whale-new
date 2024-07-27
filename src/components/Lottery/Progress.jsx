import { BounceLoader } from "react-spinners";

export default function Progress({ lottery }) {
  return (
    <div className="absolute top-1/2 left-1/2 flex items-center justify-center -translate-x-1/2 -translate-y-1/2 w-full gap-2">
      <h4 className="text-[10px] text-white/50">lottery is in progress...</h4>
      {/* <div className="w-[63px] h-[63px] bg-[#82EB671C] rounded-[50%] flex items-center justify-center">
        <div className="w-[53px] h-[53px] bg-[#82EB671C] rounded-[50%] flex items-center justify-center">
          <div className="w-[41px] h-[41px] bg-[#82EB677D] rounded-[50%] flex items-center justify-center">
            <div className="w-[27px] h-[27px] bg-[#82EB67] rounded-[50%] flex items-center justify-center"></div>
          </div>
        </div>
      </div> */}
      {lottery.investModelStatus !== "AVAILABLE" && (
        <BounceLoader color="#82EB67" size={40} />
      )}
    </div>
  );
}
