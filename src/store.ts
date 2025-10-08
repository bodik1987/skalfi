import { create } from "zustand";
import type { IUser } from "./types";

interface UserState {
  user: IUser | null;
  loading: boolean;
  setUser: (user: IUser | null) => void;
  setLoading: (value: boolean) => void;
}

interface DateState {
  selectedDate: Date;
  setSelectedDate: (date: Date) => void;
}

export const useUserStore = create<UserState>((set) => ({
  user: null,
  loading: true,
  setUser: (user) => set({ user }),
  setLoading: (value) => set({ loading: value }),
}));

export const useDateStore = create<DateState>((set) => ({
  selectedDate: new Date(),
  setSelectedDate: (date) => set({ selectedDate: date }),
}));
