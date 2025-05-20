import { PortfolioList } from "../components/PortfolioList";

export const Portfolio = () => {
  return (
    <div className="pt-10 pb-16 px-5 2xl:px-24 flex flex-col justify-center items-center flex-1">
      <h2 className="uppercase text-5xl">PORTFOLIO</h2>
      <p className="text-2xl mt-2">
        Мои лучшие работы, в которых применяются различные технологии, знания и
        навыки
      </p>
      <PortfolioList />
    </div>
  );
};
