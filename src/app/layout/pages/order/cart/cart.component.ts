import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { CartService } from 'src/app/services/cart.service';
import { OrderProduct } from 'src/class/order-product.class';
import { Product } from 'src/class/product.class';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  orderProducts$!: Observable<OrderProduct[]>;
  totalPrice!: number;

  constructor(private cart: CartService) {
    this.orderProducts$ = this.cart.orderProducts$;
    this.totalPrice = this.cart.totalPrice;
  }

  ngOnInit(): void {}

  addToCart(product: Product, quantity: number) {
    this.cart.addToCart(product, quantity);
  }
  minusQuantity(index: number): void {
    this.cart.minusQuantity(index);
  }
  plusQuantity(index: number): void {
    this.cart.plusQuantity(index);
  }
}
