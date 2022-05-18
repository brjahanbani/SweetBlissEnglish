import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { exhaustMap, map, mergeMap, Observable, tap } from 'rxjs';
import { CategoryService } from 'src/app/services/category.service';
import { Category } from 'src/class/category.class';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
})
export class CategoryComponent implements OnInit {
  category$!: Observable<Category>;
  constructor(
    private categoryService: CategoryService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    // this.category$ = this.categoryService.getCategory();
    this.category$ = this.route.params.pipe(
      exhaustMap(({ id }) => this.categoryService.getCategory(id))
    );
  }
}
