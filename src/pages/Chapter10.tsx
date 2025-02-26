import { useState } from "react";

import { Events } from "../components/Events/Events";
import { MainHeader } from "../components/Events/MainHeader/MainHeader";
import { StoreItem } from "../components/Events/types";
import { CartContext } from "../stores/CartContext";

export function Chapter10() {
  const [cartItems, setCartItems] = useState<StoreItem[]>([]);

  function addItemHandler(item: StoreItem) {
    setCartItems((prevItems) => [...prevItems, item]);
  }

  function removeItemHandler(itemId: StoreItem["id"]) {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
  }

  const cartCtxValue = {
    cartItems,
    addItemToCart: addItemHandler,
    removeItemFromCart: removeItemHandler,
  };

  return (
    <>
      <CartContext.Provider value={cartCtxValue}>
        <MainHeader />
        <main>
          <Events />
        </main>
      </CartContext.Provider>
    </>
  );
}
