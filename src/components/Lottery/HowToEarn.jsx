import { useEffect, useState } from "react";
import Button from "../UI/Button";
import { TouchIcon } from "../UI/icons";
import Modal from "../UI/Modal";
import WebApp from "@twa-dev/sdk";

export default function HowToEarn() {
  const [isOpen, setIsOpen] = useState();

  useEffect(() => {
    if (isOpen) {
      WebApp.BackButton.show();
      WebApp.BackButton.onClick(() => {
        setIsOpen(false);
      });
    } else {
      WebApp.BackButton.hide();
    }
    return () => WebApp.BackButton.hide();
  }, [isOpen]);
  return (
    <>
      <Button
        onClick={() => setIsOpen(true)}
        className="how-to-earn max-h-[63px] max-h-660:max-h-[40px]"
      >
        HOW TO EARN <TouchIcon />
      </Button>
      <Modal faq isOpen={isOpen} onClose={() => setIsOpen(false)}>
        How to earn menu
        <div className="w-1/2">
          <Button onClick={() => setIsOpen(false)}>Ok</Button>
        </div>
      </Modal>
    </>
  );
}
