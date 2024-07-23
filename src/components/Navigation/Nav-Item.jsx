import { NavLink, useLocation } from "react-router-dom";
import WebApp from "@twa-dev/sdk";

export default function NavItem({ children, to }) {
  const location = useLocation();
  const { pathname } = location;

  const setVibro = () => {
    WebApp.HapticFeedback.impactOccurred("soft");
  };

  return (
    <NavLink
      to={to}
      onClick={setVibro}
      className={`flex w-full h-full items-center justify-center`}
    >
      <span
        className={`${pathname.includes(to) ? "bg-white px-8 h-[51px] flex items-center justify-center rounded-[71px]" : ""}`}
      >
        {children}
      </span>
    </NavLink>
  );
}
