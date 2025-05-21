import { AddProject } from "../../components/AdminForms/AddProject";
import { PortfolioList } from "../../components/PortfolioList";

export const ProjectsPage = () => {
  return (
    <section className="px-4">
      <h2 className="text-7xl mt-2 text-center">Проекты</h2>
      <div className="flex items-start flex-col md:flex-row max-w-[1280px] mx-auto w-full justify-between gap-5">
        <AddProject />
        {/* PRODUCTS LIST */}
        <PortfolioList className="!flex !flex-col md:max-w-[400px] lg:max-w-[600px] max-h-[600px] overflow-y-auto" />
      </div>
    </section>
  );
};
