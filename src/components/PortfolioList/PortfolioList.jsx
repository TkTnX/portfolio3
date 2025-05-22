import { PortfolioItem } from "./PortfolioItem";
import { useProjects } from "../../hooks/useProjects";
import { Skeleton } from "../ui/Skeleton";

export const PortfolioList = ({ className }) => {
  const { projects, error, loading } = useProjects();

  if (error) return <h2 className="text-red-500 text-lg">{error}</h2>;

  return (
    <div
      className={`grid lg:grid-cols-2 xl:grid-cols-3 gap-2 2xl:gap-8 mt-14 w-full ${className} `}
    >
      {loading && !projects.length
        ? [...new Array(6)].map((_, index) => (
            <Skeleton className="w-full min-h-[300px]" key={index} />
          ))
        : projects.map((project) => (
            <PortfolioItem project={project} key={project.id} />
          ))}
    </div>
  );
};
