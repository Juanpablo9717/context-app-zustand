import {create} from 'zustand';

export interface IProfileState {
  name: string;
  email: string;

  // Actions
  changeProfile: (name: string, email: string) => void;
}

export const useProfileStore = create<IProfileState>()((set, get) => ({
  name: 'Juan Pablo',
  email: 'juanpablo@google.com',

  changeProfile: (name: string, email: string) => {
    // console.log(get());
    set({name, email});
  },
}));
