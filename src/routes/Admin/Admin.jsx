import { Link } from "react-router";

export const Admin = () => {
  return (
    <div className="px-4">
      <h2 className="text-7xl mt-2 text-center">Админ-панель</h2>
      <div className="flex items-center gap-10 justify-center mt-10">
        <Link
          to="/admin/projects"
          className="text-2xl hover:text-primary transition"
        >
          Проекты
        </Link>
        <Link
          to="/admin/technologies"
          className="text-2xl hover:text-primary transition"
        >
          Технологии
        </Link>
        <Link
          to="/admin/reviews"
          className="text-2xl hover:text-primary transition"
        >
          Отзывы
        </Link>
      </div>
    </div>
  );
};
