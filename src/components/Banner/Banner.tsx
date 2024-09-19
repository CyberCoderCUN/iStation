import styles from "./Banner.module.css";
import iPhone14Banner from "../../assets/banners/banner_iPhone14.webp";

const Banner = () => {
  return (
    <section className={styles.bannerContainer}>
      <img
        className={styles.bannerImage}
        src={iPhone14Banner}
        alt="banner iPhone 14"
      />
    </section>
  );
};

export default Banner;
