import { CategoryWithProductsProps } from "./CategoryWithProducts.types";
import CardProduct from "../ProductCard/ProductCard";
import styles from "./CategoryWithProducts.module.css";

const CategoryWithProducts = (props: CategoryWithProductsProps) => {
  const { category } = props;
  const { name, products } = category;

  return (
    <article className={styles.container}>
      <div className={styles.categoryName}>{name}</div>
      <div className={styles.categoryProducts}>
        {products.map((item, index) => (
          <CardProduct key={index} product={item} />
        ))}
      </div>
    </article>
  );
};

export default CategoryWithProducts;
