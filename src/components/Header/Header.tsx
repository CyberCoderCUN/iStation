import styles from "./Header.module.css";
import { useLocation } from "react-router-dom";

const Header = () => {
  const { pathname } = useLocation();

  const isHome = pathname === "/";
  const isIphone = pathname === "/iphone";
  const isMac = pathname === "/mac";
  const isAccessories = pathname === "/accessories";

  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerSection}>
        <p className="">iStation</p>
      </div>
      <nav className={styles.headerSection}>
        <div className={styles.navbarContainer}>
          <div className={styles.NavbarItem}>
            <a
              className={isHome ? styles.selectedItemText : styles.itemText}
              href="/"
            >
              Inicio
            </a>
          </div>
          <div className={isIphone ? styles.selectedItemText : styles.itemText}>
            <a
              className={styles.itemText}
              color={!isIphone ? "foreground" : undefined}
              href="/iphone"
            >
              iPhone
            </a>
          </div>
          <div>
            <a className={isMac ? styles.selectedItemText : styles.itemText}>
              Mac
            </a>
          </div>
          <div>
            <a
              className={
                isAccessories ? styles.selectedItemText : styles.itemText
              }
              href="/accessories"
            >
              Accesorios
            </a>
          </div>
        </div>
      </nav>
      <div className={styles.headerSection}>
        <div className={styles.navbarContainer}>
          <div className={styles.NavbarItem}>
            <a href="#">Login</a>
          </div>
          <div className={styles.NavbarItem}>
            <button color="primary">Sign Up</button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
