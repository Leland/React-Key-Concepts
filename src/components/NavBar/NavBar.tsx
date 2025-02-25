import { useState } from "react";
import { SideDrawer } from "./SideDrawer.tsx";
import classes from "./NavBar.module.css";

export function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const backdropClickHandler = () => setIsOpen(false);

  return (
    <>
      <header className={classes.header}>
        <h1>Demo App</h1>
        <button
          className={classes.btn}
          onClick={() => {
            setIsOpen((o) => !o);
          }}
        >
          <div />
          <div />
          <div />
        </button>
      </header>
      {isOpen && <SideDrawer onClose={backdropClickHandler} />}
    </>
  );
}
