import { create } from "zustand";

import { ShoppingCartStoreValues } from "./shoppingCart.store.types";
import { ShoppingCart } from "../../types/shoppingCart.types";
import CONSTANTS from "../../config/constants";

const { SHOPPING_CART } = CONSTANTS.STORAGE;

const setCartInLocalStorage = (cart: ShoppingCart) => {
  localStorage.setItem(SHOPPING_CART, JSON.stringify(cart));
};

export const useShoppingCartStore = create<ShoppingCartStoreValues>(
  (set, get) => {
    return {
      shoppingCart: { products: [] },
      setShoppingCart: (shoppingCart) => {
        set({ shoppingCart });
        setCartInLocalStorage(shoppingCart);
      },
      addProduct: (productToAdd) => {
        const prev = get().shoppingCart;
        const { products } = prev;
        const newShoppingCart = { products: [...products, productToAdd] };
        set({ shoppingCart: newShoppingCart });
        setCartInLocalStorage(newShoppingCart);
      },
      deleteProduct: (productId) => {
        const prev = get().shoppingCart;
        const { products } = prev;
        const newProductList = products.filter(
          (product) => product.id !== productId
        );
        const newShoppingCart = { products: newProductList };
        set({ shoppingCart: newShoppingCart });
        setCartInLocalStorage(newShoppingCart);
      },
      reset: set({ shoppingCart: { products: [] } }),
    };
  }
);
