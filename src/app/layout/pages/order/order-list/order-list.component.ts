import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { OrderService } from 'src/app/services/order.service';
import { Order } from 'src/class/order.class';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css'],
})
export class OrderListComponent implements OnInit {
  constructor(public orderService: OrderService) {}

  ngOnInit(): void {}
}
