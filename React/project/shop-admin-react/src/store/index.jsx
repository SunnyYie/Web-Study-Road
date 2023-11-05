import { create } from 'zustand'

export const useBearStore = create((set) => ({
  user: {},
  setUser: (user) => set(() => ({ user: user })),
  logOut: () => set(() => ({ user: {} })),
}))
