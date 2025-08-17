import { create } from 'zustand';

type LocationStore = {
  location: string | null;
  setLocation: (q: string) => void;
  clearQuery: () => void;

  text: string;
  setText: (text: string) => void;
};

export const useLocationStore = create<LocationStore>()((set) => ({
  location: null,
  setLocation: (q: string) => set({ location: q }),
  clearQuery: () => set({ location: null }),

  text: '',
  setText: (text: string) => set({ text: text }),
}));
