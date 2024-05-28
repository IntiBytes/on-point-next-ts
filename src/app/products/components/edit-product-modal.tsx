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
import { useModalEditProductStore } from "@/lib/store/products/modalEditProducts";

export default function EditProductModal() {
  const { isOpen, onOpen, onOpenChange } = useModalEditProductStore();
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

  const handleFileInputChanged = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    console.log(file);
    if (
      file?.type === "image/png" ||
      file?.type === "image/jpeg" ||
      file?.type === "image/svg"
    ) {
      console.log(file);
    }
  };
  return (
    <div>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} placement="bottom-center">
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Editar Producto
              </ModalHeader>
              <ModalBody>
                <Input
                  autoFocus
                  endContent={
                    <BiMailSend className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                  }
                  label="Nombre del producto"
                  placeholder="Añadir nombre del producto"
                  variant="bordered"
                />
                <div className="flex py-2 px-1 justify-between">
                  <Checkbox
                    classNames={{
                      label: "text-small",
                    }}
                    checked={isVariantChecked}
                    onChange={handleVariantChecked}
                  >
                    ¿Posee Variante?
                  </Checkbox>
                  {isVariantChecked && (
                    <div>
                      <Button onClick={handleRemoveVariants}>
                        <IoRemoveCircleOutline />
                      </Button>
                      <span className="font-regular mx-4">
                        {variantsInput.length}
                      </span>
                      <Button onClick={handleAddVariants}>
                        <IoAddCircleOutline />
                      </Button>
                    </div>
                  )}
                </div>
                {variantsInput.map((variant) => variant)}
                <Input
                  endContent={
                    <BiLock className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                  }
                  label="Cantidad"
                  placeholder="Añade la cantidad"
                  type="number"
                  min={0}
                  variant="bordered"
                />

                <label className="form-control w-full">
                  <div className="label">
                    <span className="label-text">Imagen del producto</span>
                    <span className="label-text-alt">*.png, *.jpg, *.svg</span>
                  </div>
                  <input
                    type="file"
                    accept="image/png, image/svg, image/jpeg"
                    className="file-input file-input-bordered w-full"
                    onChange={handleFileInputChanged}
                  />
                </label>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="flat" onPress={onClose}>
                  Cerrar
                </Button>
                <Button color="primary" onPress={onClose}>
                  Guardar
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
}
