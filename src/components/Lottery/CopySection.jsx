import CopyToClipboard from "react-copy-to-clipboard";
import { CopyIcon } from "../UI/icons";
import { useSelector } from "react-redux";
import { useState } from "react";
import WebApp from "@twa-dev/sdk";

export default function CopySection() {
  const [copied, setCopied] = useState(false);
  const url = useSelector((state) => state.user.info.url);

  return (
    <div className="absolute z-2 w-full h-1/2 flex items-center justify-center flex-col px-6 max-h-660:px-2 gap-2">
      <h4 className="text-[15px] text-center max-h-660:text-[12px]">
        Invite a friend who will buy this ticket and get $9.00 instantly
      </h4>
      <CopyToClipboard text={url}>
        <div
          className="w-full bg-white rounded-[27px] flex items-center justify-between"
          onClick={() => {
            WebApp.HapticFeedback.impactOccurred("medium");
            setCopied(true);
          }}
        >
          <div className="copy text-[10px] p-2 py-3 max-w-[70%]">{url}</div>

          <div className="button-gradient flex items-center justify-center h-full rounded-[27px] px-4 text-[10px] text-black">
            {copied ? "Copied" : <CopyIcon />}
          </div>
        </div>
      </CopyToClipboard>
      <h4 className="text-[10px] text-center">
        Each friend increases the chance of winning by +2%
      </h4>
    </div>
  );
}
