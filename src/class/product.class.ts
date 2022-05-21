import { ProductInterface } from './interfaces/product.interface';
export class Product implements ProductInterface {
  public id!: number;
  public categoryId!: number;
  public name!: string;
  public price!: number;
  public code!: string;
  public description!: string;
  public imageSrc!: string;

  constructor(data: Partial<Product>) {
    this.id = data.id!;
    this.categoryId = data.categoryId!;
    this.name = data.name!;
    this.price = data.price!;
    this.code = data.code!;
    this.description = data.description!;
    this.imageSrc = data.imageSrc!;
  }
}
