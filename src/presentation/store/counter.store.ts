import {create} from 'zustand';

export interface ICounterStore {
  count: number;
  incrementBy: (value: number) => void;
}

export const useCounterStore = create<ICounterStore>()((set, get) => ({
  count: 0,
  incrementBy: (value: number) => {
    // Both ways are OK

    // set(state => ({count: state.count + value}));
    set({count: get().count + value});
  },
}));
