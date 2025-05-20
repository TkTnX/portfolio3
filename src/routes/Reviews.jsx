import { AnimatedLayout } from "../components/layouts/AnimatedLayout";
import { ReviewsList } from "../components/ReviewsList";
export const Reviews = () => {
  return (
    <AnimatedLayout>
      <section className="section">
        <h2 className="uppercase text-5xl">ОТЗЫВЫ</h2>
        <p className="text-xl md:text-2xl mt-2 text-center">
          Отзывы моих заказчиков на фрилансе
        </p>
        <ReviewsList />
      </section>
    </AnimatedLayout>
  );
};
