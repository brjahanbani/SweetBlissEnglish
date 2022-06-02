import { Component, OnInit } from '@angular/core';
import { filter, Observable, take } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { CartService } from 'src/app/services/cart.service';
import { OrderService } from 'src/app/services/order.service';
import { ShippingService } from 'src/app/services/shipping.service';
import { OrderProduct } from 'src/class/order-product.class';
import { Order } from 'src/class/order.class';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.css'],
})
export class InvoiceComponent implements OnInit {
  orderProducts$!: Observable<OrderProduct[]>;
  totalPrice!: number;
  currentDate = new Date();
  order!: Order;

  constructor(
    private cart: CartService,
    public shippingService: ShippingService,
    public authService: AuthService,
    public orderService: OrderService
  ) {
    this.orderProducts$ = this.cart.orderProducts$;
    this.totalPrice = this.cart.totalPrice;
  }

  ngOnInit(): void {}

  submitOrder() {
    // this.orderService.submitOrder1();
    // OR
    this.cart.orderProducts$.pipe(take(1)).subscribe((orderProducts) => {
      if (orderProducts.length > 1) {
        this.orderService.submitOrder2(
          this.authService.username,
          this.shippingService.shippingAddress,
          orderProducts
        );
        this.cart.clearCart();
        // this.shippingService.setAddress('');
      }
    });
  }
}
