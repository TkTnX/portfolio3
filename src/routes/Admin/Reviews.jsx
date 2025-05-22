import { AddReview } from "../../components/AdminForms";
import { ReviewsList } from "../../components/ReviewsList";

export const ReviewsPage = () => {
  return (
    <section className="px-4">
      <h2 className="text-7xl mt-2 text-center">Отзывы</h2>
      <div className="flex items-start flex-col md:flex-row max-w-[1280px] mx-auto w-full justify-between gap-5">
        <AddReview />
        <ReviewsList />
      </div>
    </section>
  );
};
