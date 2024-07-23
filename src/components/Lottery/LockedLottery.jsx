import { useState } from "react";

import Button from "../UI/Button";
import { LockIcon } from "../UI/icons";
import Modal from "../UI/Modal";
import { BeatLoader } from "react-spinners";

import { useSelector } from "react-redux";
import { buyLottery } from "../../util/back/requests";

export default function LockedLottery({ lottery }) {
  const [isOpen, setIsOpen] = useState();
  const [isLoading, setIsLoading] = useState();
  const [isError, setIsError] = useState();
  const [isSubmited, setIsSubmited] = useState();
  const balance = useSelector((state) => state.user.info.balance);

  const openModal = () => {
    setIsOpen(true);
  };
  const unavailible = balance < lottery.price;

  const submitBuy = async () => {
    setIsLoading(true);
    const response = await buyLottery();
    setIsLoading(false);
    if (response) {
      setIsSubmited(true);
    } else {
      setIsError(true);
    }
  };

  return (
    <>
      <div className="w-full h-full top-0 absolute z-3 h-full ">
        <div className="h-1/2 rounded-[23px] border-2 border-white border-b-[0px] bg-[#0F1511]/95 flex items-center justify-center flex-col pb-8 text-center text-[20px] px-8 max-h-660:px-2 max-h-660:text-[12px]">
          TAKE PART IN THE LOTTERY AND MAKE A PROFIT
        </div>
        <div className="h-1/2 rounded-[23px] border-2 border-white border-t-[0px] bg-[#0F1511]/95 pt-2 w-full  flex items-center justify-center px-6">
          <Button onClick={openModal}>BUY {lottery.price} $</Button>
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-[50%] lock-icon w-[100px] h-[100px] max-h-660:w-[70px] max-h-660:h-[70px] flex items-center justify-center">
          <LockIcon />
        </div>
      </div>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        {unavailible ? (
          <div className="flex flex-col items-center gap-4">
            <div className="text-center">
              Not enough money to buy the lottery, top up your balance
            </div>
            <Button className="w-1/2" onClick={() => setIsOpen(false)}>
              Ok
            </Button>
          </div>
        ) : (
          <div className="flex flex-col gap-4">
            {!isError && !isSubmited && (
              <div>Do you really want to buy {lottery.name} ?</div>
            )}
            {isError && !isLoading && (
              <div>Error buying a lottery, try again later</div>
            )}
            {isSubmited && !isLoading && !isError && (
              <div className="text-[18px]">
                Congratulations! You have successfully purchased - {""}
                {lottery.name}
              </div>
            )}

            {isLoading ? (
              <div className="w-full flex items-center text-[20px] justify-center">
                <BeatLoader size={20} color="#82eb67" />
              </div>
            ) : (
              <div className="flex gap-2 text-[16px] justify-center">
                {!isError && !isSubmited && (
                  <Button onClick={submitBuy} className="w-1/2">
                    Yes
                  </Button>
                )}
                <button
                  onClick={() => {
                    setIsError(false);
                    setIsOpen(false);
                  }}
                  className="bg-white rounded-[27px] text-[#2E2E2E] font-['Gilroy-900'] w-1/2 h-[56px]"
                >
                  Cancel
                </button>
              </div>
            )}
          </div>
        )}
      </Modal>
    </>
  );
}
