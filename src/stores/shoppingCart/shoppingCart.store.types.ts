import { Product } from "../../types/product.types";
import { ShoppingCart } from "../../types/shoppingCart.types";

export interface ShoppingCartStoreValues {
  shoppingCart: ShoppingCart;
  setShoppingCart: (payload: ShoppingCart) => void;
  addProduct: (payload: Product) => void;
  deleteProduct: (payload: Product["id"]) => void;
}
