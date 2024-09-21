import { useEffect } from "react";
import { useShoppingCartStore } from "../stores/shoppingCart/shoppingCart.store";
import CONSTANTS from "../config/constants";
import { ShoppingCart } from "../types/shoppingCart.types";

const { SHOPPING_CART } = CONSTANTS.STORAGE;

const useSetupShoppingCart = () => {
  const setShoppingCart = useShoppingCartStore(
    (state) => state.setShoppingCart
  );

  useEffect(() => {
    const getStateFromLocalStorage = (): ShoppingCart | undefined => {
      const cart = localStorage.getItem(SHOPPING_CART);
      if (!cart) return;
      return JSON.parse(cart);
    };

    const shoppingCartFromStorage = getStateFromLocalStorage();

    if (shoppingCartFromStorage) {
      setShoppingCart(shoppingCartFromStorage);
    }
  }, [setShoppingCart]);
};

export default useSetupShoppingCart;
