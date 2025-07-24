import { create } from 'zustand'

export const useStore = create((set) => ({
  // count: 1,
  // wishlist: [],
  // cart: [],

  cars: [],

  create: (car) => set((state) => ({cars: [...state.cars, car]})),


  deleteCar: (id) => set((state) => ({
    cars: state.cars.filter((car) => car.id !== id)
  })) 

  // reset: () => set((state) => ({ count: state.count = 0 })),
  // increment: () => set((state) => ({ count: state.count + 1 })),
  // decrement: () => set((state) => ({ count: state.count - 1 })),
}))
