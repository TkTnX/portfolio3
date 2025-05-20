export const Homepage = () => {
  return (
    <section className=" flex-1 relative overflow-hidden bg-linear-to-r from-main to-transparent h-full md:h-screen">
      <img
        src="/images/mainBg.jpg"
        alt="Bg image"
        className="absolute inset-0 object-cover z-[-1] opacity-[15%] w-full h-full"
      />
      <div className="flex items-center justify-center h-full w-full flex-col text-center">
        <p className="text-3xl">Привет, я</p>
        <h1 className="text-7xl mt-2">Тимур Галиакбаров</h1>
        <p className="text-3xl mt-2">FRONTEND разработчик</p>
      </div>
    </section>
  );
};
