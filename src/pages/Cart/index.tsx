import React from "react";

import { Container } from "./styles";

import { useCart } from "../../hooks/useCart";
import { Product } from "../../utils/types";
import {Frete} from "../../utils/consts"

export function Cart() {
  const { addProduct, removeProduct, updateProduct, cart } = useCart();

  const FormattedCart = cart.map((product) => ({
    ...product,
    subTotal: product.price * product.amount,
  }));

  const TotalProductPrices = cart.reduce((sumTotal, product) => {
    return sumTotal + product.price * product.amount
  }, 0)

  const TotalFrete = cart.reduce((sumTotal, product) => {
    if(TotalProductPrices > Frete.limite)
        return 0
    else
        return sumTotal + product.amount * Frete.valor
  }, 0)

  function handleAddProduct(id: number) {
    addProduct(id);
  }

  function handleRemoveProduct(id: number) {
    removeProduct(id);
  }
  function handleProductDecrement(product: Product) {
    if(product.amount === 1)
        removeProduct(product.id)
    else
        updateProduct({ productId: product.id, amount: product.amount - 1 });
  }

  return (
    <>
      <Container>
        <table>
          <tr>
            <th>Item dos carrinho</th>
            <th>Sumario</th>
          </tr>

          <tr>
            {FormattedCart.map((product) => (
              <td>
                <img
                  src={require(`../../assets/${product.image}.png`).default}
                  alt={`Imagem do jogo ${product.title}`}
                />
                <strong>{product.title}</strong>
                <span>SCORE: {product.score}</span>
                <button onClick={() => handleProductDecrement(product)}>
                  <h1>-</h1>
                </button>
                <span>QUANTIDADE: {product.amount}</span>
                <button onClick={() => handleAddProduct(product.id)}>
                  <h1>+</h1>
                </button>
                <button onClick={() => handleRemoveProduct(product.id)}>
                  DELETE
                </button>
                <strong>SUBTOTAL: {product.subTotal}</strong>
              </td>
            ))}

            <td>
              <span>preco dos items: {TotalProductPrices}</span>
              <span>FRETE: {TotalFrete}</span>
              <span>precoTotal: {TotalProductPrices + TotalFrete}</span>
            </td>
          </tr>
        </table>
      </Container>
    </>
  );
}
