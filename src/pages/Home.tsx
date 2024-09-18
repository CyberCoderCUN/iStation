import Header from "../components/Header/Header";
import { productList } from "./products.utils";
import CardProduct, { Product } from "../components/CardProduct/CardProduct";
import TopLabelPromo from "../components/TopLabelPromo/TopLabelPromo";

const HomePage = () => {
  const iPhoneList: Product[] = productList.filter(
    (product) => product.category === "iPhone"
  );
  const macList: Product[] = productList.filter(
    (product) => product.category === "Mac"
  );
  const accessoriesList: Product[] = productList.filter(
    (product) => product.category === "Accessory"
  );

  const categories = [
    {
      key: "iPhone",
      label: "iPhone",
    },
    {
      key: "mac",
      label: "Mac",
    },
    {
      key: "Accessories",
      label: "Accesorios",
    },
  ];

  return (
    <>
      <TopLabelPromo />
      <Header />
      <div className="container mx-auto px-6">
        <section>
          <h1 className="text-3xl font-bold text-center text-primary my-12 px-8 leading-10">
            Descubre la magia de la innovación con la exclusiva colección de
            productos y accesorios Apple de iStation en Colombia. Explora
            nuestra selección y haz de cada momento una experiencia inolvidable
            con la calidad y el prestigio que solo iStation puede ofrecer.
          </h1>
        </section>
        <div className="grid grid-cols-12">
          <div className="col-start-1 col-end-2">
            <ul>
              {categories.map((item) => (
                <li
                  key={item.key}
                  color={item.key === "delete" ? "danger" : "default"}
                  className={item.key === "delete" ? "text-danger" : ""}
                >
                  {item.label}
                </li>
              ))}
            </ul>
          </div>
          <div className="col-start-3 col-end-12 pb-12">
            <section>
              <h2>
                <p className="text-2xl font-bold">iPhone</p>
              </h2>
              <div className="gap-2 grid grid-cols-2 sm:grid-cols-4">
                {iPhoneList.map((item, index) => (
                  <CardProduct key={index} product={item} />
                ))}
              </div>
            </section>
            <section>
              <h2>
                <p className="text-2xl font-bold">Mac</p>
              </h2>
              <div className="gap-2 grid grid-cols-2 sm:grid-cols-4">
                {macList.map((item, index) => (
                  <CardProduct key={index} product={item} />
                ))}
              </div>
            </section>
            <section>
              <h2>
                <p className="text-2xl font-bold">Accesorios</p>
              </h2>
              <div className="gap-2 grid grid-cols-2 sm:grid-cols-4">
                {accessoriesList.map((item, index) => (
                  <CardProduct key={index} product={item} />
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
