import { DollarIcon } from "../UI/icons";

export default function HistoryItem({ transaction }) {
  return (
    <div
      className={`relative rounded-[27px] history-gradient flex items-center justify-between px-4 text-[16px]  
        ${transaction.transactionType == "INCOME" && transaction.incomeType == "MAIN" && "shadow-[0px_4px_5.5px_0px_#82EB67_inset]"}
        ${transaction.transactionType == "INCOME" && transaction.incomeType == "REGISTRATION" && "shadow-[0px_4px_5.5px_0px_#7B1FA2_inset]"}
        ${transaction.transactionType == "INCOME" && transaction.incomeType == "REFERRAL" && "shadow-[0px_4px_5.5px_0px_#64785f_inset]"}
         ${transaction.transactionType == "INCOME" && transaction.incomeType == "ADMIN" && "shadow-[0px_4px_5.5px_0px_#ffff00_inset]"}
         ${transaction.transactionType == "INCOME" && transaction.incomeType == "LOST" && "shadow-[0px_4px_5.5px_0px_#82EB67_inset] opacity-[.5]"}
        ${transaction.transactionType == "DEPOSIT" && "shadow-[0px_4px_5.5px_0px_#168BD8_inset]"}
        ${transaction.transactionType == "WITHDRAW" && "shadow-[0px_4px_5.5px_0px_#FF5C00_inset]"}
        ${transaction.transactionType == "PURCHASE" && "shadow-[0px_4px_5.5px_0px_#C22A2A_inset]"} `}
    >
      {transaction.transactionType == "INCOME" &&
        transaction.incomeType == "LOST" && (
          <div className="absolute left-0 flex justify-center h-full top-[4px] w-full z-1 text-sm">
            Buy a lottery to get the reward
          </div>
        )}
      <div className="flex items-center gap-[10px] py-3 max-w-[70%] ">
        <div>
          <DollarIcon />
        </div>
        <h4 className="text-[12px]">{transaction.description}</h4>
      </div>
      <div
        className={`${
          transaction.transactionType !== "PURCHASE" &&
          transaction.transactionType !== "WITHDRAW"
            ? "history-plus-gradient"
            : "history-minus-gradient"
        } `}
      >
        {transaction.transactionType !== "PURCHASE" &&
        transaction.transactionType !== "WITHDRAW"
          ? "+"
          : "-"}
        {transaction.transactionAmount.toFixed(2)} $
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
