import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { CategoryInterface } from 'src/class/interfaces/category.interface';

// import GetCategoriesJson from 'src/mock/getCategories.json';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  constructor(private http: HttpClient) {}
  //   private categories: CategoryInterface[] = GetCategoriesJson;

  getCategories(): Observable<CategoryInterface[]> {
    // return of(this.categories).pipe(shareReplay());
    return this.http.get<CategoryInterface[]>('assets/mock/getCategories.json');
    //   .pipe(map((response) => response as CategoryInterface[]));
  }

  //   getCategory(id: number): Observable<CategoryInterface | undefined> {
  //     const category = this.categories.find((e) => e.id == id);
  //     return of(category);
  //   }
}
