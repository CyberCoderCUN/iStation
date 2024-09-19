import { Product } from "./product.types";

export interface CategoryWithProducts {
  id: number;
  name: string;
  products: Product[];
}
