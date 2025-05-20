import { Link } from "react-router";

export const PortfolioItem = ({ project }) => {
    return (
    //   TODO: В будущем тут project.id
    <Link to={`/portfolio/${project.title}`} className="relative group">
      <img src={project.img} alt={project.title} className="w-full h-full" />
      <div className="absolute inset-0 bg-bg/20">
        <h5>{project.title}</h5>
        <p>{project.description.slice(0, 50)}...</p>
      </div>
    </Link>
  );
};
