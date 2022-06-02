import { OrderProduct } from './order-product.class';

export class Order {
  public id?: number;
  public createdAt!: Date;
  public customerId?: number;
  public customerName!: string;
  public shippingAddress!: string;
  public orderProducts!: OrderProduct[];

  constructor(data: Partial<Order>) {
    this.id = data.id!;
    this.createdAt = new Date();

    this.customerId = data?.customerId;
    this.customerName = data.customerName!;
    this.shippingAddress = data.shippingAddress!;
    this.orderProducts = data.orderProducts!;
  }

  get totalPrice(): number {
    return this.orderProducts
      .map((orderProduct) => orderProduct.price)
      .reduce((sum, current) => sum + current, 0);
  }
}
