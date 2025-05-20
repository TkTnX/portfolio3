import { Link, useLocation } from "react-router";
import { NAV_CONFIG } from "./configs/nav.config";

export const SidebarNav = () => {
  const location = useLocation();
  return (
    <div className="flex md:flex-col mt-2 md:mt-0 gap-4 md:gap-10 justify-center flex-wrap sm:flex-nowrap">
      {NAV_CONFIG.map((item) => (
        <Link
          to={item.link}
          key={item.link}
          className={`font-bold text-base md:text-xl last:text-primary hover:opacity-80 transition first:hidden first:sm:inline ${
            location.pathname === item.link ? "opacity-60" : ""
          }`}
        >
          {item.name.toUpperCase()}
        </Link>
      ))}
    </div>
  );
};
