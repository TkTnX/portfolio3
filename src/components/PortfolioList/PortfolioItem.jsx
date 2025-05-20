import { Link } from "react-router";

export const PortfolioItem = ({ project }) => {
  return (
    //   TODO: В будущем тут project.id
    <Link
      to={`/portfolio/${project.title}`}
      className="relative group block w-full h-full"
    >
      <img
        src={project.img}
        alt={project.title}
        className="w-full h-full object-cover "
      />
      <div className="absolute inset-0 bg-bg/80 text-center h-full flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition">
        <h5 className="text-2xl">{project.title}</h5>
        <p className="text-sm">{project.description.slice(0, 100)}...</p>
      </div>
    </Link>
  );
};
