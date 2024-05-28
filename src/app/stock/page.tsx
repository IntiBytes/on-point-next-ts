"use client";
import { useState } from "react";
import { Checkbox } from "@nextui-org/checkbox";
import { Button } from "@nextui-org/button";
import { Card, CardBody } from "@nextui-org/card";
import { Input } from "@nextui-org/input";
import { Select, SelectSection, SelectItem } from "@nextui-org/select";
import { FaRegEdit, FaTrashAlt } from "react-icons/fa";

import {
  Table,
  TableHeader,
  TableBody,
  TableColumn,
  TableRow,
  TableCell,
} from "@nextui-org/table";
export default function Stock() {
  const [isVariantChecked, setVariantChecked] = useState(false);
  const handleVariantChecked = () => {
    setVariantChecked(!isVariantChecked);
  };
  return (
    <>
      <div>
        <h1 className="font-bold text-lg lg:text-2xl">Añadir Stock</h1>
      </div>

      <div className="flex items-center justify-center">
        <Card className="w-1/2">
          <CardBody>
            <div className="flex flex-col w-full gap-4 items-center">
              <div className="flex w-full flex-row gap-4">
                <Select label="Selecciona un producto" className="max-w-xs">
                  <SelectItem key={0} value={1}>
                    Mini donas
                  </SelectItem>

                  <SelectItem key={0} value={2}>
                    Cupcakes
                  </SelectItem>
                </Select>

                <Checkbox
                  classNames={{
                    label: "text-small",
                  }}
                  checked={isVariantChecked}
                  onChange={handleVariantChecked}
                >
                  ¿Posee Variante?
                </Checkbox>
              </div>

              <div className="flex flex-row w-full gap-4">
                {isVariantChecked && (
                  <Select label="Selecciona una variante" className="max-w-xs">
                    <SelectItem key={0} value={1}>
                      Chocolate
                    </SelectItem>

                    <SelectItem key={0} value={2}>
                      Caramelo
                    </SelectItem>

                    <SelectItem key={0} value={3}>
                      Personalizadas
                    </SelectItem>
                  </Select>
                )}
                <Input
                  type="number"
                  label="Cantidad"
                  min={0}
                  className="max-w-xs"
                />
              </div>

              <Button size="lg" color="primary">
                Añadir
              </Button>
            </div>
          </CardBody>
        </Card>
      </div>

      <div className="flex items-center justify-center mt-12">
        <Table aria-label="Example static collection table">
          <TableHeader>
            <TableColumn>Item</TableColumn>
            <TableColumn>Variante</TableColumn>
            <TableColumn>Stock</TableColumn>
            <TableColumn>Acciones</TableColumn>
          </TableHeader>
          <TableBody>
            <TableRow key="1">
              <TableCell>Mini donas</TableCell>
              <TableCell>Chocolate</TableCell>
              <TableCell>15</TableCell>
              <TableCell>
                <div className="flex flex-row items-center justify-start gap-2">
                  <Button isIconOnly color="warning"><FaRegEdit /></Button>
                  <Button isIconOnly color="danger"><FaTrashAlt /></Button>
                </div>
              </TableCell>
            </TableRow>
            <TableRow key="2">
            <TableCell>Mini donas</TableCell>
              <TableCell>Personalizadas</TableCell>
              <TableCell>25</TableCell>
              <TableCell>
                <div className="flex flex-row items-center justify-start gap-2">
                  <Button isIconOnly color="warning"><FaRegEdit /></Button>
                  <Button isIconOnly color="danger"><FaTrashAlt /></Button>
                </div>
              </TableCell>
            </TableRow>
            <TableRow key="3">
            <TableCell>Cupcakes</TableCell>
              <TableCell>Chocolate</TableCell>
              <TableCell>10</TableCell>
              <TableCell>
                <div className="flex flex-row items-center justify-start gap-2">
                  <Button isIconOnly color="warning"><FaRegEdit /></Button>
                  <Button isIconOnly color="danger"><FaTrashAlt /></Button>
                </div>
              </TableCell>
            </TableRow>
            <TableRow key="4">
            <TableCell>Cupcakes</TableCell>
              <TableCell>Personalizados</TableCell>
              <TableCell>10</TableCell>
              <TableCell>
                <div className="flex flex-row items-center justify-start gap-2">
                  <Button isIconOnly color="warning"><FaRegEdit /></Button>
                  <Button isIconOnly color="danger"><FaTrashAlt /></Button>
                </div>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </>
  );
}
