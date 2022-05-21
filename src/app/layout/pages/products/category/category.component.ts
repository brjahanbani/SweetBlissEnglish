import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { exhaustMap, Observable, shareReplay } from 'rxjs';
import { CartService } from 'src/app/services/cart.service';
import { CategoryService } from 'src/app/services/category.service';
import { Category } from 'src/class/category.class';
import { Product } from 'src/class/product.class';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
})
export class CategoryComponent implements OnInit {
  category$!: Observable<Category>;
  constructor(
    private categoryService: CategoryService,
    private route: ActivatedRoute,
    private cart: CartService
  ) {}

  ngOnInit(): void {
    // this.category$ = this.categoryService.getCategory();
    this.category$ = this.route.params.pipe(
      exhaustMap(({ id }) => this.categoryService.getCategory(id)),
      shareReplay() //to make it hot and emit the second calling of server
    );
  }

  addToCart(product: Product, quantity: number) {
    this.cart.addToCart(product, quantity);
  }
}
