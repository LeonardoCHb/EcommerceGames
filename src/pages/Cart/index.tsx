import React from "react";
import { useCart } from "../../hooks/useCart";

import plusIcon from "../../assets/plusIcon.svg";
import negativeIcon from "../../assets/negativeIcon.svg";
import trashIcon from "../../assets/trashIcon.svg";

import { Product } from "../../utils/types";
import { Frete } from "../../utils/consts";
import { formatPrice } from "../../utils/format";

import { Container, TableContainer } from "./styles";

export function Cart() {
  const { addProduct, removeProduct, updateProduct, cart } = useCart();

  const FormattedCart = cart.map((product) => ({
    ...product,
    formattedPrice:formatPrice(product.price),
    subTotal: product.price * product.amount,
  }));

  const TotalProductPrices = cart.reduce((sumTotal, product) => {
    return sumTotal + product.price * product.amount;
  }, 0);

  const TotalFrete = cart.reduce((sumTotal, product) => {
    if (TotalProductPrices > Frete.limite) 
      return 0;
    else 
      return sumTotal + product.amount * Frete.valor;
  }, 0);


  function handleAddProduct(id: number) {
    addProduct(id);
  }

  function handleRemoveProduct(id: number) {
    removeProduct(id);
  }
  function handleProductDecrement(product: Product) {
    if (product.amount === 1) 
      removeProduct(product.id);
    else 
      updateProduct({ productId: product.id, amount: product.amount - 1 });
  }

  return (

    <>
        {cart.length ? (
      <Container>
          <TableContainer>
            <thead>
              <tr>
                <th>Jogos</th>
                <th>Precos</th>
                <th>Score</th>
                <th>Quantidade</th>
                <th>SubTotal</th>
              </tr>
            </thead>
            <tbody>
              {FormattedCart.map((product) => (
                <tr key={product.id}>
                  <td>
                    <img
                      src={require(`../../assets/${product.image}.png`).default}
                      alt={`Imagem do jogo ${product.title}`}
                    />
                  </td>
                  <td>
                    <strong>{product.formattedPrice}</strong>
                  </td>
                  <td>
                    <strong>{product.score}</strong>
                  </td>
  
                  <td>
                    <img
                      onClick={() => handleProductDecrement(product)}
                      src={negativeIcon}
                      alt="Icone de Menos"
                    />
                    <strong className="Quantidade">{product.amount}</strong>
                    <img
                      onClick={() => handleAddProduct(product.id)}
                      src={plusIcon}
                      alt="Icone de Mais"
                    />
                  </td>
                  <td>
                    <strong>{formatPrice(product.subTotal)}</strong>
                  </td>
                  <td>
                    <img
                      src={trashIcon}
                      alt="Icone da lixeira"
                      onClick={() => handleRemoveProduct(product.id)}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </TableContainer>
            <footer>
              <div className="TotalPrices">
                <strong>Preço dos items: {formatPrice(TotalProductPrices)}</strong>
                <strong>FRETE: {formatPrice(TotalFrete)}</strong>
                <strong>Preço Total: {formatPrice(TotalProductPrices + TotalFrete)}</strong>
              <button>FINALIZAR PEDIDO</button>
              </div>
            </footer>
      </Container>
        ) : (

          <p>
            <h1>Carrinho Vazio..</h1>
          </p>
        )}
      
    </>
  );
}
