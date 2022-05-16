import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { exhaustMap, Observable } from 'rxjs';
import { CategoryService } from 'src/app/services/category.service';
import { CategoryInterface } from 'src/class/interfaces/category.interface';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css'],
})
export class CategoriesComponent implements OnInit {
  // categories: any;
  categories$!: Observable<CategoryInterface[]>;
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
