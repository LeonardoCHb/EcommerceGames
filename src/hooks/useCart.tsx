import { createContext, useContext, useState, ReactNode } from "react";
import { api } from "../services/api";

import { Product } from "../utils/types";

interface CartProviderProps {
  children: ReactNode;
}

/* interface UpdateProductAmount {
  productId: number;
  amount: number;
} */

interface CartContextInterface {
  cart: Product[];
  addProduct: (productId: number) => Promise<void>;
  /* updateProductAmount: ({ productId, amount }: UpdateProductAmount) => void; */
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
    localStorage.setItem('@EcommerGames:products', JSON.stringify(storagedCart))
  };
  return (
    <CartContext.Provider value={{ cart, addProduct }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart(): CartContextInterface {
  const context = useContext(CartContext);

  return context;
}
