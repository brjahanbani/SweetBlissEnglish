import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CategoryService } from 'src/app/services/category.service';
import { Category } from 'src/class/category.class';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css'],
})
export class CategoriesComponent implements OnInit {
  // categories: any;
  categories$!: Observable<Category[]>;
  constructor(private categoryService: CategoryService) {}

  ngOnInit(): void {
    // this.categoryService
    //   .getCategories()
    //   .subscribe((data: CategoryInteface[]) => {
    //     this.categories = data;
    //   });
    this.categories$ = this.categoryService.getCategories();
  }
}
