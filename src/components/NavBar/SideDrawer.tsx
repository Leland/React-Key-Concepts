import classes from "./SideDrawer.module.css";

export function SideDrawer({ onClose }: { onClose: () => void }) {
  return (
    <>
      <div className={classes.backdrop} onClick={onClose} />
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
    </>
  );
}
