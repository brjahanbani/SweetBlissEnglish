import { Component, Input, OnInit } from '@angular/core';
import { Category } from 'src/class/category.class';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css'],
})
export class ProductCardComponent implements OnInit {
  @Input() category!: Category;
  constructor() {}

  ngOnInit(): void {}
}
