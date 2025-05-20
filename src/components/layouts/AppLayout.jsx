import { Outlet } from "react-router";
import { Sidebar } from "../Sidebar";

export const AppLayout = () => {
  return (
    <main className="flex flex-col md:flex-row h-full md:h-auto ">
      <Sidebar />

      <Outlet />
    </main>
  );
};
