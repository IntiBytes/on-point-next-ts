import { UseDisclosureProps, useDisclosure } from "@nextui-org/react";
import { create } from "zustand";

interface AddProductStore extends UseDisclosureProps {
    onOpenChange: () => void;
};

export const useModalAddProductStore = create<AddProductStore>((set) => ({
    isOpen: false,
    onOpen: () => set((state) => ({ ...state, isOpen: true })),
    onOpenChange: () => set((state) => ({ ...state, isOpen: !state.isOpen })),
}));