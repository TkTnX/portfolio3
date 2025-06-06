import { Link, useLocation } from "react-router";
import { PortfolioListItemDeleteButton } from "./PortfolioListItemDeleteButton";
export const PortfolioItem = ({ project }) => {
  const location = useLocation();

  return (
    <div className="group relative">
      {location.pathname.includes("admin") && (
        <PortfolioListItemDeleteButton projectId={project.id} />
      )}
      <Link
        to={`/portfolio/${project.id}`}
        className="  block w-full h-full absolute inset-0 z-10"
      />
      <img
        src={project.img}
        alt={project.title}
        className="w-full h-full object-cover "
      />
      <div className="absolute inset-0 bg-bg/80 text-center h-full flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition">
        <h5 className="text-2xl">{project.title}</h5>
        <p className="text-sm">{project.description.slice(0, 100)}...</p>
      </div>
    </div>
  );
};
