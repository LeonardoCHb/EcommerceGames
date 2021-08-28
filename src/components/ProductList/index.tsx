import { useState, useEffect } from "react";

import { api } from "../../services/api";
import { Product } from "../../utils/types";

import { Container } from "./styles";

console.log(api);

export function ProductList() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    async function loadProducts() {
      const response = await api.get<Product[]>("products");

      const ProductData = response.data.map((product) => ({
        ...product,
      }));

      setProducts(ProductData);
    }

    loadProducts();
  }, []);

  return (
    <Container>
      {products.map((product) => (
        <li key={product.id}>
          <img
            src={require(`../../assets/${product.image}.png`).default}
            alt={`Imagem do jogo ${product.title}`}
          />
          <strong>{product.title}</strong>
          <span>{product.price}</span>
          <span>{product.score}</span>
          <button>ADICIONAR AO CARRINHO</button>
        </li>
      ))}
    </Container>
  );
}
