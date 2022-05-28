import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { CartService } from 'src/app/services/cart.service';
import { ShippingService } from 'src/app/services/shipping.service';
import { OrderProduct } from 'src/class/order-product.class';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.css'],
})
export class InvoiceComponent implements OnInit {
  orderProducts$!: Observable<OrderProduct[]>;
  totalPrice!: number;
  currentDate = new Date();
  constructor(
    private cart: CartService,
    public shippingService: ShippingService,
    public authService: AuthService
  ) {
    this.orderProducts$ = this.cart.orderProducts$;
    this.totalPrice = this.cart.totalPrice;
  }

  ngOnInit(): void {}
}
