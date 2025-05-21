import { Link } from "react-router";
import { ADMIN_CONFIG } from "./admin.config";

export const AdminHeader = () => {
  return (
    <header className="px-4 py-4 bg-main h-full flex items-center justify-between">
      <Link to="/" className="text-primary">
        TIMUR.DEV
      </Link>
      <div className="flex items-center gap-4">
        {ADMIN_CONFIG.map((item) => (
          <Link to={item.link} className="hover:text-primary transition">
            {item.name}
          </Link>
        ))}
      </div>
    </header>
  );
};
