import { PORTFOLIO_CONFIG } from "./portfolio.config";
import { PortfolioItem } from "./PortfolioItem";

export const PortfolioList = () => {
  return (
    <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-2 2xl:gap-8 mt-14">
      {PORTFOLIO_CONFIG.map((project, index) => (
        <PortfolioItem project={project} key={index} />
      ))}
    </div>
  );
};
