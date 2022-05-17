import { CategoryInterface } from './interfaces/category.interface';
import { Product } from './product.class';

export class Category implements CategoryInterface {
  public id!: number;
  public name!: string;
  public code!: string;
  public imageSrc!: string;
  public products?: Product[];

  constructor(data: Category) {
    this.id = data.id;
    this.name = data.name;
    this.code = data.code;
    this.imageSrc = data.imageSrc;
    this.products = data?.products;
  }
}
