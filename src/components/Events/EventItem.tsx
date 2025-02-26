import { useContext } from "react";
import classes from "./EventItem.module.css";
import { StoreItem } from "./types";
import { CartContext } from "../../stores/CartContext";

export function EventItem({ event }: { event: StoreItem }) {
  const cartCtx = useContext(CartContext);
  let buttonCaption = "Add to Cart";
  let buttonAction = cartCtx.addItemToCart(event);

  const isInCart = cartCtx.cartItems.some((item) => item.id === event.id);

  if (isInCart) {
    buttonCaption = "Remove from Cart";
    buttonAction = cartCtx.removeItemFromCart(event.id);
  }

  return (
    <li className={classes.event}>
      <img src={event.image} alt={event.title} />
      <div className={classes.content}>
        <h2>{event.title}</h2>
        <p className={classes.price}>${event.price}</p>
        <p>{event.description}</p>
        <div className={classes.actions}>
          <button onClick={() => buttonAction}>{buttonCaption}</button>
        </div>
      </div>
    </li>
  );
}
