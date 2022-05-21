import { Injectable } from '@angular/core';
import { OrderProduct } from 'src/class/order-product.class';
import { Product } from 'src/class/product.class';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  orderProducts: OrderProduct[] = [];

  constructor() {}

  get totalPrice(): number {
    return this.orderProducts
      .map((orderProduct) => orderProduct.price)
      .reduce((sum, current) => sum + current, 0);
  }

  addToCart(product: Product, quantity: number): void {
    const index = this.orderProducts
      .map((orderProduct) => orderProduct.product.id)
      .indexOf(product.id);
    if (index !== -1) {
      this.orderProducts[index].quantity =
        quantity + this.orderProducts[index].quantity;
    } else {
      const orderProduct = new OrderProduct({ product, quantity });
      this.orderProducts.push(orderProduct);
    }
    console.log(this.orderProducts);
  }
}
