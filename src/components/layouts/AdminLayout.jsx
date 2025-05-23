import { Outlet } from "react-router";
import { AdminHeader } from "../AdminHeader/AdminHeader";
import { useAdminStore } from "../../stores/adminStore";
import { AuthForm } from "../AdminForms";

export const AdminLayout = () => {
  const { isAuthed } = useAdminStore();

  if (!isAuthed) return <AuthForm />;

  return (
    <main className=" ">
      <AdminHeader />

      <Outlet />
    </main>
  );
};
