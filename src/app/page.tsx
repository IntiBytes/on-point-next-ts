"use client";

import Image from "next/image";
import { Input } from "@nextui-org/input";
import { Button } from "@nextui-org/button";
import { useRouter } from "next/navigation";

export default function Home() {

  const { push } = useRouter();

  function handleLogin(){
    push("/dashboard");
  }

  return (
    <>
      <main className="flex min-h-screen lg:flex-row flex-col  items-center justify-center">
        <div className="lg:h-screen md:w-1/2 md:relative invisible lg:visible">
          <Image
            src="/assets/img/login-unsplash.jpg"
            alt="Next.js Logo"
            className="rounded-lg"
            fill={true}
            object-fit="cover"
          />
        </div>
        <div className="flex flex-col items-center justify-center w-full lg:w-1/2">
          <h1 className="text-4xl lg:text-6xl font-bold">Bienvenid@</h1>
          <h2 className="text-lg lg:text-2xl mb-4 text-center">Ya estás un paso más cerca de la gestión de tu negocio!</h2>
          <div className="w-11/12 lg:w-1/2 pt-4">
            <span>Ingresa tu correo electrónico</span>
            <Input type="email" variant="bordered" label="Correo electrónico" />
          </div>
          <div className="w-11/12 lg:w-1/2 pt-4">
            <span>Ingresa tu contraseña</span>
            <Input type="password" variant="bordered" label="Contraseña" />
          </div>
          <Button color="primary" className="w-11/12 lg:w-1/2 mt-4" onClick={handleLogin}>
            Iniciar Sesión
          </Button>
        </div>
      </main>
    </>
  );
}
