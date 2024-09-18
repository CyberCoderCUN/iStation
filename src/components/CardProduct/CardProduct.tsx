interface CardProductProps {
  product: Product;
}

export interface Product {
  name: string;
  image: string;
  description: string;
  category: string;
  price: number;
  id: number;
}

const CardProduct = (props: CardProductProps) => {
  const { product } = props;
  const { name, image, description, price, id } = product;

  return (
    <article key={`product-${id}`} onClick={() => console.log("item pressed")}>
      <div className="overflow-visible p-0">
        <img
          width="100%"
          alt={name}
          className="w-full object-cover"
          src={image}
        />
      </div>
      <div className="text-small justify-between">
        <b>{name}</b>
        <b>{description}</b>
        <p className="text-default-500">{price}</p>
      </div>
    </article>
  );
};

export default CardProduct;
