import { Outlet } from "react-router-dom";
import { SideBar } from "./SideBar";

export function BlogLayout() {
  return (
    <div className="mt-6 flex gap-4">
      <SideBar />
      <div className="flex-1 font-sans">
        <Outlet />
      </div>
    </div>
  );
}
