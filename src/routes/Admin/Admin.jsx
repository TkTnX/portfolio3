import { Link } from "react-router";

export const Admin = () => {
  return (
    <div className="px-4">
      <h2 className="text-7xl mt-2 text-center">Админ-панель</h2>
      <Link to="/admin/projects">Проекты</Link>
    </div>
  );
};
