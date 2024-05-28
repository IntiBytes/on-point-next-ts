import { UseDisclosureProps, useDisclosure } from "@nextui-org/react";
import { create } from "zustand";

interface EditProductStore extends UseDisclosureProps {
    onOpenChange: () => void;
};

export const useModalEditProductStore = create<EditProductStore>((set) => ({
    isOpen: false,
    onOpen: () => set((state) => ({ ...state, isOpen: true })),
    onOpenChange: () => set((state) => ({ ...state, isOpen: !state.isOpen })),
}));