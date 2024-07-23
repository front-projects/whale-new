import { Outlet } from "react-router-dom";

import Navigation from "../components/Navigation/Navigation";

export default function Layout() {
  return (
    <div
      className="w-screen h-screen flex flex-col items-center justify-between bg-gradient-to-r from-[#050505] to-[#82EB67]"
      id="main-wrapper"
    >
      <main className="w-full mt-[20px] rounded-t-[24px]">
        <div style={{ height: "calc(100vh - 105px)" }} className="pt-[18px]">
          <Outlet />
        </div>

        <Navigation />
      </main>
    </div>
  );
}
