import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, shareReplay } from 'rxjs';
import { Category } from 'src/class/category.class';
import { Product } from 'src/class/product.class';
import { CategoryInterface } from 'src/class/interfaces/category.interface';

// import GetCategoriesJson from 'src/mock/getCategories.json';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  constructor(private http: HttpClient) {}
  //   private categories: CategoryInterface[] = GetCategoriesJson;

  getCategories(): Observable<Category[]> {
    // return of(this.categories).pipe(shareReplay());
    return this.http
      .get<CategoryInterface[]>('assets/mock/getCategories.json')
      .pipe(
        map((categoryInterfaceArray: CategoryInterface[]) =>
          categoryInterfaceArray.map(
            (categoryInterface) =>
              new Category({ ...categoryInterface, products: undefined })
          )
        ),
        shareReplay()
      );
  }

  getCategory(id: number): Observable<Category> {
    // const category = this.categories.find((e) => e.id == id);
    // return of(category);
    console.log('id', id);

    return this.http
      .get<CategoryInterface>('assets/mock/getCategoryById.json')
      .pipe(
        map((categoryInterface: CategoryInterface) => {
          const products = categoryInterface.products?.map(
            (productInterface) => new Product(productInterface)
          );
          return new Category({ ...categoryInterface, products });
        }),
        shareReplay()
      );
  }
}
