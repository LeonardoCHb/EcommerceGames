import React from "react";

import fifa18 from "../../assets/fifa18.png"
import {Container} from "./styles"

export function ProductList() {
    return (
        <Container>
          <li>
            <img src={fifa18} alt="" />
            <strong>FIFA 18</strong>
            <span>Preço: 195.39</span>
            <span>SCORE: 325</span>
            <button>
                ADICIONAR AO CARRINHO
            </button>
          </li>
          
          
        </Container>
    )
}