import { AddTechnology } from "../../components/AdminForms/AddTechnology";
import { Stack } from "../../components/Stack";

export const TechnologiesPage = () => {
  return (
    <section className="px-4">
      <h2 className="text-7xl mt-2 text-center">Стек технологий</h2>
      <div className="flex items-start flex-col md:flex-row max-w-[1280px] mx-auto w-full justify-between gap-5">
        <AddTechnology />
        <Stack
          className="md:!w-auto"
          listClassName="flex-wrap !justify-start md:max-w-[400px]"
        />
      </div>
    </section>
  );
};
