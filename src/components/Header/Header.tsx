import styles from "./Header.module.css";
import { useLocation } from "react-router-dom";

import ShoppingCartIconSVG from "../../assets/icons/shopping_cart.svg";

const Header = () => {
  const { pathname } = useLocation();

  const isHome = pathname === "/";
  const isIphone = pathname === "/iphone";
  const isMac = pathname === "/mac";
  const isAccessories = pathname === "/accessories";

  const productsAmount = 3;

  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <div className={styles.headerSection}>
          <p className="">iStation</p>
        </div>
        <nav className={styles.headerSection}>
          <div className={styles.navbarContainer}>
            <div className={styles.navbarItem}>
              <a
                className={isHome ? styles.selectedItemText : styles.itemText}
                href="/"
              >
                Inicio
              </a>
            </div>
            <div className={styles.navbarItem}>
              <a
                className={isIphone ? styles.selectedItemText : styles.itemText}
                href="/iphone"
              >
                iPhone
              </a>
            </div>
            <div className={styles.navbarItem}>
              <a
                className={isMac ? styles.selectedItemText : styles.itemText}
                href="/mac"
              >
                Mac
              </a>
            </div>
            <div className={styles.navbarItem}>
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
            <div className={styles.navbarItem}>
              <a href="#">Login</a>
            </div>
            <div className={styles.navbarItem}>
              <a href="#">Sign Up</a>
            </div>
            <div className={styles.shoppingCartContainer}>
              <img src={ShoppingCartIconSVG} alt="shopping cart icon" />
              <div className={styles.productsAmount}>{productsAmount}</div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
