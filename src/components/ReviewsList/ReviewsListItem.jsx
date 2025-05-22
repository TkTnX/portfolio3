import { useLocation } from "react-router";
import { DeleteReviewButton } from "./DeleteReviewButton";
import Markdown from "react-markdown";
export const ReviewsListItem = ({ review }) => {
  const location = useLocation();
  return (
    <div
      href={review.link}
      className="bg-black p-6 rounded-lg shadow-md flex flex-col gap-2 text-left relative"
    >
      <a href={review.link} className="absolute inset-0" />
      {location.pathname.includes("/admin") && (
        <DeleteReviewButton id={review.id} />
      )}
      <Markdown>{review.text}</Markdown>
      <div>
        <p className="text-base md:text-xl font-medium">{review.title}</p>
        <p className="font-light text-base md:text-xl">{review.platform}</p>
      </div>
    </div>
  );
};
