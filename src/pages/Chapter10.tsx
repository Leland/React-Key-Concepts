import { useState } from "react";

import { Events } from "../components/Events/Events";
import { MainHeader } from "../components/Events/MainHeader/MainHeader";
import { StoreItem } from "../components/Events/types";
import { ReducerForm } from "../components/ReducerForm/ReducerForm";
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
      <main>
        <CartContext.Provider value={cartCtxValue}>
          <MainHeader />
          <Events />
        </CartContext.Provider>
        <ReducerForm />
      </main>
    </>
  );
}
