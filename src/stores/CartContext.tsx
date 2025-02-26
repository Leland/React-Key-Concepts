import { createContext } from "react";

import { StoreItem } from "../components/Events/types";

interface CartType {
  cartItems: StoreItem[];
  addItemToCart: (item: StoreItem) => void;
  removeItemFromCart: (itemId: StoreItem["id"]) => void;
}

export const CartContext = createContext<CartType>({
  cartItems: [],
  addItemToCart: () => {},
  removeItemFromCart: () => {},
});
