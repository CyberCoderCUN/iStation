import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";

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
    <Card
      shadow="sm"
      key={`product-${id}`}
      isPressable
      onPress={() => console.log("item pressed")}
    >
      <CardBody className="overflow-visible p-0">
        <Image
          shadow="sm"
          radius="lg"
          width="100%"
          alt={name}
          className="w-full object-cover"
          src={image}
        />
      </CardBody>
      <CardFooter className="text-small justify-between">
        <b>{name}</b>
        <p className="text-default-500">{price}</p>
      </CardFooter>
    </Card>
  );
};

export default CardProduct;
