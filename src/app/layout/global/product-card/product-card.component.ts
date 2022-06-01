import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from 'src/class/product.class';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css'],
})
export class ProductCardComponent implements OnInit {
  @Input() product!: Product;
  @Output() addToCart = new EventEmitter<{
    product: Product;
    quantity: number;
    addAlert: boolean;
  }>();
  constructor() {}

  ngOnInit(): void {}
}
