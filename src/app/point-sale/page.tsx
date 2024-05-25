"use client";

import { Divider } from "@nextui-org/divider";
import { Card, CardFooter, CardBody } from "@nextui-org/card";
import { Image } from "@nextui-org/image";
import { Button } from "@nextui-org/button";

import {
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from "@nextui-org/table";
import { FaCheck, FaUserCircle } from "react-icons/fa";
import { FaX } from "react-icons/fa6";

export default function PointOfSale() {
  return (
    <>
      {/* Table  */}
      <div className="flex flex-col-reverse lg:flex-row w-full justify-center">
        {/* Header */}
        <div className="flex flex-col items-center justify-center">
          <h1 className="font-bold text-lg lg:text-2xl">Consumidor Final</h1>

          <div className="flex mt-4">
            <div className="flex flex-col justify-center items-center">
              <span className="text-lg font-medium">Puntaje</span>
              <span>200 pts</span>
            </div>
            <Divider orientation="vertical" className="h-25 mx-4" />
            <div className="flex flex-col justify-center items-center">
              <span className="text-lg font-medium">Compra #</span>
              <span>19</span>
            </div>
          </div>

          <Divider orientation="horizontal" className="mt-4"></Divider>
          {/* Detail of Receipt */}
          <div className="mt-4">
            <Table removeWrapper aria-label="Example static collection table">
              <TableHeader>
                <TableColumn>Nombre</TableColumn>
                <TableColumn>Cantidad</TableColumn>
                <TableColumn>Precio Unitario</TableColumn>
              </TableHeader>
              <TableBody>
                <TableRow key="1">
                  <TableCell>Mini donas rellenas</TableCell>
                  <TableCell>2</TableCell>
                  <TableCell>$1.00</TableCell>
                </TableRow>
                <TableRow key="2">
                  <TableCell>Mini donas simples</TableCell>
                  <TableCell>4</TableCell>
                  <TableCell>$2.00</TableCell>
                </TableRow>
                <TableRow key="3">
                  <TableCell>Mini donas con Topping</TableCell>
                  <TableCell>3</TableCell>
                  <TableCell>$4.00</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
          {/* Totals */}
          <Divider orientation="horizontal" className="mt-4"></Divider>

          <div className="flex flex-col w-full mt-4 px-12">
            <div className="flex flex-row w-full justify-between pb-4">
              <span className="font-regular text-lg">Total</span>
              <span className="font-regular text-lg">$2,15</span>
            </div>
            <div className="flex flex-row w-full justify-between">
              <span>IVA (15%)</span>
              <span>$2,15</span>
            </div>
            <div className="flex flex-row w-full justify-between">
              <span>Subtotal</span>
              <span>$2,15</span>
            </div>
          </div>
        </div>
        <Divider orientation="vertical" className="h-25 mx-4" />

        <div className="flex flex-col items-center mb-8">
          {/* Category Grid */}
          <h1 className="font-bold text-lg lg:text-2xl pb-2">Categorías</h1>

          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
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
                  className="w-full object-cover h-[140px]"
                  src="https://nextui.org/images/hero-card-complete.jpeg"
                />
              </CardBody>
              <CardFooter className="text-small justify-between">
                <b>Mini donas</b>
                <p className="text-default-500">$2.50</p>
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
                  className="w-full object-cover h-[140px]"
                  src="https://nextui.org/images/hero-card-complete.jpeg"
                />
              </CardBody>
              <CardFooter className="text-small justify-between">
                <b>Mini donas</b>
                <p className="text-default-500">$2.50</p>
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
                  className="w-full object-cover h-[140px]"
                  src="https://nextui.org/images/hero-card-complete.jpeg"
                />
              </CardBody>
              <CardFooter className="text-small justify-between">
                <b>Mini donas</b>
                <p className="text-default-500">$2.50</p>
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
                  className="w-full object-cover h-[140px]"
                  src="https://nextui.org/images/hero-card-complete.jpeg"
                />
              </CardBody>
              <CardFooter className="text-small justify-between">
                <b>Mini donas</b>
                <p className="text-default-500">$2.50</p>
              </CardFooter>
            </Card>
          </div>

          {/* Servicios Grid */}
          <h1 className="font-bold text-lg lg:text-2xl pb-2">Servicios</h1>

          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
            <Card
              shadow="sm"
              isPressable
              onPress={() => console.log("item pressed")}
            >
              <CardBody className="overflow-visible p-0 items-center justify-center">
                <FaUserCircle size={90} />
              </CardBody>
              <CardFooter className="text-small justify-between">
                <b>Obtener Cliente</b>
                {/* <p className="text-default-500">$2.50</p> */}
              </CardFooter>
            </Card>

            <Card
              shadow="sm"
              isPressable
              onPress={() => console.log("item pressed")}
            >
              <CardBody className="overflow-visible p-0 items-center justify-center">
                <FaUserCircle size={90} />
              </CardBody>
              <CardFooter className="text-small justify-between">
                <b>Registro Cliente</b>
                {/* <p className="text-default-500">$2.50</p> */}
              </CardFooter>
            </Card>

            <Card
              shadow="sm"
              isPressable
              onPress={() => console.log("item pressed")}
            >
              <CardBody className="overflow-visible p-0 items-center justify-center">
                <FaUserCircle size={90} />
              </CardBody>
              <CardFooter className="text-small justify-between">
                <b>Registro Producto</b>
                {/* <p className="text-default-500">$2.50</p> */}
              </CardFooter>
            </Card>
          </div>

          <div className="flex w-full items-center justify-center gap-4 pt-12">
            <Button color="success" className="w-full">
              <FaCheck className="text-white" />
            </Button>
            <Button color="danger" className="w-full">
              <FaX />
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
