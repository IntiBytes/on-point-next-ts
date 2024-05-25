"use client";

import { Button } from "@nextui-org/button";
import { Card, CardFooter, CardBody } from "@nextui-org/card";
import { Image } from "@nextui-org/image";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "@nextui-org/modal";
import { Checkbox } from "@nextui-org/checkbox";
import { Link } from "@nextui-org/link";
import { Input } from "@nextui-org/input";
import { useDisclosure } from "@nextui-org/use-disclosure";
import { BiMailSend, BiLock } from "react-icons/bi";
import { Select, SelectSection, SelectItem } from "@nextui-org/select";
import { ReactNode, useState } from "react";

export default function Products() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
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

  return (
    <>
      <div>
        <h1 className="font-bold text-lg lg:text-2xl">Manejo de Productos</h1>
      </div>

      <div>
        <Button className="bg-slate-900 text-white my-4" onClick={onOpen}>
          Crear Producto
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <Card
          shadow="sm"
          isPressable
          onPress={() => console.log("item pressed")}
        >
          <CardBody className="overflow-visible p-0">
            <Image
              shadow="sm"
              radius="lg"
              width="100%"
              alt="producto.png"
              className="w-full object-cover h-[250px] z-0"
              src="https://nextui.org/images/hero-card-complete.jpeg"
            />

            <span className="px-4 text-lg font-bold">Mini donas</span>
            <span className="px-4 text-sm">Precio: $0</span>
            <span className="px-4 text-sm">Cantidad: 0</span>
          </CardBody>
          <CardFooter className="text-small justify-between">
            <Button>Editar</Button>
            <Button>Eliminar</Button>
          </CardFooter>
        </Card>

        <Card
          shadow="sm"
          isPressable
          onPress={() => console.log("item pressed")}
        >
          <CardBody className="overflow-visible p-0">
            <Image
              shadow="sm"
              radius="lg"
              width="100%"
              alt="producto.png"
              className="w-full object-cover h-[250px] z-0"
              src="https://nextui.org/images/hero-card-complete.jpeg"
            />

            <span className="px-4 text-lg font-bold">Mini donas</span>
            <span className="px-4 text-sm">Precio: $0</span>
            <span className="px-4 text-sm">Cantidad: 0</span>
          </CardBody>
          <CardFooter className="text-small justify-between">
            <Button>Editar</Button>
            <Button>Eliminar</Button>
          </CardFooter>
        </Card>

        <Card
          shadow="sm"
          isPressable
          onPress={() => console.log("item pressed")}
        >
          <CardBody className="overflow-visible p-0">
            <Image
              shadow="sm"
              radius="lg"
              width="100%"
              alt="producto.png"
              className="w-full object-cover h-[250px] z-0"
              src="https://nextui.org/images/hero-card-complete.jpeg"
            />

            <span className="px-4 text-lg font-bold">Mini donas</span>
            <span className="px-4 text-sm">Precio: $0</span>
            <span className="px-4 text-sm">Cantidad: 0</span>
          </CardBody>
          <CardFooter className="text-small justify-between">
            <Button>Editar</Button>
            <Button>Eliminar</Button>
          </CardFooter>
        </Card>

        <Card
          shadow="sm"
          isPressable
          onPress={() => console.log("item pressed")}
        >
          <CardBody className="overflow-visible p-0">
            <Image
              shadow="sm"
              radius="lg"
              width="100%"
              alt="producto.png"
              className="w-full object-cover h-[250px] z-0"
              src="https://nextui.org/images/hero-card-complete.jpeg"
            />

            <span className="px-4 text-lg font-bold">Mini donas</span>
            <span className="px-4 text-sm">Precio: $0</span>
            <span className="px-4 text-sm">Cantidad: 0</span>
          </CardBody>
          <CardFooter className="text-small justify-between">
            <Button>Editar</Button>
            <Button>Eliminar</Button>
          </CardFooter>
        </Card>

        {/* Modal to Add Product */}

        <Modal
          isOpen={isOpen}
          onOpenChange={onOpenChange}
          placement="top-center"
        >
          <ModalContent>
            {(onClose) => (
              <>
                <ModalHeader className="flex flex-col gap-1">
                  Crear Producto
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
                      onChange={() => setVariantChecked(!isVariantChecked)}
                    >
                      ¿Posee Variante?
                    </Checkbox>
                    {/* <Link color="primary" href="#" size="sm">
                      Forgot password?
                    </Link> */}
                    {isVariantChecked && (
                      <Button onClick={handleAddVariants}>Añadir Variante</Button>
                      //     <Input
                      //     autoFocus
                      //     endContent={
                      //       <BiMailSend className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                      //     }
                      //     label="Nombre de la variante"
                      //     placeholder="Añadir nombre de la variante"
                      //     variant="bordered"
                      //   />
                      //   <Select label="Selecciona una variante" className="max-w-xs">
                      //     <SelectItem key={1} value={"Chocolate"}>
                      //       Chocolate
                      //     </SelectItem>

                      //     <SelectItem
                      //       variant="bordered"
                      //       key={1}
                      //       value={"Vainilla"}
                      //     >
                      //       Vainilla
                      //     </SelectItem>
                      //   </Select>
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
                    variant="bordered"
                  />
                </ModalBody>
                <ModalFooter>
                  <Button color="danger" variant="flat" onPress={onClose}>
                    Close
                  </Button>
                  <Button color="primary" onPress={onClose}>
                    Sign in
                  </Button>
                </ModalFooter>
              </>
            )}
          </ModalContent>
        </Modal>
      </div>
    </>
  );
}
