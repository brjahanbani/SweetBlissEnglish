import { OrderProduct } from './order-product.class';

export class Order {
  public id!: number;
  public createdAt!: Date;
  public customerId?: number;
  public customerName!: string;
  public shippingAddress!: string;
  public totalPrice!: number;
  public orderProduct!: OrderProduct;

  constructor(data: Partial<Order>) {
    this.id = data.id!;
    this.createdAt = data.createdAt!;
    this.customerId = data?.customerId;
    this.customerName = data.customerName!;
    this.shippingAddress = data.shippingAddress!;
    this.totalPrice = data.totalPrice!;
    this.orderProduct = data.orderProduct!;
  }
}
