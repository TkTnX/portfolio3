import { useState } from "react";
import { Input } from "../ui/Input";
import { Upload } from "../ui/Upload";
import { toast } from "react-toastify";
import { useTechnologies } from "../../hooks/useTechnologies";
import technologiesService from "../../services/tecnologies.service";
export const AddTechnology = () => {
  const [image, setImage] = useState(null);
  const { getTechnologies } = useTechnologies();
  const onSubmit = async (e) => {
    try {
      e.preventDefault();

      const formData = new FormData(e.target);
      if (!formData.get("name")) return toast.error("Заполните все поля");
      if (!image) return toast.error("Загрузите изображение");
      const body = {
        name: formData.get("name"),
        icon: image.cdnUrl,
      };

      const res = await technologiesService.addTechnology(body);
      await getTechnologies();
      toast.success("Технология успешно добавлена");
      return res;
    } catch (error) {
      console.log(error);
      toast.error("Произошла ошибка");
    }
  };

  return (
    <div className="bg-main p-4 rounded-xl mt-10 w-full md:max-w-[500px] flex-1">
      <h3 className="text-xl">Добавление технологии</h3>
      <Upload setImage={setImage} />
      <form onSubmit={onSubmit} className="mt-10 flex flex-col gap-4">
        <Input
          required
          label={"Название технологии"}
          name={"name"}
          placeholder={"Введите название технологии"}
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
