import { STACK_CONFIG } from "./stack.config";

export const Stack = () => {
  return (
    <div className="w-full mt-16">
      <h5 className="text-primary text-3xl ">Мой стек технологий</h5>
      <div className="grid grid-cols-3 gap-2 justify-center sm:flex items-center sm:justify-between mt-5">
        {STACK_CONFIG.map((technology) => (
          <div className="justify-self-center" key={technology.name}>
            <img
              className=" w-full max-w-[70px] h-full  max-h-[70px]"
              src={technology.icon}
              alt={technology.name}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
