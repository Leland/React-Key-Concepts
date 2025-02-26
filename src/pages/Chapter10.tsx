import { useState } from "react";

import { Events } from "../components/Events/Events";
import { MainHeader } from "../components/Events/MainHeader/MainHeader";
import { StoreItem } from "../components/Events/types";

export function Chapter10() {
  const [cartItems, setCartItems] = useState<StoreItem[]>([]);

  function addItemHandler(item: StoreItem) {
    setCartItems((prevItems) => [...prevItems, item]);
  }

  function removeItemHandler(itemId: StoreItem["id"]) {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
  }

  return (
    <>
      <MainHeader cartItems={cartItems} />
      <main>
        <Events
          onAddItemToCart={addItemHandler}
          onRemoveItemFromCart={removeItemHandler}
          cartItems={cartItems}
        />
      </main>
    </>
  );
}
