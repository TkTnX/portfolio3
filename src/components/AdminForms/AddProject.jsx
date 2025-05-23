import { useState } from "react";
import { Input } from "../ui/Input";
import projectsService from "../../services/projects.service";
import { Upload } from "../ui/Upload";
import { useProjects } from "../../hooks/useProjects";
import { toast } from "react-toastify";
import { Textarea } from "../ui/Textarea";

export const AddProject = () => {
  const [image, setImage] = useState(null);
  const [description, setDescription] = useState("");
  const { getProjects } = useProjects();
  const onSubmit = async (e) => {
    try {
      e.preventDefault();

      const formData = new FormData(e.target);
      const { title, technologies, github } =
        Object.fromEntries(formData);
      if (!title || !description || !technologies)
        return toast.error("Заполните все поля");
      if (!image) return toast.error("Загрузите изображение");
      const body = {
        title,
        description,
        technologies,
        github,
        img: image.cdnUrl,
      };

      const res = await projectsService.addProject(body);
      await getProjects();
      toast.success("Проект успешно добавлен");
      return res;
    } catch (error) {
      console.log(error);
      toast.error("Произошла ошибка");
    }
  };

  return (
    <div className="bg-main p-4 rounded-xl mt-10 w-full md:max-w-[500px] flex-1">
      <h3 className="text-xl">Добавление проекта</h3>
      <Upload setImage={setImage} />
      <form onSubmit={onSubmit} className="mt-10 flex flex-col gap-4">
        <Input
          required
          label={"Название проекта"}
          name={"title"}
          placeholder={"Введите название проекта"}
          type={"text"}
        />
        <Textarea
          value={description}
          setValue={setDescription}
          label={"Описание проекта"}
        />
        <Input
          required
          label={"Список технологий"}
          name={"technologies"}
          placeholder={"Введите технологии через запятую"}
          type={"text"}
        />
        <Input
          label={"Github URL"}
          name={"github"}
          placeholder={"Введите ссылку на github"}
          type={"text"}
        />
        <button
          type="submit"
          className="bg-primary/30 hover:bg-primary/80 transition text-white p-2 rounded-lg"
        >
          Добавить
        </button>
      </form>
    </div>
  );
};

