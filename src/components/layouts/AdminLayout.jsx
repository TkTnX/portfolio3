import { Outlet } from "react-router";
import { AdminHeader } from "../AdminHeader/AdminHeader";

export const AdminLayout = () => {
  return (
    <main className=" ">
      <AdminHeader />

      <Outlet />
    </main>
  );
};
