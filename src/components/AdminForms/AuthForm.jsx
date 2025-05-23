import { toast } from "react-toastify";
import { useAdminStore } from "../../stores/adminStore";
import { Input } from "../ui/Input";

export const AuthForm = () => {
  const { setIsAuthed } = useAdminStore();

  const onSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const { login, password } = Object.fromEntries(formData);

    if (
      login === import.meta.env.VITE_ADMIN_LOGIN &&
      password === import.meta.env.VITE_ADMIN_PASSWORD
    ) {
      setIsAuthed(true);
    } else {
      toast.error("Неверные данные");
    }
  };

  return (
    <div className="  min-h-screen flex items-center justify-center">
      <div className="bg-main p-4 rounded-xl w-[400px]">
        <h3 className="text-center">Авторизация</h3>
        <form onSubmit={onSubmit} className="flex flex-col gap-4">
          <Input label="Логин" name="login" placeholder="Введите логин" />
          <Input label="Пароль" name="password" placeholder="Введите пароль" />
          <button
            type="submit"
            className="bg-primary/30 hover:bg-primary/80 transition p-2 rounded-lg"
          >
            Войти
          </button>
        </form>
      </div>
    </div>
  );
};
