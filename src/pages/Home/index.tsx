import React from "react";

import CartIcon from "../../assets/cart-icon.svg";
import ArrowDown from "../../assets/arrow-down-icon.svg";

export function Home() {
  return (
    <>
      <img src={CartIcon} alt="Icone do Carrinho" />
      <img src={ArrowDown} alt="Icone de Seta para baixo" />
    </>
  );
}
