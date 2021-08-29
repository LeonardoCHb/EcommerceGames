import { useState, useEffect } from "react";
import { useCart } from "../../hooks/useCart";

import { api } from "../../services/api";
import { Product } from "../../utils/types";

import { Container } from "./styles";

export function Home() {
  const [products, setProducts] = useState<Product[]>([]);
  const { addProduct, cart } = useCart();

  useEffect(() => {
    async function loadProducts() {
      const response = await api.get<Product[]>("products");

      const localStorageItems = localStorage.getItem("@EcommerGames:products");

      const newLocalStorageItems = localStorageItems
        ? JSON.parse(localStorageItems)
        : [];

      const ProductData = response.data.map((product) => ({
        ...product,
        amount: newLocalStorageItems.length
          ? newLocalStorageItems.find((item: Product) => item.id === product.id)
              ?.amount
          : 0,
      }));

      setProducts(ProductData);
    }

    loadProducts();
  }, [cart]);

  function handleAddProduct(id: number) {
    addProduct(id);
  }

  console.log(cart);

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
          <span>{product.amount}</span>
          <button onClick={() => handleAddProduct(product.id)}>
            ADICIONAR AO CARRINHO
          </button>
        </li>
      ))}
    </Container>
  );
}
