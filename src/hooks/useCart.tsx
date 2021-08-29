import { createContext, useContext, useState, ReactNode } from "react";
import { api } from "../services/api";

import { Product } from "../utils/types";

interface CartProviderProps {
  children: ReactNode;
}

interface updateProductProps {
  productId: number
  amount: number
}
interface CartContextInterface {
  cart: Product[];
  addProduct: (productId: number) => Promise<void>;
  removeProduct: (productId: number) => void;
  updateProduct: ({productId, amount}: updateProductProps) => void;
}

const CartContext = createContext<CartContextInterface>(
  {} as CartContextInterface
);

export function CartProvider({ children }: CartProviderProps) {
  const [cart, setCart] = useState<Product[]>(() => {
    const newCart = localStorage.getItem("@EcommerGames:products");

    if (newCart) {
      return JSON.parse(newCart);
    }
    return [];
  });

  const addProduct = async (productId: number) => {
    const storagedCart = [...cart];
    const hasProduct = storagedCart.find((product) => product.id === productId);

    if (hasProduct) 
      hasProduct.amount += 1;
    else {
      const product = await api.get(`/products/${productId}`);

      const newProduct = {
        ...product.data,
        amount: 1,
      };
      storagedCart.push(newProduct);
    }

    setCart(storagedCart);
    localStorage.setItem(
      "@EcommerGames:products",
      JSON.stringify(storagedCart)
    );
  };
  const removeProduct = async (productId: number) => {
    const storagedCart = [...cart];
    const productIdDeleted = storagedCart.findIndex(
      (product) => product.id === productId
    );

    if (productIdDeleted >= 0) {
      storagedCart.splice(productIdDeleted, 1);
      setCart(storagedCart);
      localStorage.setItem(
        "@EcommerGames:products",
        JSON.stringify(storagedCart)
      );
    } else {
      alert("Produto não esta no carrinho!");
    }
  };
  const updateProduct = async ({productId, amount}:updateProductProps) => {
    console.log(amount)
    if (amount <= 0){
      return;
    }
    
    const storagedCart = [...cart];
    const hasProduct = storagedCart.find((product) => product.id === productId);

    if (hasProduct) {
      console.log(hasProduct.amount)
      hasProduct.amount = amount;
      setCart(storagedCart);
      localStorage.setItem("@EcommerGames:products", JSON.stringify(storagedCart));
    } else {
      alert("Produto não esta no carrinho!");
    }
  };
  return (
    <CartContext.Provider
      value={{ cart, addProduct, removeProduct, updateProduct }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart(): CartContextInterface {
  const context = useContext(CartContext);

  return context;
}
