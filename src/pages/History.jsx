import { useSelector } from "react-redux";
import HistoryItem from "../components/History/HistoryItem";
import { useEffect } from "react";
import gsap from "gsap";
import { groupTransactionsByDate } from "../util/front/groupTransactionsByDate";

export default function History() {
  const transactions = useSelector((state) => state.user.info.transactions);
  console.log(transactions);
  useEffect(() => {
    const anim = gsap.to("#history-section", {
      opacity: 1,
      translateX: "0",
      force3D: true,
    });
    return () => anim.kill();
  }, []);
  const groupedTransactions = groupTransactionsByDate(transactions);

  return (
    <div className="w-full text-center h-full">
      <h1 className="text-[20px]">History</h1>
      <div
        style={{ height: "calc(100% - 48px)" }}
        id="history-section"
        className="py-4 px-[18px] w-full flex flex-col gap-[10px] overflow-y-auto mt-2"
      >
        {!transactions || transactions.length === 0 ? (
          <div className="text-center">No transactions yet...</div>
        ) : (
          Object.keys(groupedTransactions).map((date) => (
            <div key={date}>
              <h3 className="font-bold w-full text-center py-2 text-[15px]">
                {date}
              </h3>
              <div className="flex flex-col gap-[15px]">
                {groupedTransactions[date].map((item, index) => (
                  <HistoryItem
                    key={index + "s" + Math.random() * 100}
                    transaction={item}
                  />
                ))}
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
