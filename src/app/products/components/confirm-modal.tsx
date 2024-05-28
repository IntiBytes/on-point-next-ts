"use client";
import { ReactNode, useState } from "react";
import { BiMailSend, BiLock } from "react-icons/bi";
import { IoAddCircleOutline, IoRemoveCircleOutline } from "react-icons/io5";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "@nextui-org/modal";
import { Checkbox } from "@nextui-org/checkbox";
import { Input } from "@nextui-org/input";
import { Button } from "@nextui-org/button";
import { useConfirmationModalStore } from "@/lib/store/products/confirmationModal";


interface ConfirmationModalProps {
    title: string,
}


export default function ConfirmationModal({ title }: ConfirmationModalProps) {
  const { isOpen, onOpen, onOpenChange } = useConfirmationModalStore();
  const [isVariantChecked, setVariantChecked] = useState(false);
  const [variantsInput, setVariantsInput] = useState<ReactNode[]>([]);

  const handleAddVariants = () => {
    setVariantsInput([
      ...variantsInput,
      <Input
        key={variantsInput.length}
        autoFocus
        endContent={
          <BiMailSend className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
        }
        label={`Nombre de la variante ${variantsInput.length + 1}`}
        placeholder="Añadir nombre de la variante"
        variant="bordered"
      />,
    ]);
  };

  const handleVariantChecked = () => {
    setVariantChecked(!isVariantChecked);
    variantsInput.length = 0;
  }

  const handleRemoveVariants = () => {
    if (variantsInput.length > 0) {
      const newVariants = variantsInput.slice(0, variantsInput.length - 1);
      setVariantsInput(newVariants);
    }
  };
  return (
    <div>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} placement="center">
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                {title}
              </ModalHeader>
              <ModalFooter className="items-center">
                <Button color="primary" variant="flat" onPress={onClose}>
                  Cancelar
                </Button>
                <Button color="danger" variant="solid" onPress={onClose}>
                  Eliminar
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
}
