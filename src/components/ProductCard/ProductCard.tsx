import { ProductCardProps } from "./ProductCard.types";
import styles from "./ProductCard.module.css";

const CardProduct = (props: ProductCardProps) => {
  const { product } = props;
  const { name, image, description, price, id } = product;

  return (
    <article
      className={styles.productCardContainer}
      key={`product-${id}`}
      onClick={() => console.log("item pressed")}
    >
      <div className={styles.imageContainer}>
        <img className={styles.image} alt={name} src={image} />
      </div>
      <div className={styles.productInfo}>
        <b className={styles.productName}>{name}</b>
        <b className={styles.productDescription}>{description}</b>
        <p className={styles.productPrice}>{price}</p>
      </div>
    </article>
  );
};

export default CardProduct;
