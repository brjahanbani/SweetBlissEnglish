import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { OrderProduct } from 'src/class/order-product.class';
import { Product } from 'src/class/product.class';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private _orderProducts$ = new BehaviorSubject<OrderProduct[]>([]);

  constructor() {}

  get orderProducts$(): Observable<OrderProduct[]> {
    return this._orderProducts$.asObservable();
  }

  get totalPrice(): number {
    return this._orderProducts$.value
      .map((orderProduct) => orderProduct.price)
      .reduce((sum, current) => sum + current, 0);
  }

  addToCart(product: Product, quantity: number): void {
    const index = this._orderProducts$.value
      .map((orderProduct) => orderProduct.product.id)
      .indexOf(product.id);
    if (index !== -1) {
      this._orderProducts$.value[index].quantity =
        quantity + this._orderProducts$.value[index].quantity;
    } else {
      const orderProduct = new OrderProduct({ product, quantity });
      this._orderProducts$.value.push(orderProduct);
    }
    console.log(this._orderProducts$.value);
  }

  minusQuantity(index: number): void {
    if (index !== -1) {
      if (this._orderProducts$.value[index].quantity > 1) {
        this._orderProducts$.value[index].quantity =
          this._orderProducts$.value[index].quantity - 1;
      }
    }
  }

  plusQuantity(index: number): void {
    if (index !== -1) {
      this._orderProducts$.value[index].quantity =
        this._orderProducts$.value[index].quantity + 1;
    }
  }
}
