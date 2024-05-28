"use client";

import { Button } from "@nextui-org/button";
import { Card, CardFooter, CardBody } from "@nextui-org/card";
import { Image } from "@nextui-org/image";
import AddProductModal from "./components/add-product-modal";
import { useModalAddProductStore } from "@/lib/store/products/modalAddProducts";
import EditProductModal from "./components/edit-product-modal";
import { useModalEditProductStore } from "@/lib/store/products/modalEditProducts";
import { useConfirmationModalStore } from "@/lib/store/products/confirmationModal";
import ConfirmationModal from "./components/confirm-modal";

export default function Products() {
  const addProductStore = useModalAddProductStore();
  const editProductStore = useModalEditProductStore();
  const confirmationModalStore = useConfirmationModalStore();
  return (
    <>
      <div>
        <h1 className="font-bold text-lg lg:text-2xl">Manejo de Productos</h1>
      </div>

      <div>
        <Button className="bg-slate-900 text-white my-4" onClick={addProductStore.onOpen}>
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
            <Button color="danger">Eliminar</Button>
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
            <Button color="danger">Eliminar</Button>
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
            <Button onClick={editProductStore.onOpen}>Editar</Button>
            <Button color="danger">Eliminar</Button>
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
            <Button onPress={editProductStore.onOpen}>Editar</Button>
            <Button color="danger" onClick={confirmationModalStore.onOpen}>Eliminar</Button>
          </CardFooter>
        </Card>

        {/* Modal to Add Product */}
        <AddProductModal/>
        <EditProductModal/>
        <ConfirmationModal title="¿Desea eliminar este producto?"/>
      </div>
    </>
  );
}
