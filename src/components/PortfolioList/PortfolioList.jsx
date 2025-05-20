import { PORTFOLIO_CONFIG } from "./portfolio.config";
import { PortfolioItem } from "./PortfolioItem";

export const PortfolioList = () => {
  return (
    <div className="grid grid-cols-3 gap-8">
      {PORTFOLIO_CONFIG.map((project, index) => (
        <PortfolioItem project={project} key={index} />
      ))}
    </div>
  );
};
