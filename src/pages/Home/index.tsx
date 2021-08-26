import React from "react";

import CartIcon from "../../assets/cart-icon.svg";
import { Container } from "./styles";

export function Home() {
  return (
    <>
      <Container>
        <h1>EcommerGames</h1>
        <img src={CartIcon} alt="Icone do Carrinho" />
      </ Container>
    </>
  );
}
