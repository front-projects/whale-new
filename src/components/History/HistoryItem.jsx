import { DollarIcon } from "../UI/icons";

export default function HistoryItem({ transaction }) {
  return (
    <div className="rounded-[27px] history-gradient flex items-center justify-between px-4 text-[20px]">
      <div className="flex items-center gap-[10px] py-3">
        <DollarIcon />
        <h4>{transaction.name}</h4>
      </div>
      <div
        className={`${transaction.type == "plus" ? "history-plus-gradient" : "history-minus-gradient"}`}
      >
        {transaction.type == "plus" ? "+" : "-"}
        {transaction.price.toFixed(2)} $
      </div>
    </div>
  );
}
// /* Rectangle 4567 */

// position: absolute;
// width: 354px;
// height: 73px;
// left: 18px;
// top: 173px;

// background: radial-gradient(37.1% 82.68% at 0% 100%, rgba(255, 255, 255, 0.42) 0%, rgba(255, 255, 255, 0) 100%), rgba(255, 255, 255, 0.15);
// backdrop-filter: blur(24.55px);
// /* Note: backdrop-filter has minimal browser support */
// border-radius: 27px;
