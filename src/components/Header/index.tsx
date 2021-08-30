import React from "react";
import { Link } from "react-router-dom";

import CartIcon from "../../assets/cart-icon.svg";
import Logo from "../../assets/Logo.png"

import { Container } from "./styles";

export function Header() {
  return (
    <>
      <Container>
        <Link to="/"><img src={Logo} alt="Logo Do EiGamer!" /></Link>
        <Link to="/cart"><img src={CartIcon} alt="Icone do Carrinho" /></Link>
      </Container>
    </>
  );
}
