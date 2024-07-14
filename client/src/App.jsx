import * as React from "react";
import { NextUIProvider } from "@nextui-org/react";
import { Home } from "./pages/Home";

export const App = () => {
  return (
    <NextUIProvider>
      <Home />
    </NextUIProvider>
  );
}