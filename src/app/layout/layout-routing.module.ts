import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./pages/home/home.module').then((m) => m.HomeModule),
      },
      {
        path: '',
        loadChildren: () =>
          import('./pages/authentication/authentication.module').then(
            (m) => m.AuthenticationModule
          ),
      },
      {
        path: '',
        loadChildren: () =>
          import('./pages/products/categories/categories.module').then(
            (m) => m.CategoriesModule
          ),
      },
      {
        path: '',
        loadChildren: () =>
          import('./pages/products/category/category.module').then(
            (m) => m.CategoryModule
          ),
      },
      {
        path: '',
        loadChildren: () =>
          import('./pages/order/order.module').then((m) => m.OrderModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LayoutRoutingModule {}
