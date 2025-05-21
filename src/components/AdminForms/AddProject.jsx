import { useState } from "react";
import { axiosInstance, URL } from "../../configs";
import { Input } from "../ui/Input";

export const AddProject = () => {
  const [image, setImage] = useState(null);
  const onSubmit = async (e) => {
    try {
      e.preventDefault();

      const formData = new FormData(e.target);

      const body = {
        title: formData.get("title"),
        description: formData.get("description"),
        technologies: formData.get("technologies"),
        github: formData.get("github"),
        image,
      };

      // TODO: Запросы перенсти в services
      const res = await axiosInstance.post(URL.projects.index, body);
      console.log(res);

      console.log(body);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="bg-main p-4 rounded-xl mt-10 w-full md:max-w-[500px] flex-1">
      <h3 className="text-xl">Добавление проекта</h3>
      <form onSubmit={onSubmit} className="mt-10 flex flex-col gap-4">
        {/* TODO: Добавление изображения */}
        <Input
          label={"Название проекта"}
          name={"title"}
          placeholder={"Введите название проекта"}
          type={"text"}
        />
        <Input
          label={"Описание проекта"}
          name={"description"}
          placeholder={"Введите описание проекта"}
          type={"text"}
        />
        <Input
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
