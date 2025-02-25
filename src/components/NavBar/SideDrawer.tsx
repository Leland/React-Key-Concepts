import { createPortal } from "react-dom";
import classes from "./SideDrawer.module.css";

interface Props {
  onClose: () => void;
}

function Drawer() {
  return (
    <aside className={classes.drawer}>
      <nav>
        <ul>
          <li>
            <a href="/">Dashboard</a>
          </li>
          <li>
            <a href="/products">All Products</a>
          </li>
          <li>
            <a href="/profile">Your Profile</a>
          </li>
        </ul>
      </nav>
    </aside>
  );
}

export function SideDrawer({ onClose }: Props) {
  return (
    <>
      {createPortal(
        <>
          <div className={classes.backdrop} onClick={onClose} />
          <Drawer />
        </>,
        document.getElementById("dialogs")!,
      )}
    </>
  );
}
