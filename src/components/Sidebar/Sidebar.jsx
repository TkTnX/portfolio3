import { Link } from "react-router";
import { NAV_CONFIG } from "./configs/nav.config";
import { SOCIALS_CONFIG } from "./configs/socials.config";

export const Sidebar = () => {
  return (
    <div className="md:h-full lg:w-[400px] bg-main px-4 py-10 flex flex-col md:justify-between items-center">
      <Link to="/" className="text-primary text-5xl ">
        TIMUR.DEV
      </Link>
      <div className="flex md:flex-col mt-2 md:mt-0 gap-4 md:gap-10 justify-center flex-wrap sm:flex-nowrap">
        {NAV_CONFIG.map((item) => (
          <Link
            to={item.link}
            key={item.link}
            className="font-bold text-base md:text-xl last:text-primary hover:opacity-80 transition first:hidden first:sm:inline"
          >
            {item.name.toUpperCase()}
          </Link>
        ))}
      </div>
      <div className="w-full hidden md:block">
        <div className="flex items-center gap-7 border-t border-t-gray-300/10 justify-center pt-4 ">
          {SOCIALS_CONFIG.map((social) => (
            <a className="hover:opacity-80 transition" href={social.link}>
              <social.icon size={35} color="#fff" />
            </a>
          ))}
        </div>
        <p className="text-sm opacity-50 mt-4 text-center">2025 | TIMUR</p>
      </div>
    </div>
  );
};
