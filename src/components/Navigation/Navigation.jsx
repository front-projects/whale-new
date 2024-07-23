import { useLocation } from "react-router-dom";
import {
  HistoryIcon,
  HistoryIconActive,
  LotteryIcon,
  LotteryIconActive,
  TopIcon,
  TopIconActive,
} from "../UI/icons";
import NavItem from "./Nav-Item";

export default function Navigation() {
  const location = useLocation();
  const { pathname } = location;

  return (
    <nav className="w-screen h-[85px] mb-[15px] flex items-center justify-center">
      <div className="h-[70px] grid grid-cols-3 w-[95%] mb-[15px] border-[1px] border-white rounded-[71px] bg-[rgba(255,255,255,0.15)]">
        <NavItem to="top-users">
          {pathname.includes("top-users") ? <TopIconActive /> : <TopIcon />}
        </NavItem>
        <NavItem to="lottery">
          {pathname.includes("lottery") ? (
            <LotteryIconActive />
          ) : (
            <LotteryIcon />
          )}
        </NavItem>
        <NavItem to="history">
          {pathname.includes("history") ? (
            <HistoryIconActive />
          ) : (
            <HistoryIcon />
          )}
        </NavItem>
      </div>
    </nav>
  );
}
