import Header from "../../components/Header/Header";
import { categoriesWithProduct } from "../../utils/products.utils";
import Banner from "../../components/Banner/Banner";
import CategoryWithProducts from "../../components/CategoryWithProducts/CategoryWithProducts";
import styles from "./Home.module.css";

const HomePage = () => {
  const iPhoneCategory = categoriesWithProduct.find(
    (category) => category.name === "iPhone"
  );
  const macCategory = categoriesWithProduct.find(
    (category) => category.name === "mac"
  );
  const accessoriesCategory = categoriesWithProduct.find(
    (category) => category.name === "accessories"
  );

  return (
    <>
      <Header />
      <Banner />
      <section>
        <div className={styles.categoryContent}>
          {iPhoneCategory ? (
            <CategoryWithProducts category={iPhoneCategory} />
          ) : null}
        </div>
      </section>
      <section>
        <div className={styles.categoryContent}>
          {macCategory ? <CategoryWithProducts category={macCategory} /> : null}
        </div>
      </section>
      <section>
        <div className={styles.categoryContent}>
          {accessoriesCategory ? (
            <CategoryWithProducts category={accessoriesCategory} />
          ) : null}
        </div>
      </section>
    </>
  );
};

export default HomePage;
