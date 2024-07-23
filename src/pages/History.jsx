import { useSelector } from "react-redux";
import HistoryItem from "../components/History/HistoryItem";
import { useEffect } from "react";
import gsap from "gsap";

export default function History() {
  const transactions = useSelector((state) => state.user.info.transactions);
  useEffect(() => {
    const anim = gsap.to("#history-section", { opacity: 1, translateX: "0" });
    return () => anim.kill();
  }, []);

  return (
    <div className="w-full text-center h-full">
      <h1 className="text-[20px]">History</h1>
      <div
        style={{ height: "calc(100% - 48px)" }}
        id="history-section"
        className="py-4 px-[18px] w-full flex flex-col gap-[10px] overflow-y-auto mt-2"
      >
        {transactions.map((transaction) => (
          <HistoryItem
            key={transaction.name + Math.random() * 100}
            transaction={transaction}
          />
        ))}
      </div>
    </div>
  );
}
