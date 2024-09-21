import { useEffect, useState } from "react";
import { ProductCardProps } from "./ProductCard.types";
import styles from "./ProductCard.module.css";
import AddCircleIconSVG from "../../assets/icons/add_circle.svg";
import CheckCircleIconSVG from "../../assets/icons/check_circle.svg";
import { useShoppingCartStore } from "../../stores/shoppingCart/shoppingCart.store";

const CardProduct = (props: ProductCardProps) => {
  const { product } = props;
  const { name, image, description, price, id } = product;

  const cart = useShoppingCartStore((state) => state.shoppingCart);
  const addProduct = useShoppingCartStore((state) => state.addProduct);
  const deleteProduct = useShoppingCartStore((state) => state.deleteProduct);

  const [isAdded, setIsAdded] = useState(false);

  const { products: cartProducts } = cart;

  const onClickHandler = () => {
    setIsAdded((isAdded) => {
      if (isAdded) {
        deleteProduct(id);
        return !isAdded;
      }
      addProduct(product);
      return !isAdded;
    });
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("es-CO", {
      style: "currency",
      currency: "COP",
      minimumFractionDigits: 0,
    }).format(price);
  };

  useEffect(() => {
    const currentState = cartProducts.some((product) => product.id === id);
    setIsAdded(currentState);
  }, [cartProducts, id]);

  return (
    <article
      className={styles.productCardContainer}
      key={`product-${id}`}
      onClick={onClickHandler}
    >
      {isAdded ? (
        <img
          className={styles.addedStatusIcon}
          src={CheckCircleIconSVG}
          alt="added icon"
        />
      ) : (
        <img
          className={styles.addedStatusIcon}
          src={AddCircleIconSVG}
          alt="add icon"
        />
      )}

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
