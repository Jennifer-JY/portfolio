import { Outlet } from "react-router-dom";
import { Header } from "./Header";

export default function Layout() {
  return (
    <div className="flex flex-col px-4">
      <Header />
      <Outlet />
    </div>
  );
}
