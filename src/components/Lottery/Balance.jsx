import { useSelector } from "react-redux";
import Button from "../UI/Button";
import { BalanceIcon } from "../UI/icons";
import WebApp from "@twa-dev/sdk";
import { PAYMENT_URL } from "../../util/back/requests";

export default function Balance() {
  const balance = useSelector((state) => state.user.info.balanceAmount);
  const token = useSelector((state) => state.auth.token);
  const params = new URLSearchParams(window.location.search);
  const login = params.get("data");
  const pass = params.get("pmain");
  const lang = params.get("lang");

  const moneyDeposit = () => {
    WebApp.HapticFeedback.impactOccurred("light");
    window.location.href = `${PAYMENT_URL}?mode=deposit&data=${login}&login=${login}&pass=${pass}&lang=${lang}`;
  };
  const moneyWithdraw = () => {
    WebApp.HapticFeedback.impactOccurred("light");
    window.location.href = `${PAYMENT_URL}?mode=withdraw&balance=${balance}&data=${token}&login=${login}&pass=${pass}&lang=${lang}`;
  };

  return (
    <div className="balance rounded-[27px] history-gradient flex items-center justify-center w-full">
      <div className="flex items-center justify-between w-full h-full">
        <div className="w-[60%] justify-center items-center">
          <div className="flex items-center gap-2 w-full justify-center">
            <h4 className="text-[25px]">Balance:</h4>
            <BalanceIcon />
          </div>
          <h1 className="w-full text-center history-plus-gradient text-[26px]">
            {balance.toFixed(2)} $
          </h1>
        </div>

        <div className="w-[40%] h-full">
          <Button
            className="w-full h-1/2 rounded-br-[0px]"
            onClick={moneyDeposit}
          >
            Deposit
          </Button>
          <button
            className="bg-white rounded-[27px] text-[#2E2E2E] rounded-tr-[0px] font-['Gilroy-900'] w-full h-1/2"
            onClick={moneyWithdraw}
          >
            Withdr
          </button>
        </div>
      </div>
    </div>
  );
}
