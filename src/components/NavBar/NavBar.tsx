import SideDrawer from "./SideDrawer";
import classes from "./NavBar.module.css";

export function NavBar() {
  return (
    <>
      <header className={classes.header}>
        <h1>Demo App</h1>
        <button className={classes.btn}>
          <div />
          <div />
          <div />
        </button>
      </header>
      {/* Should be shown conditionally: <SideDrawer />  */}
    </>
  );
}
