import { REVIEWS_CONFIG } from "./reviews.config";
import { ReviewsListItem } from "./ReviewsListItem";

export const ReviewsList = () => {
  return (
    <div className="grid   sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 justify-between gap-2 lg:gap-10 mt-3 lg:mt-20">
      {/* TODO: В будущем review.id, вместо Index */}
      {REVIEWS_CONFIG.map((review, index) => (
        <ReviewsListItem review={review} key={index} />
      ))}
    </div>
  );
};
