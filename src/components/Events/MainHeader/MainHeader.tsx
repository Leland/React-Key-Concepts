import { useState } from "react";

import { Cart } from "../Cart/Cart";
import { StoreItem } from "../types";
import classes from "./MainHeader.module.css";

export function MainHeader({ cartItems }: { cartItems: StoreItem[] }) {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  function openCartModalHandler() {
    setModalIsOpen(true);
  }

  function closeCartModalHandler() {
    setModalIsOpen(false);
  }

  const numCartItems = cartItems.length;

  return (
    <>
      <header className={classes.header}>
        <h1>StateEvents Shop</h1>
        <button onClick={openCartModalHandler}>Cart ({numCartItems})</button>
      </header>
      {modalIsOpen && (
        <Cart onClose={closeCartModalHandler} items={cartItems} />
      )}
    </>
  );
}
