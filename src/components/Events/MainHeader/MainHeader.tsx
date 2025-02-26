import { useContext, useState } from "react";

import { CartContext } from "../../../stores/CartContext";
import { Cart } from "../Cart/Cart";
import classes from "./MainHeader.module.css";

export function MainHeader() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const cartCtx = useContext(CartContext);

  function openCartModalHandler() {
    setModalIsOpen(true);
  }

  function closeCartModalHandler() {
    setModalIsOpen(false);
  }

  const numCartItems = cartCtx.cartItems.length;

  return (
    <>
      <header className={classes.header}>
        <h1>StateEvents Shop</h1>
        <button onClick={openCartModalHandler}>Cart ({numCartItems})</button>
      </header>
      {modalIsOpen && <Cart onClose={closeCartModalHandler} />}
    </>
  );
}
