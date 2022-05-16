import { ProductInterface } from './interfaces/product.interface';
export class Product implements ProductInterface {
  public id!: number;
  public categoryId!: number;
  public name!: string;
  public price!: number;
  public code!: string;
  public description!: string;

  constructor(data: Product) {
    this.id = data.id;
    this.categoryId = data.categoryId;
    this.name = data.name;
    this.price = data.price;
    this.code = data.code;
    this.description = data.description;
  }
}
