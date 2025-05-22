import { Trash } from "lucide-react";
import { toast } from "react-toastify";
import { useTechnologies } from "../../hooks/useTechnologies";
import tecnologiesService from "../../services/tecnologies.service";

export const DeleteTechnologyButton = ({ id }) => {
  const { getTechnologies } = useTechnologies();
  const onClick = async () => {
    try {
      await tecnologiesService.deleteTechnology(id);
      toast.success("Технология успешно удалена!");
      await getTechnologies();
    } catch (error) {
      console.log(error);
      toast.error("Что-то пошло не так!");
    }
  };

  return (
    <button
      onClick={onClick}
      className="bg-black p-1 rounded-full absolute right-0 top-0"
    >
      <Trash />
    </button>
  );
};
