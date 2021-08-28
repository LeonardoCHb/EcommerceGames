import React from "react";
import { GlobalStyle } from "./styles/global";

import { Home } from "./pages/Home";
import { CartProvider } from "./hooks/useCart";

export function App() {
  return (
    <>
      <CartProvider>
        <GlobalStyle />
        <Home />
      </CartProvider>
    </>
  );
}
