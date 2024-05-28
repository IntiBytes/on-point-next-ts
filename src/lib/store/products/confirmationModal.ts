import { UseDisclosureProps, useDisclosure } from "@nextui-org/react";
import { create } from "zustand";

interface ConfirmationModalStore extends UseDisclosureProps {
    onOpenChange: () => void;
};

export const useConfirmationModalStore = create<ConfirmationModalStore>((set) => ({
    isOpen: false,
    onOpen: () => set((state) => ({ ...state, isOpen: true })),
    onOpenChange: () => set((state) => ({ ...state, isOpen: !state.isOpen })),
}));