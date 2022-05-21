import { Product } from './product.class';
export class OrderProduct {
  public orderId?: number;
  public quantity!: number;
  public product!: Product;

  constructor(data: Partial<OrderProduct>) {
    this.orderId = data?.orderId;
    this.quantity = data.quantity || 1;
    this.product = data.product!;
  }

  get price(): number {
    return this.quantity * this.product.price;
  }
}
