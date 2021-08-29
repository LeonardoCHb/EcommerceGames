import React from "react";
import { Link } from "react-router-dom";

import CartIcon from "../../assets/cart-icon.svg";
import { Container } from "./styles";

export function Header() {
  return (
    <>
      <Container>
        <h1>EcommerGames</h1>
        <Link to="/cart"><img src={CartIcon} alt="Icone do Carrinho" /></Link>
      </Container>
    </>
  );
}
