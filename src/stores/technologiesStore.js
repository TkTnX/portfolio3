import { create } from "zustand";

export const useTechnologiesStore = create((set) => ({
  technologies: [],
  setTechnologies: (technologies) => set({ technologies }),
}));
