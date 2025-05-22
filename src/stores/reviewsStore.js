import { create } from "zustand";

export const useReviewsStore = create((set) => ({
  reviews: [],
  setReviews: (reviews) => set({ reviews }),
}));
