import Button from "../UI/Button";
import { LockIcon } from "../UI/icons";

export default function LockedLottery({ lottery }) {
  return (
    <div className="w-full h-full top-0 absolute z-3 h-full">
      <div className="h-1/2 rounded-[23px] border-2 border-white border-b-[0px] bg-[#0F15119E] flex items-center justify-center flex-col pb-8 text-center text-[20px] px-8 locked-lottery max-h-660:px-2 max-h-660:text-[12px]">
        TAKE PART IN THE LOTTERY AND MAKE A PROFIT
      </div>
      <div className="h-1/2 rounded-[23px] border-2 border-white border-t-[0px] bg-[#0F15119E] pt-2 w-full locked-lottery flex items-center justify-center px-6">
        <Button>BUY {lottery.price} $</Button>
      </div>
      <div className="z-4 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-[50%] lock-icon w-[100px] h-[100px] max-h-660:w-[70px] max-h-660:h-[70px] flex items-center justify-center">
        <LockIcon />
      </div>
    </div>
  );
}
