import { Link } from "react-router";
import { SOCIALS_CONFIG } from "./configs/socials.config";
import { SidebarNav } from "./SidebarNav";

export const Sidebar = () => {
  return (
    <div className=" lg:w-[400px] bg-main px-4 py-10 flex flex-col md:justify-between items-center md:h-screen md:sticky top-0 left-0">
      <Link to="/" className="text-primary text-5xl ">
        TIMUR.DEV
      </Link>
      <SidebarNav />
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
