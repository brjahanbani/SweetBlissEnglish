import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { OrderProduct } from 'src/class/order-product.class';
import { Product } from 'src/class/product.class';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private _orderProducts$ = new BehaviorSubject<OrderProduct[]>([]);
  public addAlert!: boolean;

  constructor(private storage: StorageService) {
    // parsed shode serfan etelaate koli ra darad va na etelaate class manande getter ha va gheyre kar nmikonad
    // banabarin bayad new class ijad kard ta inha kar konad
    const orderProductsParsed =
      this.storage.getItem<OrderProduct[]>('orderProducts') || [];
    const orderProductClasses = orderProductsParsed.map(
      (parsed) => new OrderProduct(parsed)
    );

    this._orderProducts$.next(orderProductClasses);
  }

  get orderProducts$(): Observable<OrderProduct[]> {
    return this._orderProducts$.asObservable();
  }

  get totalPrice(): number {
    return this._orderProducts$.value
      .map((orderProduct) => orderProduct.price)
      .reduce((sum, current) => sum + current, 0);
  }

  addToCart(product: Product, quantity: number, addAlert: boolean): void {
    const index = this._orderProducts$.value
      .map((orderProduct) => orderProduct.product.id)
      .indexOf(product.id);
    if (index !== -1) {
      this._orderProducts$.value[index].quantity =
        quantity + this._orderProducts$.value[index].quantity;
      this.addAlert = true;
      setTimeout(() => this.clearMessage(addAlert), 3000);
    } else {
      const orderProduct = new OrderProduct({ product, quantity });
      this._orderProducts$.value.push(orderProduct);
      this.addAlert = true;
      setTimeout(() => this.clearMessage(addAlert), 3000);
    }

    this.storage.setItem<OrderProduct[]>(
      'orderProducts',
      this._orderProducts$.value
    );
  }

  clearMessage(addAlert: boolean) {
    this.addAlert = false;
  }

  minusQuantity(index: number): void {
    if (index !== -1) {
      if (this._orderProducts$.value[index].quantity > 1) {
        this._orderProducts$.value[index].quantity =
          this._orderProducts$.value[index].quantity - 1;
      }
    }
    this.storage.setItem<OrderProduct[]>(
      'orderProducts',
      this._orderProducts$.value
    );
  }

  plusQuantity(index: number): void {
    if (index !== -1) {
      this._orderProducts$.value[index].quantity =
        this._orderProducts$.value[index].quantity + 1;
    }
    this.storage.setItem<OrderProduct[]>(
      'orderProducts',
      this._orderProducts$.value
    );
  }

  removeFromCart(index: number): void {
    if (index !== -1) {
      this._orderProducts$.value.splice(index, 1);
    }
    this.storage.setItem<OrderProduct[]>(
      'orderProducts',
      this._orderProducts$.value
    );
  }

  clearCart() {
    this._orderProducts$.next([]);
    this.storage.setItem<OrderProduct[]>(
      'orderProducts',
      this._orderProducts$.value
    );
  }
}
