import { useSelector } from "react-redux";
import TopUserItem from "../components/TopUsers/TopUserItem";

export default function TopUsers() {
  const users = useSelector((state) => state.users.users);

  return (
    <div className="w-full h-full text-center">
      <h1 className="text-[20px]">Top 100 users</h1>
      <div
        style={{ height: "calc(100% - 48px)" }}
        className="py-4 px-[18px] w-full flex flex-col gap-[10px] overflow-y-auto mt-2"
      >
        {users.map((user) => (
          <TopUserItem key={user.name + Math.random() * 100} user={user} />
        ))}
      </div>
    </div>
  );
}
