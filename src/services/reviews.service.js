import { axiosInstance, URL } from "../configs";

class ReviewsService {
  async getReviews() {
    const { data } = await axiosInstance.get(
      `${URL.reviews.index}`
    );
    return data;
  }

  async addReview(body) {
    const { data } = await axiosInstance.post(URL.reviews.index, body);
    return data;
  }

  async deleteReview(reviewId) {
    const { data } = await axiosInstance.delete(
      `${URL.reviews.index}/${reviewId}`
    );
    return data;
  }
}

export default new ReviewsService();
