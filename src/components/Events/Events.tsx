import dummyEvents from "../../assets/dummy-events";
import { EventItem } from "./EventItem";
import classes from "./Events.module.css";

export function Events() {
  return (
    <ul className={classes.events}>
      {dummyEvents.map((event) => (
        <EventItem key={event.id} event={event} />
      ))}
    </ul>
  );
}
