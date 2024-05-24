import {create} from 'zustand';

type SidebarStore = {
    isOpen: boolean;
    toggleSidebar: (isOpen: boolean) => void;
};

export const useSidebarStore = create<SidebarStore>((set) => ({
    isOpen: false,
    toggleSidebar: (isOpen: boolean) => set((state) => ({...state, isOpen})),
}));