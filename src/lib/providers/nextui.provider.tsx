"use client";

import { NextUIProvider } from "@nextui-org/react";
import { useRouter } from "next/navigation";

export function Providers({ children }: { children: React.ReactNode }) {
  const { push } = useRouter();

  return (
    <div>
      <NextUIProvider navigate={push}>{children}</NextUIProvider>
    </div>
  );
}
