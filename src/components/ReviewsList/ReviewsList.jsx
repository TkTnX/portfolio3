import { useReviews } from "../../hooks/useReviews";
import { Skeleton } from "../ui/Skeleton";
import { ReviewsListItem } from "./ReviewsListItem";

export const ReviewsList = () => {
  const { error, reviews, loading } = useReviews();

  if (error) return <h2 className="text-red-500 text-lg">{error}</h2>;

  return (
    <div className="grid   sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 justify-between gap-2 lg:gap-10 mt-3 lg:mt-20 flex-1 items-start">
      {loading
        ? [...new Array(4)].map((_, index) => (
            <Skeleton key={index} className="w-full min-h-[300px]" />
          ))
        : reviews.map((review) => (
            <ReviewsListItem review={review} key={review.id} />
          ))}
    </div>
  );
};
