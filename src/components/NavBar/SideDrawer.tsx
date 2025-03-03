import { createPortal } from "react-dom";
import { NavLink } from "react-router-dom";
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
            <NavLink to="/">Home (Chapters 1-7)</NavLink>
          </li>
          <li>
            <NavLink to="/Chapter8">Blog (Chapter 8)</NavLink>
          </li>
          <li>
            <NavLink to="/Chapter9">Authentmication (Chapter 9)</NavLink>
          </li>
          <li>
            <NavLink to="/Chapter10">State (Chapter 10)</NavLink>
          </li>
          <li>
            <NavLink to="/Chapter11">Hooks (Chapter 11)</NavLink>
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
