import { AnimatedLayout } from "../components/layouts/AnimatedLayout";
import { SOCIALS_CONFIG } from "../components/Sidebar/configs/socials.config";

export const Contacts = () => {
  return (
    <AnimatedLayout>
      <section className="section ">
        <h2 className="uppercase text-5xl">СВЯЗАТЬСЯ СО МНОЙ</h2>
        <p className="text-xl md:text-2xl mt-2 text-center">
          Социальные сети для связи со мной
        </p>
        <div className="flex flex-wrap items-center gap-4 lg:gap-8 w-full mt-9">
          {SOCIALS_CONFIG.map((social) => (
            <a
              href={social.link}
              className="rounded-2xl bg-black p-4 flex items-center justify-center gap-10 flex-1 group"
            >
              <social.icon
                size={35}
                color="#fff"
                className="group-hover:stroke-primary transition"
              />
              <span className="group-hover:text-primary transition">
                {social.name}
              </span>
            </a>
          ))}
        </div>
      </section>
    </AnimatedLayout>
  );
};
