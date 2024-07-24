/* eslint-disable react/no-unescaped-entities */
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
        <div className="text-[24px]">How to earn ?</div>
        <div className="text-[14px] mt-4 flex flex-col gap-2 text-start px-1">
          <p>
            Welcome. We kindly ask you to read this text from beginning to end
            in order to understand the rules of the game and get maximum
            results. Thank you.{" "}
          </p>
          <h2>How the lottery works and how to get started: </h2>
          <p>
            Every day we give away large amounts of money to our players. By
            buying a ticket, you get a chance to win big money and receive
            passive income from users.
          </p>
          <p>
            To participate in the lottery, you need to buy a ticket. To do this,
            click on the "Deposit" button and top up your balance using
            cryptocurrency. Then buy a ticket.{" "}
          </p>
          <p>
            If you don't have cryptocurrency or you don't know how to do it,
            close the game and find the training article in the bot's start
            menu.
          </p>
          <p>
            After purchasing the ticket, your participation is confirmed. Every
            24 hours we update the pool of funds and activate the random
            distribution script. The system randomly selects a different number
            of participants and sends random amounts automatically.{" "}
          </p>
          <p>Example of winnings for different tickets:</p>
          <p>
            By buying a ticket for $15, you have a chance to win from $0.50 to
            $1000+ every day.{" "}
          </p>
          <p>
            By buying a ticket for $50, you have a chance to win from $4.00 to
            $12,000+ every day.{" "}
          </p>
          <p>
            By buying a ticket for $100, you have a chance to win from $8.00 to
            $20,000+ every day.{" "}
          </p>
          <p>
            By buying all the tickets at the same time, you participate in
            several lotteries at once. Logically, you can win more often.{" "}
          </p>
          <p>Basic concepts: </p>
          <p>- Each ticket is an independent lottery</p>
          <p>- The ticket is purchased once and remains active forever</p>
          <p>
            - You can buy different tickets and participate in different
            lotteries at the same time{" "}
          </p>
          <p>- The amount of money you can win is unlimited</p>
          <p>- You can increase the chance of winning by inviting users</p>
          <p>
            - You can get instant earnings if your users buy a ticket using your
            link
          </p>
          <p>
            - The cash prize is credited to the balance automatically in case of
            victory
          </p>
          <p>- The lottery is updated every 24 hours</p>
          <p>
            - After the purchase, you do not need to do anything to receive the
            winnings. Join our chat, follow the group and check out the game.
          </p>
          <p>How to increase the chance of winning and earn now: </p>
          <p>
            Each invited person using your referral link will increase your
            chance of winning by 2% in the general system.
          </p>
          <p>
            You can give your invitation link to your friends or random users,
            if people buy tickets, you will receive 60% of the ticket to your
            balance instantly. Also, if your friends start inviting other users,
            you will receive 8% and 2%% of their purchases too.
          </p>
          <p>
            This is not necessary to win and participate. However, this way you
            can return your investments and earn real money from the very first
            day. The more users you invite, the more passive income you can get.{" "}
          </p>
          <p>
            The more players and friends there are in the system, the bigger the
            prize pool and the more winnings you will receive.{" "}
          </p>
          <p>
            If you have any questions, write to the general chat or support.
          </p>
        </div>
        <div className="w-1/2">
          <Button className="mt-6" onClick={() => setIsOpen(false)}>
            Ok
          </Button>
        </div>
      </Modal>
    </>
  );
}
