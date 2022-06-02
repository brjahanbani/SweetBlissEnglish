import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { OrderProduct } from 'src/class/order-product.class';
import { Order } from 'src/class/order.class';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  private _myOrders$ = new BehaviorSubject<Order[]>([]);

  constructor(private storage: StorageService) {
    const myOrdersParsed = this.storage.getItem<Order[]>('myOrders') || [];
    const myOrdersClasses = myOrdersParsed.map((parsed) => new Order(parsed));

    this._myOrders$.next(myOrdersClasses);
  }

  // submitOrder1(): void {
  //   this.cart.orderProducts$.subscribe((orderProducts) => {
  //     const order = new Order({
  //       customerName: this.authService.username,
  //       shippingAddress: this.shippingService.shippingAddress,
  //       orderProducts: orderProducts, // ham esm bashe mitoni hazf koni value ro
  //     });
  //     this._myOrders$.value.push(order);

  //     this.storage.setItem<Order[]>('order', this._myOrders$.value);
  //     this.cart.clearCart();
  //     // shipping clean
  //   });
  // }

  submitOrder2(
    customerName: string,
    shippingAddress: string,
    orderProducts: OrderProduct[]
  ) {
    const order = new Order({
      customerName,
      shippingAddress,
      orderProducts,
    });
    this._myOrders$.value.push(order);
    this.storage.setItem<Order[]>('order', this._myOrders$.value);
  }
}
