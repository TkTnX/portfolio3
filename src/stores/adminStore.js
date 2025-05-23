import { create } from "zustand";

export const useAdminStore = create((set) => ({
  isAuthed: false,
  setIsAuthed: (isAuthed) => set({ isAuthed }),
}));
