import { AnimatedLayout } from "../components/layouts/AnimatedLayout";
import { Stack } from "../components/Stack";

export const About = () => {
  return (
    <AnimatedLayout>
      <section className="section pb-16">
        <h2 className="text-5xl text-center hidden xl:block">Обо мне</h2>
        <p className=" xl:text-center text-xl xl:text-2xl mt-10 xl:mt-2 max-w-[800px]">
          Я — frontend-разработчик с опытом с середины 2023 года. Моя
          специализация — создание удобных, адаптивных и современных интерфейсов
          с использованием технологий HTML, CSS, JavaScript, React, Next.js,
          TypeScript и Tailwind и др. <br />
          Работал как на собственных проектах, так и с реальными заказами на
          фрилансе.
        </p>
        <div className="mt-8 flex flex-col xl:flex-row items-center xl:items-stretch gap-16 justify-center -order-1 xl:order-none">
          <img
            src="/images/me.jpg"
            alt="Me"
            className="rounded-3xl object-cover w-full md:max-w-[400px]  md:xl:h-[467px]"
          />
          <div className="xl:max-w-[650px] ">
            <h3 className="text-4xl text-primary">Тимур Галиакбаров</h3>
            <p className="text-2xl mt-5">FRONTEND разработчик</p>
            <p className="text-xl mt-8 leading-8 text-left">
              Разработка — это не просто работа, а интересное и важное
              направление, которое находит применение в повседневной жизни. Меня
              мотивирует желание создавать что-то полезное и нестандартное, а
              также решать сложные задачи, которые требуют нестандартного
              подхода.
            </p>
          </div>
        </div>
        <Stack />
      </section>
    </AnimatedLayout>
  );
};
