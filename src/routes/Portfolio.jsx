import { AnimatedLayout } from "../components/layouts/AnimatedLayout";
import { PortfolioList } from "../components/PortfolioList";

export const Portfolio = () => {
  return (
    <AnimatedLayout>
      <div className="section">
        <h2 className="uppercase text-5xl">ПОРТФОЛИО</h2>
        <p className="text-xl md:text-2xl mt-2 text-center">
          Мои лучшие работы, в которых применяются различные технологии, знания
          и навыки
        </p>
        <PortfolioList />
      </div>
    </AnimatedLayout>
  );
};
