import { ProductInterface } from './product.interface';

export interface CategoryInterface {
  id: number;
  name: string;
  code: string;
  imageSrc: string;
  products?: ProductInterface[];
}
