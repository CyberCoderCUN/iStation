import { ProductCardProps } from "./ProductCard.types";
import styles from "./ProductCard.module.css";

const CardProduct = (props: ProductCardProps) => {
  const { product } = props;
  const { name, image, description, price, id } = product;

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("es-CO", {
      style: "currency",
      currency: "COP",
      minimumFractionDigits: 0,
    }).format(price);
  };

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
        <p className={styles.productName}>{name}</p>
        <p className={styles.productDescription}>{description}</p>
        <p className={styles.productPrice}>{formatPrice(price)}</p>
      </div>
    </article>
  );
};

export default CardProduct;
