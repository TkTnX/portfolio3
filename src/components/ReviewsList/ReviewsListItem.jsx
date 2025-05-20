export const ReviewsListItem = ({ review }) => {
  return (
    <div className="bg-black p-6 rounded-lg shadow-md">
      <p className="text-lg md:text-2xl">{review.text}</p>
      <div className="flex items-center justify-between mt-8">
        <div>
          <p className="text-base md:text-xl font-medium">{review.title}</p>
          <p className="font-light text-base md:text-xl">{review.user.name}</p>
        </div>
        <img
          className="object-cover rounded-full w-10 md:w-[60px] h-10 md:h-[60px]"
          src={review.user.image}
          alt={review.user.name}
        />
      </div>
    </div>
  );
};
