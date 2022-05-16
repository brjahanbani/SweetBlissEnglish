import { Component, Input, OnInit } from '@angular/core';

import { CategoryInterface } from 'src/class/interfaces/category.interface';

@Component({
  selector: 'app-category-card',
  templateUrl: './category-card.component.html',
  styleUrls: ['./category-card.component.css'],
})
export class CategoryCardComponent implements OnInit {
  @Input() category!: CategoryInterface;

  constructor() {}

  ngOnInit(): void {}
}
