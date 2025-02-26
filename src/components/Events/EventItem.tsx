import classes from "./EventItem.module.css";
import { StoreItem } from "./types";

interface Props {
  event: StoreItem;
  isInCart: boolean;
  onAddToCart: () => void;
  onRemoveFromCart: () => void;
}

export function EventItem({
  event,
  isInCart,
  onAddToCart,
  onRemoveFromCart,
}: Props) {
  let buttonCaption = "Add to Cart";
  let buttonAction = onAddToCart;

  if (isInCart) {
    buttonCaption = "Remove from Cart";
    buttonAction = onRemoveFromCart;
  }

  return (
    <li className={classes.event}>
      <img src={event.image} alt={event.title} />
      <div className={classes.content}>
        <h2>{event.title}</h2>
        <p className={classes.price}>${event.price}</p>
        <p>{event.description}</p>
        <div className={classes.actions}>
          <button onClick={buttonAction}>{buttonCaption}</button>
        </div>
      </div>
    </li>
  );
}
