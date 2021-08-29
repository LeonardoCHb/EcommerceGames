import React from "react";
import { BrowserRouter } from "react-router-dom";
import { CartProvider } from "./hooks/useCart";

import { Header } from "./components/Header";

import { GlobalStyle } from "./styles/global";
import { Routes } from "./routes";

export function App() {
  return (
    <>
      <BrowserRouter>
        <CartProvider>
          <GlobalStyle />
          <Header/>
          <Routes/>
        </CartProvider>
      </BrowserRouter>
    </>
  );
}
