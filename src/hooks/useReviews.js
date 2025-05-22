import { useEffect, useState } from "react";
import { AxiosError } from "axios";
import { useReviewsStore } from "../stores/reviewsStore";
import reviewsService from "../services/reviews.service";
export const useReviews = () => {
  const { reviews, setReviews } = useReviewsStore();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    try {
      setError(false);
      const fetchReviews = async () => {
        const data = await reviewsService.getReviews();
        setReviews(data);
        return data;
      };
      fetchReviews();
    } catch (error) {
      console.log(error);
      if (error instanceof AxiosError) {
        setError(error.message);
      }
    } finally {
      setLoading(false);
    }
  }, []);

  async function getReviews() {
    const data = await reviewsService.getReviews();
    setReviews(data);
    return data;
  }

  return {
    reviews,
    error,
    loading,
    getReviews,
  };
};
