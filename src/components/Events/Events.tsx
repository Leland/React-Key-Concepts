import dummyEvents from "../../assets/dummy-events";
import { EventItem } from "./EventItem";
import classes from "./Events.module.css";
import { StoreItem } from "./types";

interface Props {
  onAddItemToCart: (item: StoreItem) => void;
  onRemoveItemFromCart: (itemID: StoreItem["id"]) => void;
  cartItems: StoreItem[];
}

export function Events({
  onAddItemToCart,
  onRemoveItemFromCart,
  cartItems,
}: Props) {
  return (
    <ul className={classes.events}>
      {dummyEvents.map((event) => (
        <EventItem
          key={event.id}
          event={event}
          isInCart={cartItems.some((item) => item.id === event.id)}
          onAddToCart={() => onAddItemToCart(event)}
          onRemoveFromCart={() => onRemoveItemFromCart(event.id)}
        />
      ))}
    </ul>
  );
}
