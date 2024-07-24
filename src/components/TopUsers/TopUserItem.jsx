import { TopUserIcon } from "../UI/icons";

export default function TopUserItem({ user }) {
  return (
    <div className="w-full top-user-gradient rounded-[27px] flex items-center justify-between px-4 text-[#2E2E2E] py-[16px] top-user">
      <div className="flex items-center gap-[9px]">
        <TopUserIcon />
        <h4 className="text-[18px] ">{user.name}</h4>
      </div>
      <h1 className="text-[25px]">{user.earnedAmount.toFixed(2)}$</h1>
    </div>
  );
}
