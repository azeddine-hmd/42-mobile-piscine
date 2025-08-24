import { create } from 'zustand';

type Coords = { latitude: number; longitude: number };

type LocationStore = {
  isPermissionGranted: boolean;
  setPermissionGranted: (isGranted: boolean) => void;
  location: string | Coords | null;
  setLocation: (q: string | Coords) => void;
  clearQuery: () => void;
  text: string;
  setText: (text: string) => void;
};

export const useLocationStore = create<LocationStore>()((set) => ({
  isPermissionGranted: false,
  setPermissionGranted: (isGranted: boolean) => set({ isPermissionGranted: isGranted }),
  location: null,
  setLocation: (location: string | Coords) => set({ location: location }),
  clearQuery: () => set({ location: null }),
  text: '',
  setText: (text: string) => set({ text: text }),
}));
