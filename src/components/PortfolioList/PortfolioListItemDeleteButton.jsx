import { toast } from "react-toastify";
import projectsService from "../../services/projects.service";
import { useProjects } from "../../hooks/useProjects";
import { Trash } from "lucide-react";

export const PortfolioListItemDeleteButton = ({ projectId }) => {
  const { getProjects } = useProjects();
  const onClick = async () => {
    try {
      await projectsService.deleteProject(projectId);
      toast.success("Проект успешно удален!");
      await getProjects();
    } catch (error) {
      console.log(error);
      toast.error("Что-то пошло не так!");
    }
  };
  return (
    <button
      onClick={onClick}
      className="bg-bg rounded-full p-2 absolute top-2 right-2 z-20 opacity-0 group-hover:opacity-100 transition"
    >
      <Trash />
    </button>
  );
};
