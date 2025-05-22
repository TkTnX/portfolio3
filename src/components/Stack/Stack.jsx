import { useLocation } from "react-router";
import { useTechnologies } from "../../hooks/useTechnologies";
import { STACK_CONFIG } from "./stack.config";
import { DeleteTechnologyButton } from "./DeleteTechnologyButton";

export const Stack = ({className, listClassName}) => {
  const { technologies, error, loading } = useTechnologies();
  const location = useLocation()
  if (error) return <h2 className="text-red-500">{error}</h2>;
  return (
    <div className={`w-full mt-16 ${className}`}>
      <h5 className="text-primary text-3xl ">Мой стек технологий</h5>
      <div
        className={`grid grid-cols-3 gap-2 justify-center sm:flex items-center sm:justify-between mt-5 ${listClassName}`}
      >
        {(loading && !technologies.length ? STACK_CONFIG : technologies).map(
          (technology) => (
            <div className="justify-self-center relative" key={technology.id}>
              {location.pathname.includes("/admin") && <DeleteTechnologyButton id={technology.id} />}
              <img
                className=" w-full max-w-[70px] h-full  max-h-[70px]"
                src={technology.icon}
                alt={technology.name}
              />
            </div>
          )
        )}
      </div>
    </div>
  );
};
