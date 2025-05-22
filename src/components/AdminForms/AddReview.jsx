import { Input } from "../ui/Input";
import { toast } from "react-toastify";
import reviewsService from "../../services/reviews.service";
import { useReviews } from "../../hooks/useReviews";
import { Textarea } from "../ui/Textarea";
import { useState } from "react";
export const AddReview = () => {
  const { getReviews } = useReviews();
  const [text, setText] = useState("");
  const onSubmit = async (e) => {
    try {
      e.preventDefault();

      const formData = new FormData(e.target);
      const { title, platform, link } = Object.fromEntries(formData);
      if (!title || !platform) return toast.error("Заполните все поля");

      const body = {
        title,
        text,
        platform,
        link,
      };

      const res = await reviewsService.addReview(body);
      await getReviews();
      toast.success("Отзыв успешно добавлен");
      return res;
    } catch (error) {
      console.log(error);
      toast.error("Произошла ошибка");
    }
  };

  return (
    <div className="bg-main p-4 rounded-xl mt-10 w-full md:max-w-[500px] flex-1">
      <h3 className="text-xl">Добавление отзыва</h3>
      <form onSubmit={onSubmit} className="mt-10 flex flex-col gap-4">
        <Input
          required
          label={"Название заказа"}
          name={"title"}
          placeholder={"Введите название заказа"}
          type={"text"}
        />
        <Textarea value={text} setValue={setText} label={"Отзыв"} />

        <Input
          required
          label={"Платформа"}
          name={"platform"}
          placeholder={"Введите название платформы"}
          type={"text"}
        />
        <Input
          required
          label={"Ссылка на отзыв"}
          name={"link"}
          placeholder={"Введите ссылку на отзыв"}
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
