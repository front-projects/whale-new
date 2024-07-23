import { Navigate, Outlet } from "react-router-dom";

import Navigation from "../components/Navigation/Navigation";
import { useSelector } from "react-redux";

export default function Layout() {
  const user = useSelector((state) => state.user);
  const users = useSelector((state) => state.users);
  if (user.status !== "succeeded" || users.status !== "succeeded") {
    return <Navigate to="loading" />;
  }
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
