import { useContext } from "react";
import classes from "./EventItem.module.css";
import { StoreItem } from "./types";
import { CartContext } from "../../stores/CartContext";

export function EventItem({ event }: { event: StoreItem }) {
  const cartCtx = useContext(CartContext);

  const isInCart = cartCtx.cartItems.some((item) => item.id === event.id);

  return (
    <li className={classes.event}>
      <img src={event.image} alt={event.title} />
      <div className={classes.content}>
        <h2>{event.title}</h2>
        <p className={classes.price}>${event.price}</p>
        <p>{event.description}</p>
        <div className={classes.actions}>
          <button
            onClick={() => {
              if (isInCart) {
                cartCtx.removeItemFromCart(event.id);
              } else {
                cartCtx.addItemToCart(event);
              }
            }}
          >
            {isInCart ? "Remove from Cart" : "Add to Cart"}
          </button>
        </div>
      </div>
    </li>
  );
}
