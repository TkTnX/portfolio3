import { Trash } from "lucide-react";
import { toast } from "react-toastify";
import { useReviews } from "../../hooks/useReviews";
import reviewsService from "../../services/reviews.service";

export const DeleteReviewButton = ({ id }) => {
  const { getReviews } = useReviews();
  const onClick = async () => {
    try {
      await reviewsService.deleteReview(id);
      toast.success("Отзыв успешно удален!");
      await getReviews();
    } catch (error) {
      console.log(error);
      toast.error("Что-то пошло не так!");
    }
  };

  return (
    <button
      onClick={onClick}
      className="bg-black p-1 rounded-full absolute right-0 top-0"
    >
      <Trash />
    </button>
  );
};
